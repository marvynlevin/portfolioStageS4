<template>
  <div
      class="relative bg-vanilla bg-opacity-80 border border-espresso bg-noise rounded-xl overflow-hidden
           shadow-md backdrop-blur-sm transform transition-transform duration-700
           hover:scale-[1.02] hover:-rotate-1"
  >

    <!-- Bannière -->
    <div class="w-full bg-espresso text-vanilla px-6 py-2 md:py-3 flex items-center justify-center">
      <h2 class="text-17-18-21-25 font-bold italic text-center">
        {{ title }}
      </h2>
    </div>

    <!-- Image -->
    <div class="relative w-full h-32 md:h-40 lg:h-50 overflow-hidden">
      <div class="w-full h-52 md:h-60 lg:h-64 bg-cover bg-center"
           :style="{ backgroundImage: `url(${image})` }">
      </div>
      <div
          class="pointer-events-none absolute inset-0
           bg-gradient-to-b from-transparent to-espresso/20
           backdrop-blur-0 to:backdrop-blur-[2px]"
      ></div>
    </div>

    <!-- Description -->
    <div class="px-4 py-4 bg-vanilla bg-noise text-espresso space-y-2">
      <p class="text-12-13-16-20 text-justify">
        {{ description }}
      </p>

      <!-- Bouton lire + -->
      <div class="pt-2 flex justify-center">
        <router-link :to="{name: 'blog', params: { slug: detailsLink }}" class="btn-espresso hover:bg-noise">
          <i class="bi bi-journal-text text-17-18-21-25"></i>
          <p class="text-12-13-16-20">Lire l’article</p>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  description: String,
  detailsLink: String
})
</script>
