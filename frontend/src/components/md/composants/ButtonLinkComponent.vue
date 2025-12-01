<template>
  <a :href="url" target="_blank">
    <button class="btn-espresso flex items-center gap-2 hover:bg-noise cursor-pointer">

      <i
        v-if="icon"
        :class="[
          icon,
          'bi',
          'text-17-18-21-25',
          'text-vanilla',
        ]"
      />

      <span>{{ text }}</span>
    </button>
  </a>
</template>

<script setup>
defineProps({
  url: String,
  text: String,
  icon: {
    type: String,
    default: null
  }
})
</script>
