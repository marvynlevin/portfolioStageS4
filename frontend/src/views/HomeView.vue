<template>
  <!--Haut de page-->
  <section
      class="overflow_hidden sm:p-16 pt-[20vh] mb-[30vh] sm:mb-[30vh] sm:pt-[25vh] md:pt-[20vh] lg:pt-[12vh] xl:pt-[13vh] 2xl:pt-[22vh] md:h-screen">
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
        class="text-35-50-60-80 text-espresso font-playfair font-black
        text-center"
    >
      DE STAGE
    </p>
    <div
        class="relative bottom-0 flex items-center justify-center sm:p-10 group"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
    >
      <svg
          @click="scrollToNextSection"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="[
        'transition-transform duration-300 ease-in-out cursor-pointer w-[70px] pt-[15vh] sm:pt-0 sm:w-[100px] h-auto hover:scale-110',
        (hover || autoMove) ? 'translate-y-6' : ''
      ]"
      >
        <circle cx="60" cy="60" r="58.5" fill="#EDE4D3" stroke="#583C0E" stroke-width="3"/>
        <path
            d="M58.9393 88.0698C59.5251 88.6555 60.4749 88.6555 61.0607 88.0698L70.6066 78.5238C71.1924 77.938 71.1924 76.9883 70.6066 76.4025C70.0208 75.8167 69.0711 75.8167 68.4853 76.4025L60 84.8878L51.5147 76.4025C50.9289 75.8167 49.9792 75.8167 49.3934 76.4025C48.8076 76.9883 48.8076 77.938 49.3934 78.5238L58.9393 88.0698ZM60 32H58.5V87.0091H60H61.5V32H60Z"
            fill="#583C0E"
        />
      </svg>
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
        <img class="hidden sm:block sm:h-[350px] md:h-[400px] lg:h-[480px] w-auto mb-auto mt-auto lg:mt-0 floatY"
             src="@/assets/img/me.png"
             alt="Image de moi en tant que randonneur">
        <img class="hidden sm:block sm:h-[90px] md:h-[100px] lg:h-[145px] lg:mb-0 mb-[15%] w-auto mt-auto pl-4 floatY"
             src="@/assets/img/arrowOne.png"
             alt="Une représentation graphique d'une flèche qui pointe du texte à l'image de moi randonneur">

        <div>
          <p class="pt-10 pb-10 pl-10 pr-10 sm:pr-[15%] font-normal text-espresso font-playfair text-justify text-14-15-18-22">
            <span class="text-18-19-24-30 font-black italic">Bienvenue</span>
            sur mon portfolio, réalisé dans le cadre de <strong>mon stage de 2e année</strong> en BUT Informatique.
            Vous y découvrirez les compétences que j’ai développées tout au long de mon stage en Bachelor Universitaire
            de
            Technologie, ainsi que des exemples concrets du projet Akosave réalisés durant mon stage de quatrième
            semestre. <br>
            Ce portfolio met en lumière les <strong>connaissances techniques</strong> et
            <strong>professionnelles</strong> que j’ai pu acquérir et mettre
            en
            pratique dans un contexte réel.
          </p>

          <div class="flex flex-row floatY">
            <img class="block sm:hidden h-[200px] w-auto mb-auto mt-auto lg:mt-0" src="@/assets/img/me.png"
                 alt="Image de moi en tant que randonneur">
            <img class="block sm:hidden h-[100px] w-auto mt-auto pl-4"
                 src="@/assets/img/arrowThree.png"
                 alt="Une représentation graphique d'une flèche qui pointe du texte à l'image de moi randonneur">
          </div>

          <p class="pt-10 pb-10 pl-[8%] pr-[25%] sm:pr-[35%] xl:pr-[45%] font-normal italic font-playfair text-justify text-12-13-16-20 floatY">
          <span class="font-black text-espresso font-playfair text-justify text-14-15-18-22">
            "Oui, je sais, ça ne ressemble pas à un bureau ni à une ligne de code."</span> <br>
            Et pourtant, c’est bien moi — Marvyn
            Levin, étudiant en informatique, randonneur par surprise.
          </p>
          <img class="ml-auto mr-[15%] sm:mr-[45%] w-[80px] sm:w-[110px] h-auto floatY -mt-12 sm:-mt-6 lg:-mt-12"
               src="@/assets/img/signature.png"
               alt="Ma signature en guise de détails complémentaires">
        </div>
      </div>
    </div>
  </section>

  <!--Company presentation-->
  <section id="entreprise" class="pb-40">

    <!--Titre-->
    <div class="relative group">
      <h1
          class="relative text-[35px] sm:text-[45px] md:text-[60px] lg:text-[80px] text-espresso font-playfair
          font-black text-center italic -mb-4 z-10"
      >
        Entreprise
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
        <p>01 - 02</p>
        <h2 class="font-black italic text-espresso font-playfair text-left text-18-19-24-30">A Propos</h2>
        <p>Akolad Solutions est une agence numérique indépendante qui se distingue par son approche
          <strong>humaine</strong>, <strong>agile</strong> et
          centrée sur l’efficacité. Fondée par <strong>Jérôme Varini</strong>, elle s’est spécialisée dans le
          développement
          d’<strong>applications web</strong> et <strong>logicielles</strong> sur mesure, répondant aux besoins
          spécifiques d’une clientèle variée :
          entreprises, coopératives et collectivités.
        </p>
      </div>
      <div
          class="absolute bottom-[15px] sm:bottom-[40px] md:bottom-[50px] lg:bottom-[70px] left-[27%] sm:left-[10%] lg:left-[12%] w-[75%] sm:w-[70%] md:w-[68%]
          lg:w-[65%] sm:h-[60%] lg:h-[55%] h-0 bg-linen opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>
    </div>

    <img
        src="@/assets/img/logoAkoladsolutions.png"
        alt="Logo de l'entreprise à laquelle j'ai travaillé"
        :style="{
      transform: `translate(${xOffset}px, ${yOffset}px)`,
      transition: 'transform 0.1s ease'
    }"
        class="ml-auto mr-auto w-[250px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto pt-10"
    />

    <!--Carousel-->
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

    <div class="flex ml-[2%] sm:ml-[10%] mr-auto w-auto gap-4">
      <img class="h-[80px] sm:h-[90px] md:h-[100px] lg:h-[145px] w-auto mt-auto mb-auto lg:mb-0 pl-4 floatY"
           src="@/assets/img/arrowTwo.png"
           alt="Flèche qui pointe du texte au carousel"/>

      <div class="flex flex-col justify-between">
        <p class="pt-6 sm:pt-10 pl-[2%] sm:pl-[8%] pr-[10%] sm:pr-0 font-normal italic font-playfair text-justify text-12-13-16-20 floatY">
      <span class="font-black text-espresso font-playfair text-justify text-14-15-18-22">
        "De nombreuses qualités"</span> <br/>
          Et oui Akolad solutions c’est plus qu’une simple entreprise du numérique.
        </p>

        <div class="flex justify-end pr-10 mt-2 sm:mt-0">
          <a href="https://akoladsolutions.com" target="_blank" class="cursor-pointer">
            <button class="btn-espresso floatY">
              <i class="bi bi-link-45deg text-17-18-21-25"></i>
              <p class="text-12-13-16-20">Lien vers le site web</p>
            </button>
          </a>
        </div>
      </div>
    </div>

    <div
        class="relative group mt-20 pt-12 sm:mt-36 sm:pt-24 px-[8%] sm:px-[15%] font-normal text-espresso font-playfair text-justify text-14-15-18-22">
      <div class="relative z-10">
        <p>02 - 02</p>
        <h2 class="font-black italic text-espresso font-playfair text-left text-18-19-24-30">En savoir plus</h2>
        <p>Akolad Solutions, agence numérique basée à <strong>Besançon</strong>, met son expertise au service du
          développement de
          solutions sur mesure. L'agence s'engage à fournir des outils numériques <strong>performants</strong>, conçus
          en <strong>étroite collaboration</strong> avec ses clients pour répondre précisément à leurs <strong>objectifs
            métiers</strong>. Une
          communication claire et un <strong>suivi rigoureux</strong> jalonnent chaque projet.
        </p>
      </div>
      <div
          class="absolute bottom-[15px] sm:bottom-[40px] md:bottom-[50px] lg:bottom-[70px] left-[27%] sm:left-[10%] lg:left-[12%] w-[75%] sm:w-[70%] md:w-[68%]
          lg:w-[65%] sm:h-[60%] lg:h-[55%] h-0 bg-linen opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>
    </div>

    <div class="flex flex-col mt-12 sm:mt-24">
      <ScrollFadeInComponent>
        <div class="flex flex-col md:flex-row items-center md:gap-12 px-[8%] sm:px-[15%]">
          <p class="pt-10 pb-10 font-normal text-espresso font-playfair text-justify text-14-15-18-22">
            <span class="text-18-19-24-30 font-black italic">0.1 Installée</span>
            dans un environnement propice à la créativité et à l’innovation, <strong>Akolad Solutions</strong> allie
            expertise technique et sens du service pour proposer des solutions numériques <strong>robustes</strong>,
            <strong>évolutives</strong> et
            <strong>orientées métier</strong>.
          </p>
          <img class="w-[220px] sm:w-[225px] lg:w-[300px] h-auto" src="@/assets/img/firstCompany.png"
               alt="Illustration représentant une équie soudée">
        </div>
      </ScrollFadeInComponent>
      <ScrollFadeInComponent>
        <div class="flex flex-col md:flex-row items-center md:mx-30 lg:mx-36 px-[8%] sm:px-[15%]">
          <p class="pt-10 pb-10sm:px-[15%] font-normal text-espresso font-playfair text-justify text-14-15-18-22">
            <span class="text-18-19-24-30 font-black italic">0.2 L’équipe</span>,
            composée de professionnels aux compétences complémentaires — <strong>architecte numérique</strong>, <strong>développeuse
            back-end</strong>, <strong>designer UX</strong> — collabore au quotidien pour créer des outils performants,
            pensés pour optimiser les processus métier et améliorer l'expérience utilisateur.
          </p>
        </div>
      </ScrollFadeInComponent>
      <ScrollFadeInComponent>
        <div class="flex flex-col md:flex-row items-center md:gap-12 px-[8%] sm:px-[15%]">
          <img class="w-[250px] sm:w-[240px] lg:w-[300px] h-auto py-12 md:py-24" src="@/assets/img/secondCompany.png"
               alt="Illustration représentant une équie soudée">
          <p class="pt-10 pb-10 font-normal text-espresso font-playfair text-justify text-14-15-18-22">
            <span class="text-18-19-24-30 font-black italic">0.3 Avec une culture</span>
            du travail fondée sur l’écoute, la polyvalence et la rigueur, Akolad Solutions incarne
            l’esprit d’une tech éthique, <strong>pragmatique</strong> et <strong>accessible</strong>, au cœur du tissu
            économique local.
          </p>
        </div>
      </ScrollFadeInComponent>
    </div>

  </section>

  <!--Stage-->
  <section id="stage" class="pb-40">

    <!--Titre-->
    <div class="relative group">
      <h1
          class="relative text-[35px] sm:text-[45px] md:text-[60px] lg:text-[80px] text-espresso font-playfair
          font-black text-center italic -mb-4 z-10"
      >
        Stage
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
        <p>01 - 01</p>
        <h2 class="font-black italic text-espresso font-playfair text-left text-18-19-24-30">Mon stage</h2>
        <p>Lors de mon stage chez Akolad Solutions, j’ai participé au <strong>développement de l’application interne
          Akosave</strong>,
          dédiée à la gestion des clients, des projets, et tout ce qui en découle. Cette expérience m’a permis de
          développer de <strong>nouvelles compétences en programmation</strong>, de <strong>découvrir les réalités du
            développement B2B</strong> et de
          <strong>gagner en rigueur et autonomie</strong>.
        </p>
      </div>
      <div
          class="absolute bottom-[15px] sm:bottom-[40px] md:bottom-[50px] lg:bottom-[70px] left-[27%] sm:left-[10%] lg:left-[12%] w-[75%] sm:w-[70%] md:w-[68%]
          lg:w-[65%] sm:h-[60%] lg:h-[55%] h-0 bg-linen opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>
    </div>

    <div class="flex flex-col md:flex-row justify-center gap-6 mt-24 flex-wrap">
      <FeatureCardComponent
          title="Gestion des maintenances"
          longText="
          Ce module a été conçu pour permettre à Akosave de centraliser la gestion des contrats de maintenance entre les sociétés et leurs clients. L’objectif principal est de faciliter le suivi de ces contrats dans le temps, d’automatiser leur gestion et de produire des rapports clairs et exploitables que l’on peut consulter, archiver ou envoyer par email.

          Concrètement, une fois un contrat de maintenance créé, celui-ci est lié à une société, à un client et à un projet. Il contient plusieurs informations essentielles telles que le nom du contrat, les dates de début et de fin, le type de prestation ou encore son statut. Ce statut est mis à jour automatiquement selon la date actuelle, ce qui permet de savoir en un coup d’œil si le contrat est actif, expiré ou à venir.

          L’utilisateur peut ensuite rédiger un rapport de maintenance en s’appuyant sur une interface dédiée. Ces rapports sont structurés par des lignes, elles-mêmes classées par type (matériel, intervention, information, etc.). On peut créer des modèles de lignes pour gagner du temps lors de la rédaction, et même des lignes récurrentes qui seront automatiquement insérées dans chaque rapport lié à un contrat spécifique.

          Un système de génération de PDF a été intégré pour permettre à l’utilisateur de visualiser ou télécharger le rapport final. Ce PDF respecte la charte graphique de l’entreprise et peut être envoyé directement par email grâce à un service d’envoi sécurisé. L’email est personnalisable, et l’utilisateur peut modifier le message avant envoi via un éditeur de texte intégré.

          Pour éviter toute erreur, l’envoi du rapport par email est protégé par un bouton de confirmation avec un compte à rebours. Les fichiers sont sécurisés sur le serveur et ne sont pas accessibles publiquement. L’ensemble de la gestion du module est restreint aux utilisateurs habilités, avec des droits spécifiques selon les rôles.

          Ce module permet donc non seulement de gagner du temps dans la production de documents de maintenance, mais aussi de structurer l’information de manière cohérente, tout en assurant une communication professionnelle avec les clients.
          "
          icon="gearIcon.svg"
          :bulletPoints="[
        'Suivi des dates de début et de fin.',
        'Création de rapports au format PDF.',
        'Envoie des rapports par email.'
      ]"
          :active="true"
      />
      <FeatureCardComponent
          title="Gestion des tickets clients"
          longText="
          Ce module a pour but de faciliter la communication entre les utilisateurs finaux (clients) et l’équipe technique ou commerciale. Il permet de centraliser les demandes, d’en assurer le suivi et d’avoir un historique clair de tous les échanges qui ont eu lieu autour d’un problème ou d’une question.

          Lorsqu’un utilisateur rencontre un problème ou souhaite formuler une demande, il peut créer un ticket depuis son espace personnel. Il remplit un formulaire dans lequel il décrit son besoin, et ce ticket est automatiquement associé à un projet, un client, une société, et un auteur. À ce moment-là, aucun interlocuteur n’est encore assigné au ticket : il est en attente de traitement.

          L’administrateur, ou toute personne autorisée, peut consulter la liste des tickets en cours et assigner un destinataire à chaque ticket. Une fois qu’un ticket a été pris en charge, il change de statut, ce qui permet à l’auteur de voir que sa demande est en cours de traitement.

          Chaque ticket dispose d’un espace de discussion interne. C’est ici que les échanges se font entre l’auteur et l’interlocuteur assigné. Chacune des réponses est appelée 'résolution', et vient s’ajouter au fil de la discussion. En fonction du rôle de l’utilisateur, certaines actions sont disponibles : l’auteur peut clôturer le ticket s’il estime que le problème est résolu, tandis que l’interlocuteur peut le rejeter s’il n’est pas pertinent. Ces actions déclenchent automatiquement des messages dans la discussion pour garder une trace de chaque décision.

          Un système de notification par email permet d’informer l’auteur lorsqu’une réponse a été donnée ou qu’un changement a été effectué sur son ticket.

          L’affichage des tickets est personnalisé selon le rôle de l’utilisateur : un utilisateur classique ne voit que ses propres tickets, tandis qu’un administrateur ou un technicien peut voir tous les tickets et accéder à des fonctionnalités supplémentaires. Des droits fins ont été mis en place pour empêcher les utilisateurs non autorisés de modifier certains champs sensibles (comme le statut ou l’assignation).

          Ce module permet donc de structurer les échanges autour des demandes clients, d’assigner les responsabilités clairement, d’assurer un suivi complet et d’améliorer la traçabilité de toutes les interactions liées aux projets.
          "
          icon="ticketIcon.svg"
          :bulletPoints="[
        'Création, attribution et résolution des demandes clients.',
        'Historique des échanges associés à chaque ticket.'
      ]"
          :active="true"
      />
      <FeatureCardComponent
          title="Gestion des modules de projet"
          icon="moduleIcon.svg"
          :bulletPoints="[
        'Enregistrement du temps passé sur chaque mission.',
        'Génération de rapports pour évaluer la rentabilité d’un projet.'
      ]"
          :active="false"
      />
    </div>
  </section>

  <!--Competences-->
  <section id="competences" class="pb-40">

    <!--Titre-->
    <div class="relative group">
      <h1
          class="relative text-[35px] sm:text-[45px] md:text-[60px] lg:text-[80px] text-espresso font-playfair
          font-black text-center italic -mb-4 z-10"
      >
        Compétences
      </h1>
      <div
          class="absolute sm:bottom-[15px] md:bottom-[20px] lg:bottom-[26px] sm:left-[27%] md:left-[28%] lg:left-[32%] sm:w-[50%] md:w-[50%]
          lg:w-[41%] lg:h-6 md:h-5 h-4 bg-blush opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>

    </div>

    <!--Titre compétence-->
    <div
        class="relative group pt-12 sm:pt-24 px-[8%] sm:px-[15%] font-normal text-espresso font-playfair text-justify text-14-15-18-22">
      <div class="relative z-10">
        <p>01 - 02</p>
        <h2 class="font-black italic text-espresso font-playfair text-left text-18-19-24-30">Compétence 1 - Réaliser
          un développement d’application</h2>
        <p class="text-14-15-18-22">Mon stage chez Akolad Solutions m'a permis de mettre en pratique la compétence de
          réalisation d'application,
          évaluée par les acquis suivants :
        </p>
      </div>
      <div
          class="absolute bottom-[15px] sm:bottom-[40px] md:bottom-[50px] lg:bottom-[50px] left-[27%] sm:left-[10%] lg:left-[12%] w-[75%] sm:w-[70%] md:w-[68%]
          lg:w-[65%] sm:h-[60%] lg:h-[55%] h-0 bg-linen opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>
    </div>

    <!--Défilement de figures-->
    <FigureSliderComponent
        :figures="[
    {
      src: 'figure10_charte-raphique-Akosave.png',
      alt: `Charte graphique de Akosave`,
      caption: `Figure 1 : Charte graphique de Akosave`,
    },
    {
      src: 'figure13_tinyMCE-raport.png',
      alt: `Extrait du site utilisant l'éditeur riche Tiny MCE`,
      caption: `Figure 2 : Extrait du site utilisant l'éditeur riche Tiny MCE`,
    },
    {
      src: 'figure14_lignes-raport.png',
      alt: `Extrait du site utilisant les lignes de rapport`,
      caption: `Figure 3 : Extrait du site utilisant les lignes de rapport`,
    },
    {
      src: 'figure14_mail-envoye.png',
      alt: `Extrait d'un envoi de mail`,
      caption: `Figure 4 : Extrait d'un envoi de mail`,
    },
    {
      src: 'figure12_extrait-maquettes.png',
      alt: `Extrait des maquettes Figma`,
      caption: `Figure 5 : Extrait des maquettes Figma`,
    },
    {
      src: 'figure15_routage.png',
      alt: `Extrait de routages Symfony 7`,
      caption: `Figure 6 : Extrait de routages Symfony 7`,
    },
  ]"
    />

    <!--Texte-->
    <div class="px-[8%] sm:px-[15%] mt-12 md:mt-24">
      <ul class="list-disc pl-6 text-17-18-21-25 italic font-bold">
        <li>AC1 : Élaborer et implémenter les spécifications fonctionnelles et non
          fonctionnelles à partir des exigences
        </li>
      </ul>
      <p class="text-14-15-16-20 font-normal not-italic text-justify mb-2 md:mb-6">
        Lors de mon stage chez <strong>AKOLAD SOLUTIONS</strong>, j'ai activement participé à l'élaboration des
        spécifications pour l'<strong>évolution de l'application AKOSAVE</strong>. Cela a notamment impliqué de
        <strong>comprendre les besoins</strong> liés à la gestion des maintenances, des tickets, et des
        utilisateurs/projets. J'ai travaillé sur la <strong>formalisation du modèle de données</strong>
        en comparant un brouillon existant avec l'équipe et en réalisant un Modèle Logique de Données (MLD) complet,
        incluant les nouvelles entités pour <strong>la gestion des maintenances et des tickets</strong>. Ce MLD a été
        revu et modifié.
        J'ai également <strong>conçu les interfaces utilisateur</strong> en créant des maquettes sur Figma, basées sur
        la charte
        graphique de l'application existante (<strong>Figure 1</strong>). Ces maquettes ont été ajustées suite aux
        retours de l'équipe
        pour affiner l'ergonomie et les workflows (est la représentation
        d'une suite de tâches ou d'opérations effectuées par une personne),
        comme la simplification de l'ajout des comptes utilisateurs ou la gestion des rapports, des tickets. Un défi
        majeur a été la création du
        système de rapports, passant d'une approche avec un <strong>éditeur riche (TinyMCE)</strong> à une structure
        basée sur de
        nouvelles entités (ReportLine, ReportType, RecurrentLine) (<strong>Figure 2 & 3</strong>).

        <br><br>

        L'implémentation de ces spécifications a constitué la majeure partie de mon travail. J'ai <strong>créé les
        nouvelles
        entités</strong> (comme ContractMaintenance, Report, Ticket, Resolution, ReportLine, etc.) <strong>en utilisant
        Doctrine ORM</strong>.
        J'ai développé <strong>les contrôleurs Symfony et les vues Twig</strong> associées pour gérer <strong>l'affichage</strong>,
        <strong>l'ajout</strong>, <strong>la modification</strong> et
        <strong>la suppression</strong> (opérations CRUD) des données correspondantes. J'ai également mis en place des
        fonctionnalités
        spécifiques comme la gestion des relations complexes entre entités (Projet ↔ User), la logique des
        statuts de ticket, ou encore la génération et l'envoi de rapports PDF par email (<strong>Figure 4</strong>).

        <br><br>

        La <strong>formalisation du MLD a nécessité plusieurs itérations</strong> pour s'assurer de sa justesse et de
        son adéquation aux
        cas d'utilisation. L'<strong>adaptation des maquettes a permis de résoudre des problèmes d'ergonomie</strong>
        identifiés par
        l'équipe. Le choix d'une nouvelle structure pour les rapports a résolu les problèmes potentiels liés à la
        sécurité et la complexité de l'approche initiale.

        <br><br>

        J'ai développé ma capacité à formaliser des besoins en MLD et en maquettes UI/UX. J'ai acquis une solide
        expérience dans l'implémentation backend (<strong>Doctrine ORM</strong>, <strong>Controllers</strong>, <strong>Services</strong>)
        et frontend (<strong>Twig</strong>) avec le
        framework Symfony. J'ai appris à <strong>traduire des spécifications fonctionnelles en code
        opérationnel</strong>.

      </p>
      <ul class="list-disc pl-6 pt-10 text-17-18-21-25 italic font-bold">
        <li>AC2 : Appliquer des principes d’accessibilité et d’ergonomie</li>
      </ul>
      <p class="text-14-15-16-20 font-normal not-italic text-justify mb-2 md:mb-6">
        L'application des principes d'ergonomie a été une composante importante de mon travail, notamment à travers la
        <strong>conception des maquettes sur Figma</strong> (<strong>Figure 5</strong>). J'ai <strong>créé des
        prototypes interactifs pour présenter les
        nouvelles pages</strong> à l'équipe et recevoir des validations. Les retours de Jérôme VARINI et Emmanuel
        BERTRON ont
        porté sur des <strong>aspects ergonomiques</strong>, tels que le choix de la police (Segoe UI, considérée comme
        hyperlegible) et
        l'espacement pour améliorer la lisibilité. J'ai adapté mes conceptions suite à leurs remarques. Par exemple,
        j'ai ajusté les redirections après la création d'éléments pour améliorer le flux utilisateur.

        <br><br>

        Sur le plan de l'implémentation, j'ai travaillé à <strong>améliorer l'interface en ajoutant des
        fonctionnalités</strong> qui
        facilitent l'interaction, comme la <strong>barre de recherche dynamique</strong> intégrée dans plusieurs
        modules, la <strong>fonction
        permettant de copier des champs d'une table au presse-papier</strong>, ou l'ajout d'une <strong>page de
        visualisation avant
        l'envoi d'un rapport</strong> avec des boutons de confirmation pour éviter les erreurs. J'ai également stylisé
        divers
        éléments comme les badges et les barres de défilement pour qu'ils s'intègrent harmonieusement avec le site
        existant et améliorent la clarté visuelle. J'ai aussi veillé à la responsivité des templates d'emails. <strong>Bien
        que
        l'accessibilité au sens strict</strong> (conformité WCAG, etc.) <strong>ne soit pas explicitement
        détaillée</strong> au-delà du choix de
        police, <strong>le focus sur l'ergonomie et l'amélioration de l'expérience utilisateur est manifeste</strong>.

        <br><br>

        L'intégration des <strong>retours sur les maquettes a permis de résoudre des problèmes d'utilisabilité</strong>
        (par exemple, le
        flux d'ajout d'éléments). La mise en place de la fonction de copie ou des barres de recherche a rendu la
        navigation et l'interaction avec les données plus efficaces.

        <br><br>

        J'ai développé ma capacité à concevoir des interfaces utilisateur sur Figma et à tenir compte des retours
        de mes collègues en UX/UI. J'ai appris à intégrer des améliorations ergonomiques dans le code (CSS/SCSS, Twig).
        J'ai
        compris l'<strong>importance de la lisibilité </strong>(choix de police) et de la <strong>simplification des
        flux utilisateur</strong>.
      </p>
      <ul class="list-disc pl-6 pt-10 text-17-18-21-25 italic font-bold">
        <li>AC3 : Adopter de bonnes pratiques de conception et de programmation</li>
      </ul>
      <p class="text-14-15-16-20 font-normal not-italic text-justify mb-2 md:mb-6">
        Tout au long de mon stage, j'ai mis en pratique de nombreuses bonnes pratiques de conception et de
        programmation. Au niveau de la <strong>conception</strong>, j'ai <strong>travaillé sur le Modèle Logique de
        Données </strong>(MLD), en le
        refactorisant pour simplifier les relations ManyToMany en OneToMany/ManyToOne là où cela était plus pertinent
        pour l'application. J'ai également <strong>conçu l'architecture technique des rapports</strong>, en créant de
        nouvelles entités
        <strong>pour structurer les données de manière plus robuste qu'un simple champ texte riche</strong>.
        L'organisation du code a été
        une priorité, notamment en <strong>externalisant la logique métier des contrôleurs vers des services
        dédiés</strong>. La
        réutilisabilité a été visée avec la création de composants Twig génériques pour les barres de recherche, les
        fonctionnalités de copier-coller et autres.

        <br><br>

        Sur le plan de la programmation, j'ai adopté les normes du Framework Symfony que j'ai appris en formation et
        auprès de l'équipe. J'ai <strong>refactorisé l'intégralité des routages</strong> pour utiliser les annotations
        modernes
        #[Route()] (<strong>Figure 6</strong>). J'ai <strong>uniformisé l'indentation et les constructeurs</strong>
        dans les contrôleurs pour améliorer
        la maintenabilité du code. L'<strong>utilisation de la méthode path() au lieu d'URLs codées en dur</strong> dans
        les templates
        Twig est une autre bonne pratique adoptée pour faciliter la maintenance. J'ai documenté les points à améliorer
        ou les bugs restants avec des commentaires TODO. Pour le suivi des données, j'ai <strong>systématiquement ajouté
        les
        champs createdAt/By et updatedAt/By aux entités</strong>, permettant un meilleur audit et un tri fiable. La
        <strong>gestion des
          suppressions s'est faite de manière "virtuelle"</strong> en utilisant une colonne active, une pratique de
        l'entreprise
        pour conserver l'historique. J'ai également <strong>travaillé à sécuriser le stockage des fichiers téléchargés
        en les
        déplaçant du dossier public vers un dossier sécurisé (/inc)</strong>.

        <br><br>

        La refactorisation du MLD a simplifié la <strong>gestion des relations</strong>. L'externalisation de la logique
        et
        l'<strong>uniformisation du code</strong> ont grandement amélioré la maintenabilité de l'application. La
        <strong>sécurisation du stockage des fichiers</strong>
        a résolu une vulnérabilité potentielle.
        <br><br>
        J'ai approfondi ma connaissance de l'<strong>architecture Symfony</strong> (MVC, services) et des <strong>bonnes
        pratiques associées</strong>
        (routage, formulaire, ORM). J'ai appris des <strong>techniques de refactorisation</strong> (MLD, code). J'ai
        intégré des
        pratiques de programmation <strong>orientée maintenabilité</strong> (pas d'URLs en dur, commentaires TODO,
        champs de suivi) et de
        <strong>sécurité</strong> (stockage fichiers).
      </p>
      <ul class="list-disc pl-6 text-17-18-21-25 italic font-bold">
        <li>AC4 : Vérifier et valider la qualité de l’application par les tests</li>
      </ul>
      <p class="text-14-15-16-20 font-normal not-italic text-justify mb-2 md:mb-6">
        La vérification et la validation de la qualité ont fait <strong>partie intégrante de mon processus de
        travail</strong>. J'ai
        régulièrement vérifié mes installations et configurations d'environnement pour m'assurer que tout était à jour
        et fonctionnel. Lors de mon développement, <strong>j'ai rencontré et résolu divers bugs</strong>, comme un
        problème de
        compatibilité entre Doctrine et MariaDB <strong>nécessitant une migration vers MySQL</strong>, des <strong>erreurs
        de routage</strong>, des
        <strong>problèmes de style CSS/SCSS</strong>, des <strong>affichages incorrects</strong> (dates en anglais), ou
        des <strong>dysfonctionnements de champs</strong>
        (mot de passe sur Firefox). J'ai utilisé des <strong>techniques de débogage</strong> ("débuggeur", "echos",
        tests) pour
        identifier et corriger les problèmes. <strong>Jérôme VARINI m'a notamment montré comment utiliser
        xDebug</strong>.

        <br><br>

        La <strong>validation de mon travail a été réalisée par l'équipe</strong>. Mes maquettes Figma ont été validées
        par Jérôme,
        Emmanuel et Sonia. Mon avancement général a été revu lors de points réguliers avec Jérôme et Sonia, qui ont
        validé mon
        travail et apporté des retours. <strong>Avant le déploiement en production, j'ai effectué une dernière
        vérification
        complète de mon code des 6 dernières semaines pour identifier et corriger les erreurs potentielles</strong>
        (valeurs
        manquantes, champs requis, données inaccessibles). L'application du composant Validator de Symfony pour valider
        les données saisies dans les formulaires est une pratique de validation essentielle que j'ai mise en œuvre.
        Enfin, j'ai <strong>mis en place des mécanismes de validation utilisateur</strong>, comme la page de
        visualisation et les boutons
        de confirmation avant l'envoi d'un rapport. Identification et correction de nombreux bugs techniques et
        d'affichage. Assurer la validité des données saisies
        par l'utilisateur. <strong>Prévenir des erreurs critiques</strong> (envoi de rapport non souhaité).

        <br><br>

        J'ai appris à identifier et à <strong>résoudre des problèmes techniques</strong> (débogage, adaptation
        d'environnement). Je
        maîtrise l'utilisation d'<strong>outils de validation intégrés au framework</strong> (Validator). Je comprends
        l'importance des
        <strong>revues par les pairs</strong> (validation des maquettes, points d'avancement) et des <strong>vérifications
        finales</strong> avant
        déploiement.
      </p>
    </div>

    <!--Graphique-->
    <div>
      <div class="my-12">
        <CompetenceChartComponent
            title="Compétence 1 - Visualisation de mon évolution"
            :series="[95, 75, 98, 70]"
            :total="84.5"
            :completeLabels="[
                '•\tAC1 Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences',
                '•\tAC2 Appliquer des principes d’accessibilité et d’ergonomie',
                '•\tAC3 Adopter de bonnes pratiques de conception et de programmation',
                '•\tAC4 Vérifier et valider la qualité de l’application par les tests']"
            :labels="['AC1', 'AC2', 'AC3', 'AC4']"
            :colors="['#5A3E2B', '#a67c52', '#c0a980', '#e8d9c4']"
            width="300"
            height="300"
        />
      </div>
    </div>

    <!--Titre compétence-->
    <div
        class="relative group pt-12 mt-[200px] sm:pt-24 px-[8%] sm:px-[15%] font-normal text-espresso font-playfair text-justify text-14-15-18-22">
      <div class="relative z-10">
        <p>02 - 02</p>
        <h2 class="font-black italic text-espresso font-playfair text-left text-18-19-24-30">Compétence 4 – Gérer des
          données de l’information</h2>
        <p class="text-14-15-18-22">Mon stage chez Akolad Solutions m'a permis de mettre en pratique la compétence gérer
          des données de l’information,
          évaluée par les acquis suivants :
        </p>
      </div>
      <div
          class="absolute bottom-[15px] sm:bottom-[40px] md:bottom-[50px] lg:bottom-[50px] left-[27%] sm:left-[10%] lg:left-[12%] w-[75%] sm:w-[70%] md:w-[68%]
          lg:w-[65%] sm:h-[60%] lg:h-[55%] h-0 bg-linen opacity-100 origin-left scale-x-100 transition-transform
          duration-700 ease-in-out z-0"
      ></div>
    </div>

    <!--Défilement de figures-->
    <FigureSliderComponent
        :figures="[
    {
      src: 'figure1_Modele Logique-de-Donnees-MLD.png',
      alt: `Modèle Logique de Données (MLD)`,
      caption: `Figure 7 : Modèle Logique de Données (MLD)`,
    },
    {
      src: 'figure2_page-du-site.png',
      alt: `Extrait page résolution de ticket`,
      caption: `Figure 8 : Extrait page résolution de ticket (administrateur)`,
    },
    {
      src: 'figure5_securisation-route-ticket.png',
      alt: `Extrait de code de sécurisation de route`,
      caption: `Figure 9 : Extrait de code de sécurisation de route`,
    },
    {
      src: 'figure6_apercu-configuration-voter.png',
      alt: `Extrait de code pour la gestion des droits`,
      caption: `Figure 10 : Extrait de code pour la gestion des droits`,
    },
    {
      src: 'figure11_phpmyadmin-securisation.png',
      alt: `Extrait de phpMyAdmin pour les audits`,
      caption: `Figure 10 : Extrait de phpMyAdmin pour les audits`,
    },
    {
      src: 'figure4_apercu-fonctionnalites-twig.png',
      alt: `Extrait des fonctionnalités ajoutés par Twig`,
      caption: `Figure 12 : Extrait des fonctionnalités ajoutés par Twig`,
    },
    {
      src: 'figure7_page-client-raport.png',
      alt: `Extrait de page rapport (client)`,
      caption: `Figure 13 : Extrait de page rapport (client)`,
    },
    {
      src: 'figure9_page-administrateur-raport.png',
      alt: `Extrait de page rapport (administrateur)`,
      caption: `Figure 14 : Extrait de page rapport (administrateur)`,
    },
    {
      src: 'figure8_raport-format-pdf.png',
      alt: `Extrait d'un rapport au format PDF`,
      caption: `Figure 15 : Extrait d'un rapport au format PDF`,
    },
  ]"
    />

    <!--Texte-->
    <div class="px-[8%] sm:px-[15%] mt-12 md:mt-24">
      <ul class="list-disc pl-6 text-17-18-21-25 italic font-bold">
        <li>AC1 : Optimiser les modèles de données de l’entreprise</li>
      </ul>
      <p class="text-14-15-16-20 font-normal not-italic text-justify mb-2 md:mb-6">
        J'ai travaillé à partir d'un <strong>brouillon de Modèle Logique de Données (MLD)</strong> existant, je l'ai
        comparé avec l'équipe et j'ai réalisé un <strong>MLD complet</strong> intégrant les <strong>nouvelles entités
        nécessaires</strong> à la gestion des contrats de maintenance et tickets clients. Ce MLD a fait l'objet de
        <strong>revues et de modifications</strong> (<strong>Figure 7</strong>). J'ai créé ces nouvelles entités
        (ContractMaintenance, Report, Ticket, Resolution, ReportLine, ReportType, RecurrentLine) en
        utilisant <strong>Doctrine ORM</strong>.

        Un aspect clé a été la <strong>refactorisation des relations complexes (ManyToMany)</strong> vers des relations
        plus simples (OneToMany/ManyToOne) lorsque cela correspondait mieux aux cas d'utilisation
        finaux. J'ai également <strong>adapté la structure</strong> pour des besoins spécifiques, comme <strong>le
        passage de la gestion des pièces jointes d'une chaîne à un tableau</strong> dans la base de données. J'ai mis en
        place la <strong>suppression "virtuelle"</strong> via une colonne active dans les tables pour <strong>conserver
        l'historique</strong> des données.

        Pour <strong>améliorer la traçabilité</strong> et permettre un <strong>tri fiable</strong>, j'ai ajouté les
        champs createdAt/By et updatedAt/By aux entités (<strong>Figure 8</strong>).
        J'ai <strong>géré un problème de compatibilité</strong> entre Doctrine et MariaDB qui a nécessité une <strong>migration
        vers MySQL</strong>, impliquant l'adaptation de la base. J'ai également utilisé le <strong>composant
        Validator de Symfony</strong> pour assurer la validité des données saisies dans les formulaires
        avant leur stockage.

        <br><br>

        La <strong>formalisation itérative du MLD</strong> a assuré sa justesse pour les cas
        d'utilisation. La <strong>refactorisation des relations</strong> a simplifié la gestion des
        données. L’<strong>adaptation pour les pièces jointes</strong> a permis de stocker plusieurs
        fichiers de manière structurée. La <strong>migration de base</strong> a résolu un problème de
        compatibilité technique bloquant. L’<strong>ajout des champs de suivi</strong> a permis une meilleure
        traçabilité et un tri efficace. La <strong>suppression virtuelle</strong> a permis de
        <strong>conserver l'historique</strong>. La <strong>validation en amont</strong> a contribué à la <strong>qualité
        et cohérence</strong> des données.

        <br><br>

        J’ai <strong>renforcé ma capacité à modéliser des données</strong> en traduisant des <strong>besoins
        fonctionnels en structure MLD</strong> (entités Doctrine). J’ai appris à <strong>optimiser la structure</strong>
        en choisissant entre <strong>ManyToMany et OneToMany/ManyToOne</strong> selon les besoins réels. J’ai acquis de
        l’<strong>expérience avec Doctrine ORM</strong> pour <strong>gérer le cycle de vie des entités</strong>. J’ai
        intégré des <strong>pratiques de gestion historique</strong> (suppression virtuelle) et de
        <strong>traçabilité</strong> (champs createdAt/By, updatedAt/By). J’ai appris à utiliser des <strong>outils de
        validation (Validator)</strong> pour <strong>garantir la qualité des données</strong>.
      </p>

      <ul class="list-disc pl-6 pt-10 text-17-18-21-25 italic font-bold">
        <li>AC2 : Assurer la confidentialité des données (intégrité et sécurité)</li>
      </ul>
      <p class="text-14-15-16-20 font-normal not-italic text-justify mb-2 md:mb-6">
        J'ai mis en place la <strong>gestion des permissions d'accès</strong> (<strong>Figure 9</strong>) aux
        différentes ressources de l'application. J'ai utilisé un <strong>Voter Symfony</strong> pour définir des
        <strong>règles d'accès granulaires</strong> basées sur les rôles des utilisateurs (comme
        CAN_ACCESS, CAN_READ, CAN_EDIT, CAN_DO_ALL) (<strong>Figure 10</strong>). J'ai vérifié et
        configuré les <strong>droits spécifiques</strong> pour les profils utilisateurs et administrateurs.

        Cela a impliqué de <strong>filtrer l'affichage des données</strong> et de restreindre les actions (modification,
        suppression) sur divers modules (Projets, Contrats, Rapports, Tickets, Résolutions) en fonction du rôle de
        l'utilisateur connecté. Par exemple, j'ai configuré qu’un simple utilisateur pouvait <strong>télécharger un
        rapport</strong> alors qu’un administrateur pouvait en <strong>ajouter, supprimer ou modifier</strong>.

        La pratique de la <strong>suppression virtuelle</strong> via une colonne active (<strong>Figure 11</strong>)
        contribue à <strong>l'intégrité des données</strong> en empêchant les suppressions définitives non
        intentionnelles et en permettant l’audit. J'ai également <strong>sécurisé le stockage des fichiers
        téléchargés</strong> en les déplaçant du dossier public vers un <strong>dossier sécurisé</strong> (/inc) utilisé
        par l’entreprise pour les documents sensibles. J’ai mis à jour les chemins d’accès avec des <strong>variables
        globales</strong>.

        L’<strong>ajout systématique des champs createdAt/By et updatedAt/By</strong> est essentiel pour <strong>l’audit
        et la traçabilité</strong> des modifications (<strong>Figure 11</strong>). J’ai aussi mis en place des <strong>mécanismes
        de validation utilisateur</strong> sur les actions sensibles, comme une <strong>page de visualisation</strong>
        et des <strong>boutons de confirmation</strong> avant l’envoi d’un rapport par email via le composant <strong>Mailer
        de Symfony</strong>, afin d’<strong>éviter les erreurs</strong>.

        <br><br>

        J’ai assuré que <strong>l’accès aux données et fonctionnalités</strong> était strictement réservé aux
        utilisateurs autorisés, renforçant ainsi <strong>la sécurité et la confidentialité</strong>. J’ai corrigé une
        <strong>faille potentielle</strong> liée au <strong>stockage des fichiers</strong>. La <strong>suppression
        virtuelle</strong> et les <strong>champs de suivi</strong> ont amélioré <strong>l’intégrité et la
        traçabilité</strong>. Les <strong>validations utilisateur</strong> ont réduit le risque d’erreurs.

        <br><br>

        J’ai approfondi ma <strong>compréhension des enjeux de sécurité</strong> liés aux données et aux applications
        web. J’ai appris à <strong>utiliser les mécanismes de sécurité de Symfony</strong> (rôles, permissions, Voter).
        J’ai intégré des <strong>bonnes pratiques de sécurisation</strong> du stockage et de l’audit. J’ai compris
        l’intérêt de la <strong>suppression virtuelle</strong> pour la <strong>gestion et l’intégrité des
        données</strong>.
      </p>

      <ul class="list-disc pl-6 pt-10 text-17-18-21-25 italic font-bold">
        <li>AC3 : Organiser la restitution de données à travers la programmation et la visualisation</li>
      </ul>
      <p class="text-14-15-16-20 font-normal not-italic text-justify mb-2 md:mb-6">
        J'ai développé les <strong>vues Twig</strong> associées aux <strong>nouvelles entités</strong> pour afficher les
        données dans l'application. J’ai créé les <strong>interfaces pour les opérations CRUD</strong> (affichage,
        ajout, modification, suppression). J’ai amélioré la visualisation des données en ajoutant des <strong>barres de
        recherche dynamiques</strong> dans presque tous les modules, et une <strong>fonction de copie</strong> de champs
        vers le presse-papier (<strong>Figure 12</strong>).

        J’ai stylisé divers éléments comme les <strong>badges</strong> et les <strong>barres de défilement</strong> pour
        renforcer l’harmonie visuelle avec le site existant. J’ai rencontré un <strong>problème d’affichage de
        dates</strong> (en anglais) que j’ai corrigé par une <strong>traduction manuelle temporaire</strong>.

        J’ai travaillé sur la <strong>génération de rapports PDF</strong> à partir des données, en utilisant <strong>canvas2pdf</strong>
        pour convertir du HTML en PDF. Cela a nécessité <strong>l’adaptation du style</strong> en remplaçant les classes
        CSS par des styles inline pour assurer la compatibilité. J’ai mis en place une <strong>page de
        visualisation</strong> du rapport avant envoi avec <strong>boutons de validation</strong>.

        Les champs <strong>createdAt/By</strong> et <strong>updatedAt/By</strong> sont utilisés pour <strong>ordonnancer
        les données</strong> dans les tableaux, facilitant leur consultation. L’<strong>affichage et les
        actions</strong> sont <strong>filtrés selon les droits</strong> de l’utilisateur (<strong>Figure 13 &
        14</strong>).

        <br><br>

        J’ai <strong>optimisé l’accès et la manipulation</strong> des données grâce aux barres de recherche et à la
        copie. J’ai <strong>amélioré la lisibilité</strong> et l’<strong>intégration visuelle</strong>. J’ai <strong>résolu
        les défis techniques</strong> liés à la génération de PDF avec une mise en forme complexe. Les <strong>champs de
        suivi</strong> ont permis un <strong>tri fiable</strong> des données.

        <br><br>

        J’ai renforcé ma capacité à <strong>structurer et afficher des données</strong> dans des vues web. J’ai appris à
        <strong>implémenter des fonctionnalités ergonomiques</strong> (recherche, copie). J’ai acquis de l’<strong>expérience
        dans la génération de PDF</strong> à partir de données applicatives et dans la gestion des <strong>contraintes
        HTML/CSS</strong> spécifiques. J’ai compris l'importance de <strong>l’ordonnancement et de la
        traçabilité</strong> dans la restitution des données.
      </p>
      <ul class="list-disc pl-6 text-17-18-21-25 italic font-bold">
        <li>AC4 : Manipuler des données hétérogènes</li>
      </ul>
      <p class="text-14-15-16-20 font-normal not-italic text-justify mb-2 md:mb-6">
        J'ai manipulé des <strong>données provenant de la base</strong> via l'<strong>ORM Doctrine</strong>, les rendant
        disponibles dans l'application. J'ai géré les <strong>données saisies par l'utilisateur</strong> via les
        <strong>formulaires Symfony</strong>, en assurant leur validation, et en appliquant, dans certains cas, des
        <strong>transformations de données</strong> entre la base et l'affichage.

        J'ai travaillé avec des <strong>fichiers uploadés</strong> (pièces jointes), en gérant leur <strong>stockage
        sécurisé</strong> et leur affichage. Pour la <strong>génération de rapports</strong>, j'ai transformé des
        <strong>données structurées</strong> (entités ReportLine, Report) en HTML, puis en <strong>PDF via
        canvas2pdf</strong> (<strong>Figure 15</strong>), impliquant un passage entre <strong>plusieurs formats</strong>
        de représentation.

        J'ai également intégré des <strong>données de différents modules</strong> en créant des <strong>relations entre
        entités</strong> (Projet, User, Ticket, Contrat, Rapport), manipulant ainsi des données provenant de <strong>sources
        logiques distinctes</strong> au sein de l'application.

        <br><br>

        J'ai assuré l’<strong>intégration et la validation</strong> des données utilisateur. J’ai mis en place un
        <strong>stockage sécurisé des fichiers</strong>. J’ai converti des <strong>données applicatives en rapports
        PDF</strong>. J’ai structuré les <strong>liens entre les différentes catégories de données</strong>.

        <br><br>

        J’ai développé ma capacité à <strong>interagir avec une base de données via un ORM</strong>. J’ai appris à
        <strong>gérer et valider les données issues de formulaires</strong>. J’ai acquis de l’<strong>expérience dans la
        manipulation et la transformation</strong> de différents types de données (textes, nombres, tableaux, fichiers)
        pour des besoins d'affichage ou de génération documentaire. J’ai compris comment <strong>connecter logiquement
        des modules applicatifs</strong> via les relations entre entités.
      </p>
    </div>

    <!--Graphique-->
    <div>
      <div class="my-12">
        <CompetenceChartComponent
            title="Compétence 4 - Visualisation de mon évolution"
            :series="[85, 98, 95, 85]"
            :total="90.5"
            :completeLabels="[
                '•\tAC1 Optimiser les modèles de données de l’entreprise',
                '•\tAC2 Assurer la confidentialité des données (intégrité et sécurité)',
                '•\tAC3 Organiser la restitution de données à travers la programmation et la visualisation',
                '•\tAC4 Manipuler des données hétérogènes']"
            :labels="['AC1', 'AC2', 'AC3', 'AC4']"
            :colors="['#5A3E2B', '#a67c52', '#c0a980', '#e8d9c4']"
            width="300"
            height="300"
        />
      </div>
    </div>

  </section>

  <div class="h-14"></div>

</template>

<script>
import FeatureCardComponent from "@/components/cards/FeatureCardComponent.vue";
import FigureSliderComponent from "@/components/animations/FigureSliderComponent.vue";
import ScrollFadeInComponent from "@/components/animations/ScrollFadeInComponent.vue";
import VueApexCharts from "vue3-apexcharts";
import CompetenceChartComponent from "@/components/charts/CompetenceChartComponent.vue";
import {useHead} from '@vueuse/head'

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
          content: 'portfolio, stage, informatique, développement, Akolad Solutions, Symfony, Vue.js'
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
          content: 'https://marvynlevin.fr'
        },
        {
          property: 'og:image',
          content: 'https://marvynlevin.fr/src/assets/img/me.png'
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
          content: 'https://marvynlevin.fr/src/assets/img/me.png'
        }
      ]
    })
  },
  components: {
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

