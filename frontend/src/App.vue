<template>
  <div class="bg-vanilla h-full">
    <NavbarComponent/>
    <CustomCursorComponent/>
    <ScrollToTopComponent/>

    <router-view/>

    <FooterComponent/>
  </div>
</template>

<script>
import NavbarComponent from './components/navbar/NavbarComponent.vue';
import CustomCursorComponent from "@/components/cursor/CustomCursorComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import ScrollToTopComponent from "@/components/elements/ScrollToTopComponent.vue";

export default {
  name: 'App',
  components: {
    ScrollToTopComponent,
    CustomCursorComponent,
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style>
</style>
