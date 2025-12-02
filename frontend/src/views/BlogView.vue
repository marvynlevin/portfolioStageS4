<template>
  <div class="relative project-page px-[2%] sm:px-[5%] md:px-[10%] lg:px-[15%] py-10">

    <!-- Bouton Retour -->
    <button
        @click="goBack"
        aria-label="Retour portfolio"
        class="fixed bottom-4 cursor-pointer left-4 py-3 px-4.5 rounded-full bg-blush text-white hover:bg-dusk transition-all duration-300 shadow-lg hover:-translate-y-2 transition-transform duration-200 z-[40]"
    >
      <i class="bi bi-arrow-bar-left text-[20px]"/>
    </button>

    <!-- Sous-titre + Action à droite -->
    <div class="flex items-center justify-between">
      <p class="text-14-15-16-20 font-light italic">
        {{ metadata.subTitle }}
      </p>

      <div class="flex items-center gap-2">

        <!-- Bouton Partager -->
        <button
            @click="sharePage"
            aria-label="Partager le blog"
            class="px-3 py-2 bg-espresso rounded-b-full flex items-center gap-2 text-vanilla cursor-pointer"
        >
          <i class="bi bi-reply text-17-18-21-25"/>
        </button>

      </div>
    </div>

    <!-- Titre -->
    <h1 class="text-65-95-105-115 font-black leading-none mb-2 md:mb-6 tracking-tighter">
      {{ metadata.title }}
    </h1>

    <!-- Image -->
    <ResponsiveImageComponent
        v-if="metadata.image"
        :src="metadata.image"
        :alt="metadata.title"
        :sizes="{ mobile: 200, tablet: 300, desktop: 450, large: 600, default: 600 }"
        :breakpoints="{ mobile: 640, tablet: 1024, desktop: 1280, large: 99999 }"
        img-class="w-full rounded-lg mb-6"
    />

    <!-- Contenu Markdown -->
    <component
        class="text-justify text-14-15-18-22 px-[8%] md:px-[0%] mb-10 md:mb-20"
        :is="MarkdownComponent"
    />
  </div>

  <!-- Bas de page -->
  <FooterComponent/>

</template>

<script setup>
import {ref, onMounted, watch} from 'vue'
import {useRoute} from 'vue-router'
import FooterComponent from "@/components/footer/FooterComponent.vue";
import {useHead} from "@vueuse/head";
import ResponsiveImageComponent from "@/components/img/ResponsiveImageComponent.vue";

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
      shareInfo: module.shareInfo,
      title: module.title,
      image: module.image,
      meta: module.meta
    }

    // balises head dynamique
    useHead({
      title: `${metadata.value.title} - Marvyn Levin`,
      meta: [
        {
          name: 'description',
          content: metadata.value.meta?.description || metadata.value.subTitle || 'Découvrez ce blog écrit par Marvyn Levin.'
        },
        {
          name: 'keywords',
          content: metadata.value.meta?.keywords || 'portfolio, blog, article, web, application, informatique'
        },
        {
          property: 'og:title',
          content: metadata.value.title
        },
        {
          property: 'og:description',
          content: metadata.value.meta?.description || metadata.value.subTitle
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: window.location.href
        },
        {
          property: 'og:image',
          content: metadata.value.image || 'https://www.marvynlevin.fr/icon.png'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: metadata.value.title
        },
        {
          name: 'twitter:description',
          content: metadata.value.meta?.description || metadata.value.subTitle
        },
        {
          name: 'twitter:image',
          content: metadata.value.image || 'https://www.marvynlevin.fr/icon.png'
        }
      ]
    })
  } catch (err) {
    console.error("Erreur chargement Markdown :", err)
    metadata.value = {title: "Blog non trouvé"}
    MarkdownComponent.value = null
  }
}

onMounted(() => loadMarkdown(route.params.slug))

watch(() => route.params.slug, newSlug => loadMarkdown(newSlug))

const sharePage = () => {
  const title = metadata.value?.shareInfo || "Partager la page"
  const url = window.location.href

  if (navigator.share) {
    navigator
        .share({title, url})
        .catch(err => console.warn("Partage annulé :", err))
  } else {
    navigator.clipboard.writeText(url)
    alert("Lien copié dans le presse-papier !")
  }
}

const goBack = () => {
  window.history.back()
}
</script>

<style scoped>
pre {
  margin: 20px;
}
</style>