<template>
  <div class="flex flex-col items-center justify-center w-full max-w-[100vw] mt-12 sm:mt-24 relative">
    <!-- Flèche gauche mode normal -->
    <button
      @click="prev"
      :disabled="currentIndex === 0"
      class="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 text-mocha cursor-pointer text-4xl font-bold hover:text-espresso hover:scale-110 transition disabled:opacity-0 disabled:cursor-not-allowed z-10"
    >
      &#8592;
    </button>

    <!-- Image avec effet hover + plein écran -->
    <!-- Wrapper relatif pour gérer l’overlay -->
    <div class="relative w-[75vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] mx-auto cursor-pointer rounded-sm overflow-hidden">
  <img
    :src="`/${currentFigure.src}`"
    :alt="currentFigure.alt"
    class="w-full h-auto transition duration-300 transform hover:scale-102"
    @click="isFullscreen = true"
  />

  <!-- Overlay cachée par défaut, visible au hover du parent -->
  <div
    class="absolute inset-0 bg-espresso flex items-center justify-center opacity-0 hover:opacity-25 transition-opacity duration-300 rounded-sm"
    @click="isFullscreen = true"
  >
    <span class="text-vanilla text-45-80-90-100 font-semibold select-none">
      AGRANDIR
    </span>
  </div>
</div>

    <p class="text-12-13-16-20 text-espresso italic mt-2 px-12 text-center">
      {{ currentFigure.caption }}
    </p>

    <!-- Flèche droite mode normal -->
    <button
      @click="next"
      :disabled="currentIndex === figures.length - 1"
      class="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 text-mocha cursor-pointer text-4xl font-bold hover:text-espresso hover:scale-110 transition disabled:opacity-0 disabled:cursor-not-allowed z-10"
    >
      &#8594;
    </button>

    <!-- Modal plein écran avec flèches -->
    <div
      v-if="isFullscreen"
      class="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center"
      @click.self="isFullscreen = false"
    >
      <!-- Flèche gauche -->
      <button
        @click.stop="prev"
        :disabled="currentIndex === 0"
        class="absolute left-4 md:left-10 text-vanilla cursor-pointer text-4xl font-bold hover:text-espresso transition opacity-0 sm:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed"
      >
        &#8592;
      </button>

      <!-- Image en plein écran -->
      <div class="flex flex-col items-center justify-center w-full max-w-[100vw]">
        <img
          :src="`/${currentFigure.src}`"
          :alt="currentFigure.alt"
          class="max-w-[80vw] max-h-[80vh] object-contain rounded"
        />
        <p class="text-12-13-16-20 text-vanilla italic mt-2 text-center">
          {{ currentFigure.caption }}
        </p>
      </div>

      <!-- Flèche droite -->
      <button
        @click.stop="next"
        :disabled="currentIndex === figures.length - 1"
        class="absolute right-4 md:right-10 text-vanilla cursor-pointer text-4xl font-bold hover:text-espresso transition opacity-0 sm:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed"
      >
        &#8594;
      </button>

      <!-- Bouton de fermeture -->
      <button
        class="absolute top-6 right-6 cursor-pointer text-vanilla text-3xl font-bold hover:text-espresso transition"
        @click="isFullscreen = false"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  figures: {
    type: Array,
    required: true,
    default: () => [],
  },
})

const currentIndex = ref(0)
const isFullscreen = ref(false)

const currentFigure = computed(() => props.figures[currentIndex.value])

let intervalId = null

const startAutoScroll = () => {
  clearInterval(intervalId)
  intervalId = setInterval(() => {
    if (!isFullscreen.value) {
      next(false)
    }
  }, 10000)
}

const next = (reset = true) => {
  if (currentIndex.value < props.figures.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
  if (reset) startAutoScroll()
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    startAutoScroll()
  }
}

watch(isFullscreen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

onMounted(() => {
  startAutoScroll()
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

