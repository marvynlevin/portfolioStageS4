<template>
  <div class="project-page px-8 py-10">
    <h1 class="text-4xl font-bold mb-6">{{ metadata.title }}</h1>
    <img v-if="metadata.image" :src="metadata.image" :alt="metadata.title" class="w-full rounded-lg mb-6" />
    <component :is="MarkdownComponent" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const metadata = ref({})
const MarkdownComponent = ref(null)

async function loadMarkdown(slug) {
  try {
    const module = await import(`../datasources/${slug}.md`)
    MarkdownComponent.value = module.default
    if (module.metadata) metadata.value = module.metadata
  } catch (err) {
    console.error("Erreur chargement Markdown :", err)
    metadata.value = { title: "Projet non trouvé" }
    MarkdownComponent.value = null
  }
}

onMounted(() => loadMarkdown(route.params.slug))
watch(() => route.params.slug, newSlug => loadMarkdown(newSlug))
</script>
