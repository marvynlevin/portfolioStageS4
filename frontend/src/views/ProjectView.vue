<template>
  <div class="project-page px-[2%] sm:px-[5%] md:px-[10%] lg:px-[15%] py-10">
    <p class="text-14-15-16-20 font-light italic">{{ metadata.subTitle }}</p>
    <h1 class="text-60-95-105-115 font-black leading-none mb-2 md:mb-6">{{ metadata.title }}</h1>
    <img v-if="metadata.image" :src="metadata.image" :alt="metadata.title" class="w-full rounded-lg mb-6"/>
    <component class="text-justify text-14-15-18-22 px-[8%] md:px-[15%]" :is="MarkdownComponent"/>
  </div>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()
const metadata = ref({})
const MarkdownComponent = ref(null)

async function loadMarkdown(slug) {
  try {
    const module = await import(`../datasources/${slug}.md`)
    MarkdownComponent.value = module.default
    console.log("MODULE LOADED =>", module)
    metadata.value = {
      subTitle: module.subTitle,
      title: module.title,
      image: module.image,
      meta: module.meta
    }
  } catch (err) {
    console.error("Erreur chargement Markdown :", err)
    metadata.value = {title: "Projet non trouvé"}
    MarkdownComponent.value = null
  }
}

onMounted(() => loadMarkdown(route.params.slug))
watch(() => route.params.slug, newSlug => loadMarkdown(newSlug))
</script>
