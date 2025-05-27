<template>
  <button
    v-if="showButton"
    @click="scrollToTop"
    class="fixed bottom-4 cursor-pointer right-4 p-3 rounded-full bg-blush text-white hover:bg-dusk transition-all duration-300 shadow-lg hover:-translate-y-2 transition-transform duration-200 z-[40]"
  >
    ↑
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
</style>
