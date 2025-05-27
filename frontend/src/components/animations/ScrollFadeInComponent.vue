<template>
  <div
    ref="container"
    :class="[
      'transition-all duration-1200 ease-out',
      visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    const screenWidth = window.innerWidth

    const threshold = screenWidth < 800 ? 0.3 : 0.9

    const observer = new IntersectionObserver(
      ([entry]) => {
        this.visible = entry.isIntersecting
      },
      { threshold }
    )

    observer.observe(this.$refs.container)
    this.observer = observer
  },
  beforeUnmount() {
    if (this.observer && this.$refs.container) {
      this.observer.unobserve(this.$refs.container)
    }
  }
}
</script>