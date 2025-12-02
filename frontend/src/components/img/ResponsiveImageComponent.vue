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
  // Force l'utilisation de Vercel Image Optimization (pour tester)
  forceVercel: {
    type: Boolean,
    default: false
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

// Meilleure détection de Vercel
const isVercel = computed(() => {
  // 1. Si forcé manuellement
  if (props.forceVercel) return true

  // 2. En production (build Vercel)
  if (import.meta.env.PROD) {
    // Vérifie les headers spécifiques à Vercel
    const vercelHeaders = [
      'x-vercel-id',
      'server', // Vercel met souvent 'Vercel' ici
      'x-vercel-deployment-url'
    ]

    // Vérifie aussi l'URL
    const hostname = window.location.hostname
    const isVercelDomain =
      hostname.includes('vercel.app') ||
      hostname.includes('now.sh') ||
      hostname.includes('vercel.com')

    // Pour être sûr, on peut aussi vérifier si l'API Vercel répond
    return isVercelDomain || import.meta.env.VITE_VERCEL === '1'
  }

  return false
})

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

  // Construction de l'URL selon l'environnement
  if (isVercel.value) {
    // URL Vercel Image Optimization
    // IMPORTANT: L'URL doit être absolue et publique
    const imagePath = props.src.startsWith('http') ? props.src : window.location.origin + props.src

    // Vercel accepte différents formats :
    // Option 1: Service officiel (nécessite que l'image soit publique)
    currentImageUrl.value = `/_vercel/image?url=${encodeURIComponent(imagePath)}&w=${currentSize.value}&q=75`

    // Option 2: Alternative avec l'API Next.js (fonctionne aussi)
    // currentImageUrl.value = `/_next/image?url=${encodeURIComponent(imagePath)}&w=${currentSize.value}&q=75`

    // Option 3: Via le proxy CDN
    // currentImageUrl.value = `/cdn-cgi/image/width=${currentSize.value},format=auto${props.src}`

    console.log(`🚀 Vercel Image: ${currentSize.value}px`)
  } else {
    // En développement ou autre hébergement
    const timestamp = Date.now()
    currentImageUrl.value = `${props.src}?w=${currentSize.value}&t=${timestamp}`
    console.log(`💻 Dev Image: ${currentSize.value}px`)
  }
}

onMounted(() => {
  // Log pour debug
  console.log('🔍 Détection Vercel:', {
    mode: import.meta.env.MODE,
    prod: import.meta.env.PROD,
    hostname: window.location.hostname,
    isVercel: isVercel.value,
    forceVercel: props.forceVercel
  })

  updateImage()
  window.addEventListener('resize', updateImage)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateImage)
})
</script>