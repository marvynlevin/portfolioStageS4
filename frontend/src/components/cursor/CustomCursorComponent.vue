<template>
  <div
    ref="cursor"
    class="fixed pointer-events-none z-[99999] w-8 h-8 transition-transform duration-200"
    :class="{ 'scale-125 opacity-30': isHovering }"
    :style="cursorStyle"
  >
    <img src="@/assets/cursor/cursor.svg" alt="cursor" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const cursor = ref(null)
const x = ref(0)
const y = ref(0)
const isHovering = ref(false)

const cursorStyle = computed(() => ({
  left: `${x.value}px`,
  top: `${y.value}px`,
}))

function onMouseMove(e) {
  x.value = e.clientX
  y.value = e.clientY
}

function checkHover(e) {
  const el = e.target.closest('.cursor-pointer')
  isHovering.value = !!el
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  document.body.addEventListener('mouseover', checkHover)
  document.body.addEventListener('mouseout', checkHover)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.body.removeEventListener('mouseover', checkHover)
  document.body.removeEventListener('mouseout', checkHover)
})
</script>


<style>
body, * {
  cursor: none !important;
}
</style>
