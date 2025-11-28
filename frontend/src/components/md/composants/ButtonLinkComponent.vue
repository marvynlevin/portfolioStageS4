<template>
  <a :href="url" target="_blank">
    <button class="btn-espresso">
      {{ text }}
    </button>
  </a>
</template>

<script setup>
defineProps({
  url: String,
  text: String,
})
</script>
