<template>
  <img
    :src="currentImageUrl"
    :alt="alt"
    :class="imgClass"
    loading="lazy"
    :style="imgStyle"
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
      mobile: 200,
      tablet: 300,
      desktop: 450,
      large: 600
    })
  },
  // Active Vercel Image Optimization en production
  useVercel: {
    type: Boolean,
    default: import.meta.env.PROD // TRUE en production, FALSE en dev
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
const currentSize = ref(600)
const currentImageUrl = ref('')

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

  // Construction de l'URL
  if (props.useVercel && import.meta.env.PROD) {
    // IMPORTANT: Pour Vercel, l'image doit être accessible publiquement
    // Si ton image est dans /public, utilise le chemin relatif
    const imagePath = props.src

    // Vercel Image Optimization - format officiel
    // Note: Les images doivent être dans le dossier public ou sur un CDN public
    currentImageUrl.value = `/_vercel/image?url=${encodeURIComponent(imagePath)}&w=${currentSize.value}&q=80`

    console.log(`🚀 Vercel Image (${currentSize.value}px):`, currentImageUrl.value)
  } else {
    // Développement ou fallback
    const timestamp = Date.now()
    currentImageUrl.value = `${props.src}?w=${currentSize.value}&t=${timestamp}`
    console.log(`💻 Dev Image (${currentSize.value}px):`, currentImageUrl.value)
  }
}

onMounted(() => {
  console.log('🖼️ Image Component:', {
    src: props.src,
    useVercel: props.useVercel,
    production: import.meta.env.PROD,
    mode: import.meta.env.MODE
  })

  updateImage()
  window.addEventListener('resize', updateImage)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateImage)
})
</script>