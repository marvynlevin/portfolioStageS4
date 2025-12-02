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

// TODO: ABANDON car non fonctionnel avec VITE et VERCEL non détecté (idk)

import { ref, onMounted, onUnmounted } from 'vue'

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
const currentImageUrl = ref('')

// TODO: ne fonctionne pas... j'en ai marre

const testImageSizes = async () => {
  // console.log('Test des tailles d\'images:')

  const sizes = [200, 300, 450, 600]
  for (const size of sizes) {
    const testUrl = `${props.src}?w=${size}&test=${Date.now()}`
    // console.log(`Testing: ${testUrl}`)

    const img = new Image()
    img.onload = function() {
      // console.log(`${size}px -> ${this.naturalWidth}x${this.naturalHeight}`)
    }
    img.onerror = function() {
      // console.log(`${size}px -> ERREUR de chargement`)
    }
    img.src = testUrl
  }
}

const updateImage = () => {
  screenWidth.value = window.innerWidth

  let size
  if (screenWidth.value < 640) {
    size = props.sizes.mobile
  } else if (screenWidth.value < 1024) {
    size = props.sizes.tablet
  } else if (screenWidth.value < 1280) {
    size = props.sizes.desktop
  } else {
    size = props.sizes.large
  }

  const timestamp = Date.now()
  currentImageUrl.value = `${props.src}?w=${size}&t=${timestamp}`

  // console.log(`${screenWidth.value}px → Image: ${size}px`)
}

onMounted(() => {
  updateImage()
  window.addEventListener('resize', updateImage)

  setTimeout(testImageSizes, 1000)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateImage)
})
</script>