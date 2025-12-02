<template>
  <img
    :src="currentImageUrl"
    :alt="alt"
    :class="imgClass"
    loading="lazy"
    :style="imgStyle"
    :width="currentSize"
    :height="Math.round(currentSize * 0.508)"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  sizes: {
    type: Object,
    default: () => ({
      mobile: 200,    // < 640px
      tablet: 300,    // 640px - 1023px
      desktop: 450,   // 1024px - 1279px
      large: 600      // ≥ 1280px
    })
  },
  // Ratio d'aspect (width/height) - calculé à partir de tes images: 500/254 = 1.9685
  aspectRatio: {
    type: Number,
    default: 500/254 // ≈ 1.9685
  },
  // Qualité pour Vercel (1-100)
  quality: {
    type: Number,
    default: 80
  },
  imgClass: {
    type: [String, Array, Object],
    default: ''
  },
  imgStyle: {
    type: Object,
    default: () => ({})
  }
})

const screenWidth = ref(0)
const currentSize = ref(props.sizes.large)

const updateImage = () => {
  screenWidth.value = window.innerWidth

  if (screenWidth.value < 640) {
    currentSize.value = props.sizes.mobile
  } else if (screenWidth.value < 1024) {
    currentSize.value = props.sizes.tablet
  } else if (screenWidth.value < 1280) {
    currentSize.value = props.sizes.desktop
  } else {
    currentSize.value = props.sizes.large
  }

  console.log(`📱 ${screenWidth.value}px → Image: ${currentSize.value}px`)
}

// Détecte si on est en production sur Vercel
const isVercelProduction = computed(() => {
  return import.meta.env.PROD && window.location.hostname.includes('vercel.app')
})

// URL pour Vercel Image Optimization
const vercelImageUrl = computed(() => {
  const params = new URLSearchParams({
    url: props.src.startsWith('/') ? props.src : `/${props.src}`,
    w: currentSize.value.toString(),
    q: props.quality.toString()
  })

  // Optionnel: format webp pour meilleure compression
  // params.set('format', 'webp')

  return `/_vercel/image?${params.toString()}`
})

// URL normale (pour dev ou non-Vercel)
const normalImageUrl = computed(() => {
  const timestamp = Date.now()
  return `${props.src}?w=${currentSize.value}&t=${timestamp}`
})

// URL finale
const currentImageUrl = computed(() => {
  return isVercelProduction.value ? vercelImageUrl.value : normalImageUrl.value
})

// Calcul de la hauteur basé sur l'aspect ratio
const imageHeight = computed(() => {
  return Math.round(currentSize.value / props.aspectRatio)
})

onMounted(() => {
  updateImage()
  window.addEventListener('resize', updateImage)

  // Log pour debug
  console.log('🌐 Environnement:', import.meta.env.MODE)
  console.log('🚀 Vercel détecté:', isVercelProduction.value)
  console.log('🖼️ URL image:', currentImageUrl.value)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateImage)
})
</script>