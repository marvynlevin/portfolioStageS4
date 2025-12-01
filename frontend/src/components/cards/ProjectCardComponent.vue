<template>
  <div
      class="relative bg-vanilla bg-opacity-80 mx-[2%] sm:mx-[5%] md:mx-[10%] lg:mx-[15%] mt-6 md:mt-16
    backdrop-blur-sm rounded-xl shadow-md border border-espresso overflow-hidden

transform transition-transform duration-800 ease-out hover:scale-[1.02] hover:-rotate-1"
  >
    <!-- Image de fond -->
    <div
        v-if="backgroundImage"
        class="absolute inset-0 bg-cover bg-center opacity-30 -z-10"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>

    <!-- Bannière -->
    <div class="w-full bg-espresso text-vanilla px-6 py-2 md:py-3 flex items-center justify-between">
      <div class="flex justify-center items-center w-full">
        <h2 class="text-18-19-24-30 font-bold italic">{{ title }}</h2>
      </div>

      <div class="flex items-center gap-3">
        <a
            v-for="(l, i) in links"
            :key="i"
            :href="l.url"
            target="_blank"
            rel="noopener"
            class="text-vanilla hover:text-blush transition"
        >
          <i :class="l.icon" class="text-18-19-24-30 cursor-pointer"></i>
        </a>
      </div>
    </div>

    <!-- Contenu -->
    <div class="px-6 py-6 md:py-12 space-y-4">
      <!-- Description -->
      <p class="text-espresso font-semibold text-14-15-16-20 leading-relaxed text-justify md:text-left" v-html="description"></p>

      <!-- Liste -->
      <ul class="list-disc pl-6 text-espresso font-semibold text-14-15-16-20 text-justify md:text-left">
        <li v-for="(f, i) in features" :key="i" v-html="f"></li>
      </ul>

      <!-- Technos -->
      <div class="flex flex-wrap gap-2 pt-1">
        <span
            v-for="(tech, index) in technos"
            :key="index"
            class="px-3 py-1 hover:bg-dusk hover:border-dusk transition-colors duration-300 text-vanilla bg-espresso rounded-full text-14-15-16-20 italic font-semibold border border-espresso"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Bouton -->
      <div class="pt-4 md:pt-8 flex justify-center cursor-pointer">
        <router-link :to="{name: 'project', params: { slug: detailsLink }}" class="btn-espresso hover:bg-noise">
          <i class="bi bi-info-circle text-17-18-21-25"></i>
          <p class="text-12-13-16-20">Plus de détails</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  links: {
    type: Array,
    default: () => []
  },
  description: String,
  features: {
    type: Array,
    default: () => []
  },
  technos: {
    type: Array,
    default: () => []
  },
  detailsLink: String,
  backgroundImage: String
})
</script>
