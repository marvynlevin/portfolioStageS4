<template>
  <form
      action="https://formspree.io/f/xyzqyvel"
      method="POST"
      class="text-espresso pt-12 sm:pt-24 px-[8%] sm:px-[15%] rounded-xl space-y-3 md:space-y-6"
  >

    <h2 class="text-18-19-24-30 font-playfair font-black">
      Formulaire de contact
    </h2>

    <!-- Ligne prénom + nom -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">

      <!-- Prénom -->
      <div class="flex flex-col">
        <label class="font-semibold text-17-18-21-25 text-espresso mb-1">Prénom</label>
        <input
            type="text"
            name="prenom"
            required
            placeholder="Entrez votre prénom"
            class="px-4 py-2 text-14-15-18-22 rounded-lg placeholder-blush bg-transparent border border-espresso/30 focus:border-espresso/60 outline-none"
        >
      </div>

      <!-- Nom -->
      <div class="flex flex-col">
        <label class="font-semibold text-17-18-21-25 text-espresso mb-1">Nom</label>
        <input
            type="text"
            name="nom"
            required
            placeholder="Entrez votre nom"
            class="px-4 py-2 text-14-15-18-22 rounded-lg placeholder-blush bg-transparent border border-espresso/30 focus:border-espresso/60 outline-none"
        >
      </div>

    </div>

    <!-- Ligne email + téléphone -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">

      <!-- Email -->
      <div class="flex flex-col">
        <label class="font-semibold text-17-18-21-25 text-espresso mb-1">Adresse email</label>
        <input
            type="email"
            name="email"
            required
            placeholder="nom.prenom@exemple.com"
            class="px-4 py-2 text-14-15-18-22 rounded-lg placeholder-blush bg-transparent border border-espresso/30 focus:border-espresso/60 outline-none"
        >
      </div>

      <!-- Téléphone -->
      <div class="flex flex-col">
        <label class="font-semibold text-17-18-21-25 text-espresso mb-1">Numéro de téléphone</label>
        <input
            type="tel"
            name="telephone"
            placeholder="06 00 00 00 00"
            class="px-4 py-2 text-14-15-18-22 rounded-lg placeholder-blush bg-transparent border border-espresso/30 focus:border-espresso/60 outline-none"
        >
      </div>

    </div>

    <!-- Description -->
    <div class="flex flex-col">
      <label class="font-semibold text-17-18-21-25 text-espresso mb-1">Description de la demande</label>
      <textarea
          name="message"
          required
          rows="5"
          placeholder="Je vous envoie un message pour parler de ..."
          class="px-4 py-3 text-14-15-18-22 rounded-lg placeholder-blush bg-transparent border border-espresso/30 focus:border-espresso/60 outline-none resize-none"
      ></textarea>
    </div>

    <!-- Conditions -->
    <label class="flex items-center gap-2 text-sm cursor-pointer">
      <input
          type="checkbox"
          name="conditions"
          required
          class="w-5 h-5 rounded-full border border-espresso/30 bg-transparent cursor-pointer
           appearance-none checked:bg-espresso transition-colors duration-200
           focus:ring-2 focus:ring-espresso outline-none"
      >
      <span class="text-14-15-16-20">
    * En cochant cette case, j'accepte les conditions particulières ci-dessous
  </span>
    </label>

    <!-- Bouton -->
    <button
        type="submit"
        class="btn-espresso hover:bg-noise cursor-pointer"
    >
      <i class="bi bi-check2-circle text-17-18-21-25"></i>
      <p class="text-12-13-16-20">Envoyer le formulaire</p>
    </button>

    <!-- Conditions -->
    <p class="text-12-13-16-20 text-justify  text-espresso/60 leading-relaxed pt-2">
      * Conditions : Vos données personnelles sont utilisées pour vous contacter.
      Vous pouvez accéder, rectifier, supprimer vos données, ou vous opposer à leur
      traitement en écrivant à Marvyn LEVIN, au 8 bis Rue de Dampierre, 25460 Étupes,
      ou à marvyn.levin25460@gmail.com, avec un justificatif d’identité. Elles sont
      conservées le temps nécessaire et selon la durée légale.
    </p>

  </form>
</template>

<script>
export default {
  name: "FormContactComponent",
  data() {
    return {
      form: {
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        message: '',
        conditions: false
      }
    }
  }
}
</script>