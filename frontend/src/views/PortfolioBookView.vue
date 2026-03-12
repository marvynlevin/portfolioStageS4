<template>
  <!-- Barre de navigation -->
  <NavbarPortfolioComponent/>

  <!-- Bouton Home Page -->
  <button
      @click="goBack"
      aria-label="Retour page d'accueil"
      class="fixed bottom-4 cursor-pointer left-4 py-3 px-4.5 rounded-full bg-blush text-white hover:bg-dusk transition-all duration-300 shadow-lg hover:-translate-y-2 transition-transform duration-200 z-[40]"
  >
    <i class="bi bi-house text-[20px]"/>
  </button>

  <!--Haut de page-->
  <section
      class="relative overflow_hidden sm:p-16 mb-[30vh] pt-[15vh] sm:pt-[17vh] md:pt-[15vh] lg:pt-[9vh] xl:pt-[7vh] 2xl:pt-[14vh] md:h-screen">

    <img class="absolute -top-20 right-0 w-[180px] md:w-[300px] h-auto pointer-events-none select-none rounded-3xl"
         src="/bg1.png"
         alt="Photo de couleur pour le fond">
    <img
        class="absolute -bottom-10 md:bottom-0 left-0 w-[180px] md:w-[300px] h-auto pointer-events-none select-none rounded-3xl"
        src="/bg2.png" alt="Photo de couleur pour le fond">


    <div class="relative group">
      <p
          class="relative text-35-50-60-80 text-espresso font-playfair
          font-bold text-center -mb-4 sm:mr-[10%] z-10"
      >
        MARVYN LEVIN
      </p>
      <div
          class="absolute sm:bottom-[10px] md:bottom-[10px] lg:bottom-[18px] left-[30%] sm:w-[60%] md:w-[60%]
          lg:w-[45%] lg:h-10 md:h-8 h-4 bg-blush opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>
    </div>
    <p
        class="text-35-50-60-80 text-espresso font-playfair
        text-center sm:-mb-6 -mb-4 sm:ml-[5%]"
    >
      <span class="italic font-normal">mon</span> <span class="font-semibold">PORTFOLIO</span>
    </p>
    <p
        class="text-17-18-21-25 text-espresso font-playfair text-center mx-[15%] mt-12"
    >
      <span class="font-black">« Concevoir, expérimenter, apprendre. »</span><br>
      Bienvenue dans mon Portfolio Book, une sélection de mes réalisations les plus représentatives, pensées avec
      exigence et passion.
    </p>
    <div
        class="relative bottom-0 flex items-center justify-center sm:p-10 group"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
    >
      <img
          @click="scrollToNextSection"
          alt=""
          src="@/assets/img/descendre.png"
          :class="[
        'transition-transform duration-300 ease-in-out cursor-pointer w-[70px] pt-[10vh] sm:pt-0 sm:w-[100px] h-auto hover:scale-110',
        (hover || autoMove) ? 'translate-y-6' : ''
      ]"
      >
    </div>
  </section>

  <!--Première section de présentation-->
  <section id="presentation" class="pb-40">

    <!--Titre-->
    <div class="relative group">
      <h1
          class="relative text-[35px] sm:text-[45px] md:text-[60px] lg:text-[80px] text-espresso font-playfair
          font-black text-center italic -mb-4 z-10"
      >
        Présentation
      </h1>
      <div
          class="absolute sm:bottom-[15px] md:bottom-[20px] lg:bottom-[26px] sm:left-[27%] md:left-[28%] lg:left-[32%] sm:w-[50%] md:w-[50%]
          lg:w-[41%] lg:h-6 md:h-5 h-4 bg-blush opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>

    </div>

    <!--Global presentation-->
    <div class="sm:pt-16">
      <div class="flex row-auto">
        <div>
          <p class="pt-10 pb-10 px-[8%] sm:px-[15%] font-normal text-espresso font-playfair text-justify md:text-center text-14-15-18-22">
            <span class="text-18-19-24-30 font-black italic">Je m’appelle</span>
            Marvyn Levin, étudiant en 3ème année de <strong>BUT Informatique</strong>, passionné par la création de
            solutions numériques
            à la fois utiles et élégantes. <br><br>
            À travers ce Portfolio Book, je souhaite mettre en lumière <strong>ce que je sais faire</strong>,
            <strong>comment je le fais</strong>, et
            surtout <strong>ce que chaque projet m’a réellement appris</strong> – sur le plan technique comme humain.
            <br><br>
            Mon objectif n’est pas seulement de montrer des projets, mais de <strong>présenter une démarche</strong>,
            une façon de penser
            : <strong>analyser</strong>, <strong>concevoir</strong>, <strong>développer</strong>,
            <strong>améliorer</strong>.
          </p>
        </div>
      </div>
      <div class="flex justify-center mr-auto w-auto gap-4">
        <img class="h-[80px] sm:h-[90px] md:h-[100px] lg:h-[130px] w-auto mt-auto mb-auto lg:mb-0 pl-4 floatY"
             src="@/assets/img/arrowTwo.png"
             alt="Flèche qui pointe du texte au carousel"/>

        <div class="flex flex-col justify-between max-w-[70%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] ">
          <p class="pt-6 sm:pt-10 pl-[2%] sm:pl-[8%] pr-[10%] sm:pr-0 font-normal italic font-playfair text-justify text-12-13-16-20 floatY">
      <span class="font-black text-espresso font-playfair text-justify text-14-15-18-22">
        Parce qu’un projet ne vaut pas uniquement par son code</span>, mais par l’intention qu’il porte.
          </p>

          <div class="flex justify-end pr-10 mt-2 sm:mt-0">
            <img class="ml-auto w-[60px] sm:w-[90px] md:w-[100px] lg:w-[130px] h-auto floatY"
                 src="@/assets/img/signature.png"
                 alt="Ma signature en guise de détails complémentaires">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--Projets presentation-->
  <section id="projets" class="pb-40">

    <!--Titre-->
    <div class="relative group">
      <h1
          class="relative text-[35px] sm:text-[45px] md:text-[60px] lg:text-[80px] text-espresso font-playfair
          font-black text-center italic -mb-4 z-10"
      >
        Projets
      </h1>
      <div
          class="absolute sm:bottom-[15px] md:bottom-[20px] lg:bottom-[26px] sm:left-[27%] md:left-[28%] lg:left-[32%] sm:w-[50%] md:w-[50%]
          lg:w-[41%] lg:h-6 md:h-5 h-4 bg-blush opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>

    </div>

    <div
        class="relative group pt-12 sm:pt-24 px-[8%] sm:px-[15%] font-normal text-espresso font-playfair text-justify text-14-15-18-22">
      <div class="relative z-10">
        <p>01 - 04</p>
        <h2 class="font-black italic text-espresso font-playfair text-left text-18-19-24-30">Explorer les projets</h2>
        <p>Avant d’entrer dans le détail, une idée revient dans chacun d’eux : <strong>créer quelque chose qui
          fonctionne… et qui a du sens</strong>. Derrière chaque ligne de code, il y a une intention : <strong>répondre
          à un besoin réel, faire efficace et surtout pertinent</strong>.
        </p>
      </div>
      <div
          class="absolute bottom-[15px] sm:bottom-[40px] md:bottom-[50px] lg:bottom-[70px] left-[27%] sm:left-[10%] lg:left-[12%] w-[75%] sm:w-[70%] md:w-[68%]
          lg:w-[65%] sm:h-[60%] lg:h-[55%] h-0 bg-linen opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>
    </div>

    <ProjectCardComponent
        title="24h Du Mans"
        :links="[
    { icon: 'bi-globe2', url: 'https://24h.chamallow.fr/fr' },
    { icon: 'bi-github', url: 'https://github.com/lynn2910/24hmans' },
  ]"
        description="Application <strong>web full-stack</strong> simulant la gestion d'un grand événement inspiré des 24h du Mans. L’objectif était d’offrir une interface claire pour organiser prestataires, zones, services et flux visiteurs comme dans un vrai contexte logistique."
        :features="[
    'Gestion des prestataires et organisateurs ;',
    'Carte interactive avec zones assignées, consultables et modifiables ;',
    'Statistiques d’affluence interactifs ;',
    'Attribution des services par prestataire ;',
    'Interfaces pensées pour être visuelles et opérationnelles.',
  ]"
        :technos="['Vue.js', 'Tailwind', 'Leaflet', 'API Rest', 'Node.Js', 'Prisma', 'JavaScript']"
        detailsLink="24h-du-mans"
        backgroundImage="/bg-24hmans.png"
    />

    <ProjectCardComponent
        title="FireWatch"
        :links="[
    // { icon: 'bi-globe2', url: '' },
    { icon: 'bi-github', url: 'https://github.com/marvynlevin/FireWatch' },
  ]"
        description="Application <strong>full-stack</strong> et <strong>mobile</strong> visant à prévenir et détecter les feux de forêt. L’objectif était de fournir un outil fiable permettant d’anticiper les risques, confirmer rapidement les départs de feu et offrir une vision claire aux acteurs de terrain."
        :features="[
    'Détection via capteurs environnementaux (température, humidité, CO₂, luminosité) ;',
    'Application mobile Flutter pour les signalements citoyens géolocalisés ;',
    'Tableau de bord web : carte interactive, alertes en temps réel et visualisation des risques ;',
    'Calcul auto d’un Indice De Risque (IDR) basé sur les données des microcontrôleurs ;',
    'Historique des événements, suivi des alertes et consultation des séries temporelles.',
  ]"
        :technos="['Vue.js', 'Tailwind', 'Flutter', 'Material3', 'Node.Js', 'Docker', 'Arduino']"
        detailsLink="firewatch"
        backgroundImage="/bg-firewatch.png"
    />

    <ProjectCardComponent
        title="Ets Levin Energie"
        :links="[
    { icon: 'bi-globe2', url: 'https://levinenergie.fr' },
    { icon: 'bi-github', url: 'https://github.com/marvynlevin/levinenergie' },
  ]"
        description="Site vitrine <strong>front-end</strong> réalisé pour une entreprise spécialisée en énergies renouvelables. L’objectif était de concevoir une interface professionnelle, claire et rassurante pour présenter les solutions proposées : installation, entretien et dépannage."
        :features="[
    'Page d’accueil présentant la mission et les services clés ;',
    'Sections dédiées aux installations avec explications des fonctionnements ;',
    'Formulaire de contact et contacts ;',
    'Témoignage client intégré pour renforcer la confiance ;',
    'Mentions légales, politique de confidentialité et informations pratiques ;',
    'Design moderne, épuré, responsive, pensé pour être accessible.',
  ]"
        :technos="['HTML5', 'CSS3', 'PHP', 'JavaScript']"
        detailsLink="levinenergie"
        backgroundImage="/bg-levinenergie.png"
    />

    <div class="overflow-hidden whitespace-nowrap w-full pt-12 lg:pt-24 text-75-80-90-100 italic font-bold">
      <div class="inline-block animate-marquee">
        <span v-for="(i) in 2" :key="i">
          <span
              v-for="(mot, index) in mots"
              :key="`${i}-${index}`"
              class="px-2"
          >
            <span>- </span>
            <span class="hover:text-dusk transition-colors duration-300">
              {{ mot }}
            </span>
          </span>
        </span>
      </div>
    </div>

    <div class="flex ml-[2%] sm:ml-[10%] md:ml-[20%] mr-auto w-auto gap-4">
      <img class="h-[80px] sm:h-[90px] md:h-[100px] lg:h-[145px] w-auto mt-auto mb-auto lg:mb-0 pl-4 floatY"
           src="@/assets/img/arrowTwo.png"
           alt="Flèche qui pointe du texte au carousel"/>

      <div class="flex flex-col justify-between">
        <p class="pt-6 sm:pt-10 pl-[2%] sm:pl-[8%] pr-[10%] sm:pr-0 font-normal italic font-playfair text-justify text-12-13-16-20 floatY">
      <span class="font-black text-espresso font-playfair text-justify text-14-15-18-22">
        Découvrir davantage de projets ?</span> <br/>
          Vous pouvez suivre ce lien pour découvrir tous mes projets.
        </p>

        <div class="flex justify-end pr-10 mt-2 sm:mt-0">
          <button class="btn-espresso floatY"
                  onclick="window.open('https://github.com/marvynlevin?tab=repositories', '_blank')"
                  aria-label="Lien vers mon GitHub">
            <i class="bi bi-link-45deg text-17-18-21-25"></i>
            <span class="text-12-13-16-20">Lien vers mon Github</span>
          </button>
        </div>
      </div>
    </div>

  </section>

  <!--Savoir-faire presentation-->
  <section id="competences" class="pb-40">

    <!--Titre-->
    <div class="relative group">
      <h1
          class="relative text-[35px] sm:text-[45px] md:text-[60px] lg:text-[80px] text-espresso font-playfair
          font-black text-center italic -mb-4 z-10"
      >
        Savoir-faire
      </h1>
      <div
          class="absolute sm:bottom-[15px] md:bottom-[20px] lg:bottom-[26px] sm:left-[27%] md:left-[28%] lg:left-[32%] sm:w-[50%] md:w-[50%]
          lg:w-[41%] lg:h-6 md:h-5 h-4 bg-blush opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>

    </div>

    <div
        class="relative group pt-12 sm:pt-24 px-[8%] sm:px-[15%] font-normal text-espresso font-playfair text-justify text-14-15-18-22">
      <div class="relative z-10">
        <p>02 - 04</p>
        <h2 class="font-black italic text-espresso font-playfair text-left text-18-19-24-30">Explorer mes
          savoir-faire</h2>
        <p>« Concevoir, structurer et donner vie à des expériences numériques utiles ». Je crée des interfaces
          intuitives et esthétiques qui apportent une réelle valeur aux utilisateurs. Découvrez ci-dessous mes
          compétences principales.
        </p>
      </div>
      <div
          class="absolute bottom-[15px] sm:bottom-[40px] md:bottom-[50px] lg:bottom-[70px] left-[27%] sm:left-[10%] lg:left-[12%] w-[75%] sm:w-[70%] md:w-[68%]
          lg:w-[65%] sm:h-[60%] lg:h-[55%] h-0 bg-linen opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>
    </div>

    <!-- COMPETENCES WEB -->
    <div class="flex flex-row px-[4%] sm:px-[15%] mt-20 mr-10">
      <img class="h-[80px] sm:h-[90px] md:h-[100px] lg:h-[145px] w-auto object-contain pb-auto mb-auto lg:mb-0 mr-10"
           src="/logo-pc.png"
           alt="Logo représentant un ordinateur"/>
      <div>
        <p class="text-espresso font-playfair text-left text-14-15-18-22"><span class="font-black text-18-19-24-30">Développement
          Web Fullstack</span><br>
          Conception et réalisation d’applications web complètes, du design de l’interface à la gestion du serveur et
          des bases de
          données.</p>
        <div class="flex flex-wrap gap-2 pt-5">
        <span
            class="px-3 py-1 hover:bg-dusk hover:border-dusk transition-colors duration-300 text-vanilla bg-espresso rounded-full text-14-15-16-20 italic font-semibold border border-espresso"
        >
          VUE JS
        </span>
          <span
              class="px-3 py-1 hover:bg-dusk hover:border-dusk transition-colors duration-300 text-vanilla bg-espresso rounded-full text-14-15-16-20 italic font-semibold border border-espresso"
          >
          SYMFONY
        </span>
          <span
              class="px-3 py-1 hover:bg-dusk hover:border-dusk transition-colors duration-300 text-vanilla bg-espresso rounded-full text-14-15-16-20 italic font-semibold border border-espresso"
          >
          FLASK
        </span>
        </div>
      </div>
    </div>

    <!-- CARROUSELS GAUCHE DROITE DE TOUTES MES COMPETENCES -->
    <div class="overflow-hidden whitespace-nowrap w-full pt-6 lg:pt-12 text-35-50-60-80 italic font-bold">
      <div class="inline-block animate-marquee">
        <span v-for="(i) in 2" :key="i">
          <span
              v-for="(mot, index) in compWebGD"
              :key="`${i}-${index}`"
              class="px-2"
          >
            <span>- </span>
            <span class="hover:text-dusk transition-colors duration-300">
              {{ mot }}
            </span>
          </span>
        </span>
      </div>
    </div>

    <!-- CARROUSELS DROITE GAUCHE DE TOUTES MES COMPETENCES -->
    <div class="overflow-hidden whitespace-nowrap w-full text-35-50-60-80 italic font-bold">
      <div class="inline-block animate-marquee2">
        <span v-for="(i) in 2" :key="i">
          <span
              v-for="(mot, index) in compWebDG"
              :key="`${i}-${index}`"
              class="px-2"
          >
            <span>- </span>
            <span class="hover:text-dusk transition-colors duration-300">
              {{ mot }}
            </span>
          </span>
        </span>
      </div>
    </div>

    <!-- DETAILS -->
    <div class="flex ml-[2%] sm:ml-[10%] md:ml-[20%] mr-auto w-auto gap-4">
      <img class="h-[80px] sm:h-[90px] md:h-[100px] lg:h-[145px] w-auto mt-auto mb-auto lg:mb-0 pl-4 floatY"
           src="@/assets/img/arrowTwo.png"
           alt="Flèche qui pointe du texte au carousel"/>

      <div class="flex flex-col justify-between w-[60%]">
        <p class="pt-6 sm:pt-10 pl-[2%] sm:pl-[8%] pr-[10%] sm:pr-0 font-normal italic font-playfair text-left text-12-13-16-20 floatY">
      <span class="font-black text-espresso font-playfair text-14-15-18-22">
        Compétences acquises</span> <br/>
          Alliant Front-end et Back-end, je conçois des applications web complètes, où chaque détail compte, du design à
          la logique serveur.
        </p>
      </div>
    </div>

    <!-- COMPETENCES MOBILE -->
    <div class="flex flex-row px-[4%] sm:px-[15%] mt-40 mr-10">
      <img class="h-[80px] sm:h-[90px] md:h-[100px] lg:h-[145px] w-auto object-contain pb-auto mb-auto lg:mb-0 mr-10"
           src="/logo-mobile.png"
           alt="Logo représentant un ordinateur"/>
      <div>
        <p class="text-14-15-18-22"><span
            class="font-black italic text-espresso font-playfair text-left text-18-19-24-30">Développement App
          Multi Device</span><br>
          Création d’applications performantes et intuitives, adaptées aux besoins des utilisateurs et aux contraintes
          techniques.</p>
        <div class="flex flex-wrap gap-2 pt-5">
        <span
            class="px-3 py-1 hover:bg-dusk hover:border-dusk transition-colors duration-300 text-vanilla bg-espresso rounded-full text-14-15-16-20 italic font-semibold border border-espresso"
        >
          FLUTTER
        </span>
          <span
              class="px-3 py-1 hover:bg-dusk hover:border-dusk transition-colors duration-300 text-vanilla bg-espresso rounded-full text-14-15-16-20 italic font-semibold border border-espresso"
          >
          SWIFT
        </span>
          <span
              class="px-3 py-1 hover:bg-dusk hover:border-dusk transition-colors duration-300 text-vanilla bg-espresso rounded-full text-14-15-16-20 italic font-semibold border border-espresso"
          >
          KOTLIN
        </span>
        </div>
      </div>
    </div>

    <!-- CARROUSELS GAUCHE DROITE DE TOUTES MES COMPETENCES -->
    <div class="overflow-hidden whitespace-nowrap w-full pt-6 lg:pt-12 text-35-50-60-80 italic font-bold">
      <div class="inline-block animate-marquee">
        <span v-for="(i) in 2" :key="i">
          <span
              v-for="(mot, index) in compMobileGD"
              :key="`${i}-${index}`"
              class="px-2"
          >
            <span>- </span>
            <span class="hover:text-dusk transition-colors duration-300">
              {{ mot }}
            </span>
          </span>
        </span>
      </div>
    </div>

    <!-- CARROUSELS DROITE GAUCHE DE TOUTES MES COMPETENCES -->
    <div class="overflow-hidden whitespace-nowrap w-full text-35-50-60-80 italic font-bold">
      <div class="inline-block animate-marquee2">
        <span v-for="(i) in 2" :key="i">
          <span
              v-for="(mot, index) in compMobileDG"
              :key="`${i}-${index}`"
              class="px-2"
          >
            <span>- </span>
            <span class="hover:text-dusk transition-colors duration-300">
              {{ mot }}
            </span>
          </span>
        </span>
      </div>
    </div>

    <!-- DETAILS -->
    <div class="flex ml-[2%] sm:ml-[10%] md:ml-[20%] mr-auto w-auto gap-4">
      <div class="flex flex-col justify-between w-[60%]">
        <p class="pt-6 sm:pt-10 pr-[2%] sm:pr-[8%] pl-[10%] sm:pl-0 font-normal italic font-playfair text-right text-12-13-16-20 floatY">
      <span class="font-black text-espresso font-playfair text-14-15-18-22">
        Compétences acquises</span> <br/>
          Je conçois des logiciels modulaires et performants en appliquant l’architecture MVVM. Je vais bientôt
          approfondir mes compétences en C# pour créer des applications toujours plus robustes et maintenables.
        </p>
      </div>
      <img class="h-[80px] sm:h-[90px] md:h-[100px] lg:h-[145px] w-auto mt-auto mb-auto lg:mb-0 pl-4 floatY"
           src="@/assets/img/arrowFive.png"
           alt="Flèche qui pointe du texte au carousel"/>
    </div>

  </section>

  <!--Contacts presentation-->
  <section id="contacts" class="pb-40">

    <!--Titre-->
    <div class="relative group">
      <h1
          class="relative text-[35px] sm:text-[45px] md:text-[60px] lg:text-[80px] text-espresso font-playfair
          font-black text-center italic -mb-4 z-10"
      >
        Contacts
      </h1>
      <div
          class="absolute sm:bottom-[15px] md:bottom-[20px] lg:bottom-[26px] sm:left-[27%] md:left-[28%] lg:left-[32%] sm:w-[50%] md:w-[50%]
          lg:w-[41%] lg:h-6 md:h-5 h-4 bg-blush opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>

    </div>

    <div
        class="relative group pt-12 sm:pt-24 px-[8%] sm:px-[15%] font-normal text-espresso font-playfair text-justify text-14-15-18-22">
      <div class="relative z-10">
        <p>03 - 04</p>
        <h2 class="font-black italic text-espresso font-playfair text-left text-18-19-24-30">Prenez contact avec
          moi</h2>
        <p>« Je suis toujours ravi d’échanger, de découvrir de nouveaux projets et de collaborer avec d’autres
          passionnés. » Si vous souhaitez discuter, demander des informations ou partager vos idées, je vous invite à me
          laisser un petit message !
        </p>
      </div>
      <div
          class="absolute bottom-[15px] sm:bottom-[40px] md:bottom-[50px] lg:bottom-[70px] left-[27%] sm:left-[10%] lg:left-[12%] w-[75%] sm:w-[70%] md:w-[68%]
          lg:w-[65%] sm:h-[60%] lg:h-[55%] h-0 bg-linen opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>
    </div>

    <FormContactComponent></FormContactComponent>

    <div class="px-[8%] sm:px-[15%]">
      <h2 class="text-18-19-24-30 pt-10 sm:pt-20 pb-6 sm:pb-8 font-playfair font-black">
        Mon Curriculum Vitae
      </h2>

      <div class="w-full">

        <!-- Image du CV -->
        <div class="flex justify-center">
          <img
              class="mb-4 sm:mb-8 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-auto shadow-[1px_1px_22px_0_rgba(0,0,0,0.25)]"
              src="/cv.png"
              alt="Illustration de mon CV">
        </div>

        <div class="flex justify-start">
          <a href="/files/Marvyn_LEVIN_cv_v2.pdf"
             download="Marvyn_LEVIN_cv_v2.pdf"
             class="cursor-pointer">
            <button class="btn-espresso hover:bg-noise">
              <i class="bi bi-patch-plus text-17-18-21-25"></i>
              <p class="text-12-13-16-20">Curriculum Vitae</p>
            </button>
          </a>
        </div>

      </div>


    </div>


  </section>

  <!--Blogs presentation-->
  <section id="blogs" class="pb-40">

    <!--Titre-->
    <div class="relative group">
      <h1
          class="relative text-[35px] sm:text-[45px] md:text-[60px] lg:text-[80px] text-espresso font-playfair
          font-black text-center italic -mb-4 z-10"
      >
        Blogs
      </h1>
      <div
          class="absolute sm:bottom-[15px] md:bottom-[20px] lg:bottom-[26px] sm:left-[27%] md:left-[28%] lg:left-[32%] sm:w-[50%] md:w-[50%]
          lg:w-[41%] lg:h-6 md:h-5 h-4 bg-blush opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>
    </div>

    <div
        class="relative group pt-12 sm:pt-24 px-[8%] sm:px-[15%] font-normal text-espresso font-playfair text-justify text-14-15-18-22">
      <div class="relative z-10">
        <p>04 - 04</p>
        <h2 class="font-black italic text-espresso font-playfair text-left text-18-19-24-30">Découvrez tous mes articles
        </h2>
        <p>«Je partage ici des conseils, des astuces et des réflexions sur le Net.»
          Parcourez les articles pour en apprendre davantage, approfondir vos connaissances et suivre les dernières
          tendances.
        </p>
      </div>
      <div
          class="absolute bottom-[15px] sm:bottom-[40px] md:bottom-[50px] lg:bottom-[70px] left-[27%] sm:left-[10%] lg:left-[12%] w-[75%] sm:w-[70%] md:w-[68%]
          lg:w-[65%] sm:h-[60%] lg:h-[55%] h-0 bg-linen opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>
    </div>

    <div class="px-[8%] sm:px-[15%] mt-14 sm:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
      <BlogCardComponent
          v-for="(b, i) in blogs"
          :key="i"
          :title="b.title"
          :image="b.image"
          :description="b.description"
          :detailsLink="b.detailsLink"
      />
    </div>

    <div class="flex mt-10 ml-[2%] sm:ml-[10%] md:ml-[20%] mr-auto w-auto gap-4">
      <img class="h-[80px] sm:h-[90px] md:h-[100px] lg:h-[145px] w-auto mt-auto mb-auto lg:mb-0 pl-4 floatY"
           src="@/assets/img/arrowTwo.png"
           alt="Flèche qui pointe du texte au carousel"/>
      <div class="flex flex-col justify-between">
        <p class="pt-6 sm:pt-10 pl-[2%] sm:pl-[8%] pr-[10%] sm:pr-[12%] lg:pr-[15%] font-normal italic font-playfair text-justify text-12-13-16-20 floatY">
      <span class="font-black text-espresso font-playfair text-justify text-14-15-18-22">
        Je vous souhaite une bonne lecture </span> <br/>
          et j’espère que ces blogs vous apporteront les réponses ou l’inspiration que vous recherchez.
        </p>
      </div>
    </div>


  </section>

  <div class="h-14"></div>

  <!-- Bas de page -->
  <FooterComponent/>

