<template>
  <!-- Haut de page -->
  <section class="h-screen w-full relative">

    <img class="hidden md:block absolute top-0 right-0 w-[300px] h-auto pointer-events-none select-none z-10 rounded-3xl" src="/bg1.png" alt="Photo de couleur pour le fond">
    <img class="hidden md:block absolute bottom-0 left-0 w-[300px] h-auto pointer-events-none select-none z-10 rounded-3xl" src="/bg2.png" alt="Photo de couleur pour le fond">


    <!-- Titre -->
    <h1
        class="relative text-[35px] sm:text-[45px] md:text-[60px] lg:text-[80px] text-espresso font-playfair
          font-black text-center italic py-10 z-10"
    >
      Bienvenue
    </h1>

    <!-- Texte -->
    <p class="pt-10 pb-10 px-10 sm:px-[15%] font-normal text-espresso font-playfair text-justify text-14-15-18-22">
      <span class="text-18-19-24-30 font-black italic">Je vous invite</span>
      à découvrir mes réalisations ainsi que les compétences que j’ai développées tout au long
      de mon parcours universitaire, au travers de <strong>projets concrets</strong> et d’<strong>expériences
      professionnelles</strong> qui reflètent mon engagement et ma progression.
    </p>
    <div class="w-[100%]">
      <img class="ml-auto mr-[12%] sm:mr-[18%] -mt-5 w-[80px] sm:w-[130px] h-auto"
               src="@/assets/img/signature.png"
               alt="Ma signature en guise de détails complémentaires">
    </div>

    <div class="hidden md:flex mx-auto w-auto gap-4 justify-center">
      <img class="h-[80px] sm:h-[90px] md:h-[100px] lg:h-[145px] w-auto mt-auto mb-auto lg:mb-0 pl-4 floatY"
           src="@/assets/img/arrowTwo.png"
           alt="Flèche qui pointe du texte au carousel"/>

      <div class="flex flex-col mt-16 justify-between">
        <div class="flex flex-row gap-4 justify-end pr-10 mt-2 sm:mt-0">
          <RouterLink to="/stage" class="cursor-pointer">
            <button class="btn-espresso floatY">
              <i class="bi bi-link-45deg text-17-18-21-25"></i>
              <p class="text-12-13-16-20">Portfolio Stage Akolad</p>
            </button>
          </RouterLink>
          <RouterLink to="/portfolio" class="cursor-pointer">
            <button class="btn-espresso floatY">
              <i class="bi bi-link-45deg text-17-18-21-25"></i>
              <p class="text-12-13-16-20">Portfolio Book</p>
            </button>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="flex md:hidden flex-col mt-16 items-center">
        <div class="flex flex-col gap-4 justify-center mt-2">
          <RouterLink to="/stage" class="cursor-pointer">
            <button class="btn-espresso floatY">
              <i class="bi bi-link-45deg text-17-18-21-25"></i>
              <p class="text-12-13-16-20">Portfolio Stage Akolad</p>
            </button>
          </RouterLink>
          <RouterLink to="/portfolio" class="cursor-pointer">
            <button class="btn-espresso floatY">
              <i class="bi bi-link-45deg text-17-18-21-25"></i>
              <p class="text-12-13-16-20">Portfolio Book</p>
            </button>
          </RouterLink>
        </div>
    </div>
  </section>

</template>

<script>
import FeatureCardComponent from "@/components/cards/FeatureCardComponent.vue";
import FigureSliderComponent from "@/components/animations/FigureSliderComponent.vue";
import ScrollFadeInComponent from "@/components/animations/ScrollFadeInComponent.vue";
import VueApexCharts from "vue3-apexcharts";
import CompetenceChartComponent from "@/components/charts/CompetenceChartComponent.vue";
import {useHead} from '@vueuse/head'
import NavbarStageComponent from "@/components/navbar/NavbarComponent.vue";

export default {
  name: 'HomeView',
  setup() {
    useHead({
      title: 'Marvyn Levin - Portfolio de Stage',
      meta: [
        {
          name: 'description',
          content: 'Portfolio de stage de Marvyn Levin, étudiant en BUT Informatique, présentant ses compétences et projets réalisés chez Akolad Solutions.'
        },
        {
          name: 'keywords',
          content: 'portfolio, stage, informatique, développement, Akolad Solutions, Symfony, Doctrine, Twig'
        },
        {
          property: 'og:title',
          content: 'Marvyn Levin - Portfolio de Stage'
        },
        {
          property: 'og:description',
          content: 'Découvrez mon portfolio de stage en développement web chez Akolad Solutions.'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: 'https://www.marvynlevin.fr'
        },
        {
          property: 'og:image',
          content: 'https://www.marvynlevin.fr/icon.png'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Marvyn Levin - Portfolio de Stage'
        },
        {
          name: 'twitter:description',
          content: 'Portfolio de stage en développement web.'
        },
        {
          name: 'twitter:image',
          content: 'https://www.marvynlevin.fr/icon.png'
        }
      ]
    })
  },
  components: {
    NavbarStageComponent,
    FigureSliderComponent,
    CompetenceChartComponent,
    ScrollFadeInComponent,
    FeatureCardComponent,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      hover: false,
      autoMove: false,
      intervalId: null,
      xOffset: 0,
      yOffset: 0,
      maxOffset: 15,
      texte: `NUMÉRIQUE ACCESSIBILITÉ HUMAIN SUR-MESURE CO-CONSTRUCTION AGILITÉ QUALITÉ MAINTENANCE RGAA
ÉCO-CONCEPTION EXPÉRIENCE UTILISATEUR LOGICIELS MÉTIERS APPLICATIONS MOBILES SITES WEB RÉFÉRENCEMENT
NATUREL RESPONSIVE DESIGN INNOVATION TRANSPARENCE PARTENARIAT DURABLE`,
    }
  },
  computed: {
    mots() {
      return this.texte.split(' ')
    }
  },
  methods: {
    scrollToNextSection() {
      const nextSection = document.getElementById('presentation')
      if (nextSection) {
        nextSection.scrollIntoView({behavior: 'smooth'})
      }
    },
    onMouseMove(e) {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const xNorm = (e.clientX / windowWidth) * 2 - 2
      const yNorm = (e.clientY / windowHeight) * 2 - 2

      this.xOffset = this.maxOffset * xNorm
      this.yOffset = this.maxOffset * yNorm
    },
    resetOffset() {
      this.xOffset = 0
      this.yOffset = 0
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('mouseleave', this.resetOffset)

    this.intervalId = setInterval(() => {
      if (!this.hover) {
        this.autoMove = true
        setTimeout(() => {
          this.autoMove = false
        }, 1000)
      }
    }, 3000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('mouseleave', this.resetOffset)
  }
}
</script>

<style>
@keyframes floatY {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.floatY {
  animation: floatY 3s ease-in-out infinite;
}

@layer utilities {
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    animation: marquee 100s linear infinite;
  }
}

</style>

