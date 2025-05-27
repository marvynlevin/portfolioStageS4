<template>
  <div
      class="mx-auto lg:mx-0 bg-vanilla border border-espresso rounded-lg shadow w-[80vw] lg:w-[25vw] flex flex-col items-center text-center transform transition-transform duration-800 ease-out hover:scale-[1.02] hover:-rotate-1">
    <div class="bg-espresso text-vanilla w-full py-2 font-black text-17-18-21-25 rounded-t px-8 lg:px-16">
      {{ title }}
    </div>

    <div class="my-6 h-[110px] flex items-center justify-center p-6">
      <img :src="`/${icon}`" alt="Icône de la fonctionnalité" class="w-[100px] h-auto mx-auto my-auto"/>
    </div>

    <ul class="text-left text-espresso mb-6 p-6 list-disc list-inside space-y-2 text-12-13-16-20">
      <li v-for="(point, index) in bulletPoints" :key="index">{{ point }}</li>
    </ul>

    <p v-if="!active"
       class="text-center text-espresso mb-6 p-0 md:p-6 list-disc list-inside space-y-2 text-12-13-16-20">
      (Ce projet n'a pas été réalisé)
    </p>

    <button
        :disabled="!active"
        @click="openOverlay()"
        class="mt-auto btn-espresso m-6 flex items-center gap-2 transition"
        :class="{
        'btn-espresso cursor-pointer': active,
        'cursor-not-allowed btn-espresso-disabled': !active
      }"
    >
      <i class="bi bi-info-circle text-17-18-21-25"></i>
      <p class="text-12-13-16-20">Plus de détails</p>
    </button>

    <!-- Overlay avec animation slide -->
    <teleport to="body">
      <div
          v-if="isMounted"
          class="fixed top-0 left-0 h-full w-[100vw] sm:w-[80vw] bg-vanilla z-[99999] shadow-lg"
          :class="animationClass"
          @animationend="handleAnimationEnd"
      >
        <div class="p-6">
          <h2 class="text-18-19-24-30 font-bold mb-4 text-espresso">{{ title }} - Détails</h2>
          <p class="text-espresso text-justify pr-6 text-14-15-16-20 whitespace-pre-line max-h-[80vh] overflow-y-auto ml-6"
             v-html="longText">
          </p>
        </div>

        <button
            @click="closeOverlay()"
            class="absolute bottom-0 right-0 bg-espresso text-vanilla hover:text-espresso px-2 py-1 md:px-5 md:py-3 cursor-pointer hover:bg-vanilla hover:outline-2 :hover:outline-espresso transition"
        >
          <i class="bi bi-arrow-left-circle-fill rotate-180 text-md md:text-xl"></i>
        </button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue'

const props = defineProps({
  icon: String,
  title: String,
  bulletPoints: Array,
  active: {
    type: Boolean,
    default: true,
  },
  longText: String,
})

const showOverlay = ref(false)
const isMounted = ref(false)
const animationClass = ref('')

function openOverlay() {
  isMounted.value = true
  animationClass.value = 'slide-in'
  showOverlay.value = true
}

function closeOverlay() {
  animationClass.value = 'slide-out'
  showOverlay.value = false
}

// Quand l'animation de sortie est terminée, on démonte la div (pour cacher proprement)
function handleAnimationEnd(event) {
  if (animationClass.value === 'slide-out') {
    isMounted.value = false
  }
}
</script>

<style scoped>
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.slide-in {
  animation: slideIn 0.5s forwards;
}

.slide-out {
  animation: slideOut 0.5s forwards;
}
</style>