</template>

<script>
import FeatureCardComponent from "@/components/cards/FeatureCardComponent.vue";
import ProjectCardComponent from "@/components/cards/ProjectCardComponent.vue"
import BlogCardComponent from "@/components/cards/BlogCardComponent.vue";
import FigureSliderComponent from "@/components/animations/FigureSliderComponent.vue";
import ScrollFadeInComponent from "@/components/animations/ScrollFadeInComponent.vue";
import VueApexCharts from "vue3-apexcharts";
import CompetenceChartComponent from "@/components/charts/CompetenceChartComponent.vue";
import {useHead} from '@vueuse/head'
import NavbarPortfolioComponent from "@/components/navbar/NavbarPortfolioComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import FormContactComponent from "@/components/form/FormContactComponent.vue";

export default {
  name: 'PortfolioBookView',
  setup() {
    useHead({
      title: 'Marvyn Levin - Portfolio',
      meta: [
        {
          name: 'description',
          content: 'Découvrez mon portfolio dans lequel je vous fait part de mes projets et vous invite a lire mon blog.'
        },
        {
          name: 'keywords',
          content: 'portfolio, informatique, développement, contact, web, logiciel, application, design'
        },
        {
          property: 'og:title',
          content: 'Marvyn Levin - Portfolio'
        },
        {
          property: 'og:description',
          content: 'Découvrez mon portfolio dans lequel je vous fait part de mes projets et vous invite a lire mon blog.'
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
          content: 'Marvyn Levin - Portfolio'
        },
        {
          name: 'twitter:description',
          content: 'Découvrez mon portfolio dans lequel je vous fait part de mes projets et vous invite a lire mon blog.'
        },
        {
          name: 'twitter:image',
          content: 'https://www.marvynlevin.fr/icon.png'
        }
      ]
    })
  },
  components: {
    FormContactComponent,
    FooterComponent,
    NavbarPortfolioComponent,
    FigureSliderComponent,
    CompetenceChartComponent,
    ScrollFadeInComponent,
    FeatureCardComponent,
    ProjectCardComponent,
    BlogCardComponent,
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
      texte: `24H DU MANS, FIREWATCH, LEVIN ENERGIE, TIME-TIME, DRMAD, TRIFLE, ECLAT D'ETOILE, HYDROBUS BELFORTAIN, GALADRIM, HEAVEN`,
      comp1: `HTML5, CSS3, JAVASCRIPT, TAILWIND CSS, BOOTSTRAP, SASS, FIGMA (UI/UX), WEBPACK, VITE, NPM`,
      comp2: `PYTHON, PHP, NODEJS, MYSQL, MONGODB, API REST, GIT, DOCKER`,
      comp3: `DART, ANDROID, SWIFT, IOS, ANDROID STUDIO, XCODE`,
      comp4: `POSTRESQL, MONGODB, API REST, MVC, MVVM`,
      blogs: [
        {
          title: "Agriculture Intelligente",
          image: "/bg-agriculture-intelligente.png",
          description: "« Robots, IA et data transforment l’agriculture, offrant des cultures plus durables, tout en facilitant le travail. »",
          detailsLink: "agriculture-intelligente"
        },
        {
          title: "Découverte de Symfony",
          image: "/bg-decouverte-symfony.png",
          description: "« Symfony simplifie et accélère le développement web grâce à sa structure robuste, ses outils puissants et sa grande flexibilité. »",
          detailsLink: "decouverte-de-symfony"
        },
        {
          title: "Google MyBusiness",
          image: "/bg-google-mybusiness.png",
          description: "« Google MyBusiness aide les entreprises à gagner en visibilité locale, attirer plus de clients et optimiser leur présence en ligne. »",
          detailsLink: "google-mybusiness"
        },
        {
          title: "Améliorer son SEO",
          image: "/bg-seo.png",
          description: "« Le SEO améliore le positionnement d’un site en optimisant contenu, structure et mots-clés pour attirer un trafic naturel durable. »",
          detailsLink: "ameliorer-son-seo"
        },
        {
          title: "Comparaison de BDD",
          image: "/bg-bdd.png",
          description: "« Chaque base de données a ses forces : performance, flexibilité ou sécurité ; bien choisir dépend des besoins du projet. »",
          detailsLink: "comparaison-de-bdd"
        }
      ]
    }
  },
  computed: {
    mots() {
      return this.texte
          .split(',')
          .map(m => m.trim())
    },
    compWebGD() {
      return this.comp1
          .split(',')
          .map(m => m.trim())
    },
    compWebDG() {
      return this.comp2
          .split(',')
          .map(m => m.trim())
    },
    compMobileGD() {
      return this.comp3
          .split(',')
          .map(m => m.trim())
    },
    compMobileDG() {
      return this.comp4
          .split(',')
          .map(m => m.trim())
    },
  },
  methods: {
    goBack() {
      this.$router.push({name: 'home'})
    },
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

@layer utilities {
  @keyframes marquee2 {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(+0%);
    }
  }

  .animate-marquee2 {
    animation: marquee2 100s linear infinite;
  }
}
</style>

