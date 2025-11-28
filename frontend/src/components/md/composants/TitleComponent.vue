<template>
  <h2 :class="['text-35-50-60-80', 'font-bold', 'italic', 'leading-none', 'mt-4', 'mb-2', align]">
    {{ text }}
  </h2>
</template>

<script setup>
defineProps({
  text: String,
  align: {
    type: String,
    default: "text-left"
  }
})
</script>
