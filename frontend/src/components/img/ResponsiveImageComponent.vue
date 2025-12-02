<template>
  <img
    v-if="src"
    :src="`${src}?w=${largestWidth}`"
    :srcset="srcset"
    sizes="100vw"
    :alt="alt"
    loading="lazy"
    class="w-full h-full object-cover"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  breakpoints: {
    type: Object,
    default: () => ({ sm: 200, md: 400, lg: 600 })
  }
})

const largestWidth = Math.max(...Object.values(props.breakpoints))

const srcset = computed(() =>
  Object.values(props.breakpoints)
    .map(w => `${props.src}?w=${w} ${w}w`)
    .join(', ')
)
</script>
