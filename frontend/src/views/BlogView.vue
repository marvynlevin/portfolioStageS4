<template>
  <div class="project-page px-[8%] sm:px-[15%] py-10">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{{ metadata.title }}</h1>

    <!-- Image principale si définie dans frontmatter -->
    <img v-if="metadata.image" :src="metadata.image" :alt="metadata.title" class="w-full rounded-lg mb-6" />

    <!-- Contenu Markdown transformé en HTML -->
    <div v-html="contentHtml" class="prose max-w-none"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';

const route = useRoute();
const contentHtml = ref('');
const metadata = ref({});

const md = new MarkdownIt({
  html: true
});

// Fonction pour transformer shortcodes comme {{button url="..." text="..."}}
function replaceShortcodes(html) {
  return html
    .replace(/\{\{button url="(.*?)" text="(.*?)"\}\}/g,
      `<a href="$1" target="_blank" class="btn-espresso inline-block px-4 py-2 mt-4 mb-4 rounded-lg bg-espresso text-white hover:bg-noise">$2</a>`);
}

// Fonction de chargement Markdown
async function loadMarkdown(slug) {
  try {
    const file = await import(`../data/projects/${slug}.md?raw`);
    const raw = file.default;

    // Parse frontmatter YAML
    const match = /^---\n([\s\S]+?)\n---/.exec(raw);
    let mdContent = raw;
    if (match) {
      const yaml = match[1];
      metadata.value = Object.fromEntries(
        yaml.split('\n').map(line => line.split(':').map(s => s.trim()))
      );
      mdContent = raw.slice(match[0].length);
    }

    let html = md.render(mdContent);
    html = replaceShortcodes(html);

    contentHtml.value = html;
  } catch (err) {
    console.error("Erreur chargement Markdown :", err);
    metadata.value = { title: "Projet non trouvé" };
    contentHtml.value = "<p>Le projet demandé est introuvable.</p>";
  }
}

// Charger le Markdown au montage
onMounted(() => loadMarkdown(route.params.slug));

// Recharger si le slug change dynamiquement
watch(() => route.params.slug, (newSlug) => {
  loadMarkdown(newSlug);
});
</script>

<style>
.project-page img {
  max-width: 100%;
  object-fit: cover;
}
</style>
