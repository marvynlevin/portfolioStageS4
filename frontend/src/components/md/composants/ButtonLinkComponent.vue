<template>
  <a :href="url" target="_blank" class="btn-espresso w-xl">{{ text }}</a>
</template>

<script setup>
defineProps({
  url: String,
  text: String,
})
</script>
