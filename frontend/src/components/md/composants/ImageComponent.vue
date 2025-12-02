<template>
  <div class="w-full mx-auto">

    <ResponsiveImageComponent
        v-if="src"
        :src="src"
        :alt="alt"
        :breakpoints="{ sm: 200, md: 400, lg: 600 }"
        :class="[
        'w-full mx-auto md:w-2/3 rounded-lg my-4',
        shadow ? 'shadow-[1px_1px_22px_0_rgba(0,0,0,0.25)]' : ''
      ]"
    />

    <p
        v-if="caption"
        class="text-center text-12-13-16-20 text-espresso -mt-2 mb-4"
    >
      {{ caption }}
    </p>
  </div>
</template>

<script setup>
import ResponsiveImageComponent from "@/components/img/ResponsiveImageComponent.vue";

defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ""
  },
  caption: {
    type: String,
    default: null
  },
  shadow: {
    type: Boolean,
    default: true
  }
})
</script>
