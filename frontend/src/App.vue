<template>
  <div class="bg-vanilla h-full">
    <div v-if="!appReady" class="fixed inset-0 bg-vanilla z-[99999]"></div>

    <NavbarComponent v-if="appReady"/>
    <CustomCursorComponent v-if="appReady"/>
    <ScrollToTopComponent v-if="appReady"/>

    <router-view v-if="appReady"/>

    <FooterComponent v-if="appReady"/>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
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
  setup() {
    const appReady = ref(false)

    onMounted(() => {
      document.documentElement.classList.add('is-loading')
      setTimeout(() => {
        appReady.value = true
        document.documentElement.classList.remove('is-loading')
      }, 100)
    })

    return {appReady}
  }
}
</script>

<style>
/* GLOBAL CSS */

body {
  color: #3C2821; /* text-espresso */
  font-family: "Playfair Display", serif;
  font-size: 22px;
}

::-webkit-scrollbar {
  width: 12px;
  background-color: #FFF3E2;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  background-color: #FFF3E2;
}

::-webkit-scrollbar-thumb {
  border-radius: 7px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #BEAAAA;
}

@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: #3C2821 #F3E8D8;
  }
}

@media (max-width: 1023px) {
  ::-webkit-scrollbar {
    display: none;
  }

  @-moz-document url-prefix() {
    * {
      scrollbar-width: none;
    }
  }
}

html.is-loading, html.is-loading * {
  cursor: none !important;
}

/* BUTTONS */

.btn-espresso {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #3C2821;
  color: #FFF3E2;
  padding: 0.25rem 2rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 0.375rem;
  font-style: italic;
  font-weight: 700;
}

@media (min-width: 640px) {
  .btn-espresso {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
}

.btn-espresso:hover {
  outline: 2px solid #3C2821;
  background-color: #FFF3E2;
  color: #3C2821;
}

.btn-espresso:hover i {
  color: #3C2821;
}

.btn-espresso-disabled {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  outline: 2px solid #3C2821;
  background-color: #FFF3E2;
  color: #3C2821;
  padding: 0.25rem 2rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 0.375rem;
  font-style: italic;
  font-weight: 700;
}

@media (min-width: 640px) {
  .btn-espresso-disabled {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
}

/* RESPONSIVE TEXT SIZES */


.text-12-13-16-20 {
  font-size: 12px;
}

.text-14-15-16-20 {
  font-size: 14px;
}

.text-14-15-18-22 {
  font-size: 14px;
}

.text-17-18-21-25 {
  font-size: 17px;
}

.text-18-19-24-30 {
  font-size: 18px;
}

.text-35-50-60-80 {
  font-size: 35px;
}

.text-75-80-90-100 {
  font-size: 75px;
}

.text-45-80-90-100 {
  font-size: 45px;
}

@media (min-width: 640px) {
  .text-12-13-16-20 {
    font-size: 13px;
  }

  .text-14-15-16-20 {
    font-size: 15px;
  }

  .text-14-15-18-22 {
    font-size: 15px;
  }

  .text-17-18-21-25 {
    font-size: 18px;
  }

  .text-18-19-24-30 {
    font-size: 19px;
  }

  .text-35-50-60-80 {
    font-size: 50px;
  }

  .text-75-80-90-100 {
    font-size: 80px;
  }

  .text-45-80-90-100 {
    font-size: 80px;
  }
}

@media (min-width: 768px) {
  .text-12-13-16-20 {
    font-size: 16px;
  }

  .text-14-15-16-20 {
    font-size: 16px;
  }

  .text-14-15-18-22 {
    font-size: 18px;
  }

  .text-17-18-21-25 {
    font-size: 21px;
  }

  .text-18-19-24-30 {
    font-size: 24px;
  }

  .text-35-50-60-80 {
    font-size: 60px;
  }

  .text-75-80-90-100 {
    font-size: 90px;
  }

  .text-45-80-90-100 {
    font-size: 90px;
  }
}

@media (min-width: 1024px) {
  .text-12-13-16-20 {
    font-size: 20px;
  }

  .text-14-15-16-20 {
    font-size: 20px;
  }

  .text-14-15-18-22 {
    font-size: 22px;
  }

  .text-17-18-21-25 {
    font-size: 25px;
  }

  .text-18-19-24-30 {
    font-size: 30px;
  }

  .text-35-50-60-80 {
    font-size: 80px;
  }

  .text-75-80-90-100 {
    font-size: 100px;
  }

  .text-45-80-90-100 {
    font-size: 100px;
  }
}
</style>
