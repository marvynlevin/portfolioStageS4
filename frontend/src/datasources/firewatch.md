---
subTitle: "Projets > FireWatch > Détails du projet"
title: "FireWatch"
image: "/banniere-firewatch.png"
shareInfo: "Projet Universitaire : FireWatch"
meta:
  - name: description
    content: "FireWatch : application full-stack et mobile pour prévenir et détecter les feux de forêt grâce à un réseau de capteurs, IA et plateforme web centralisée."
  - name: keywords
    content: "FireWatch, projet universitaire, développement web, full-stack, application mobile, IA, prévention incendies, Vue.js, Flutter, Node.js"
---
<TitleComponent
align="text-center"
text="Introduction"
/>

Avec mon équipe, nous avons développé FireWatch, une application full-stack et mobile conçue pour prévenir et détecter
les feux de forêt grâce à un réseau de capteurs, à l’analyse d’images par IA et à une plateforme de supervision
centralisée. Nous voulions construire un outil réellement utile pour les pompiers, les gestionnaires forestiers et
l’ensemble des acteurs présents sur le terrain. Notre objectif principal était de réduire au maximum le délai entre les
premiers signaux d’un départ de feu et la transmission de l’alerte, tout en offrant une vision claire et contextualisée
de la situation.

<TitleComponent
align="text-center"
text="Deux sources de données clés"
/>

Dès le début, nous avons défini le cadre applicatif : FireWatch devait être une véritable solution d’aide à la décision.
Pour y parvenir, nous avons articulé tout le système autour de deux grands flux de données. 

<br>

Le premier concerne les
mesures environnementales issues de microcontrôleurs équipés de capteurs (application web). Ils collectent en continu la
température, l’humidité, le CO₂ et la luminosité, puis envoient ces données vers le serveur central. Un algorithme dédié
calcule alors un Indice de Risque (IDR), ce qui permet d’anticiper les zones sensibles avant même qu’un feu
n’apparaisse.   

<br>
  
Le second flux porte sur les données médiatiques : photos et images capturées par téléphones (application
mobile), caméras ou drones simulés, analysées par IA pour confirmer ou non la présence de flammes ou de fumée. Les deux
applications étaient ainsi capable à la fois de prévoir et de détecter.

<TitleComponent
align="text-center"
text="Application mobile citoyenne"
/>

Pour renforcer l’efficacité de la détection, nous avons donc conçu une application mobile sous Flutter. Elle permet aux
citoyens, randonneurs ou habitants d’envoyer rapidement un signalement géolocalisé, accompagné d’une photo.

<ImageComponent
src="/figure10-maquette-mobile-firewatch.png"
alt="Illustration des maquettes de l'application mobile FireWatch"
caption="Figure 1 : Illustration de la maquette de l'application mobile FireWatch"
/>

Cette image
est immédiatement transmise au serveur d’analyse média, où notre modèle IA examine la présence de fumée ou de flammes.
Si un feu est identifié, l’alerte est automatiquement créée et affichée sur le tableau de bord web. Ce double système (
capteurs + participation citoyenne) améliore considérablement la réactivité.

<TitleComponent
align="text-center"
text="Plateforme web de supervision"
/>

La plateforme de supervision web constitue quant à elle le centre nerveux du système.Nous avons intégré une carte
interactive avec Leaflet pour afficher en temps réel les capteurs, les alertes confirmées, les zones à risque et les
niveaux d’IDR.

<ImageComponent
src="/figure12-carte-interactive-firewatch.png"
alt="Illustration de la carte interactive de FireWatch"
caption="Figure 2 : Illustration de la carte interactive de FireWatch"
/>

Les utilisateurs peuvent consulter l’historique des événements, visualiser l’évolution des données
environnementales grâce à des graphiques générés avec Chart.js, et suivre les séries temporelles de chaque capteur pour
repérer des anomalies ou des évolutions critiques. 

<ImageComponent
src="/figure11-app-web-feux.png"
alt="Illustration de la page centrale avec les indications sur les feux de forêt"
caption="Figure 3 : Illustration de la page centrale avec les indications sur les feux de forêt"
/>

Une attention particulière a été portée à l’ergonomie : nous avons
voulu une interface capable d’être utilisée en condition opérationnelle, par exemple dans un centre de coordination de
pompiers.


<TitleComponent
align="text-center"
text="Architecture technique globale"
/>

Sur le plan architectural, nous avons structuré FireWatch en plusieurs services indépendants mais parfaitement
orchestrés.

<ImageComponent
src="/figure13-schema-archi-firewatch.png"
alt="Schéma illustratif de l'architecture employée pour le projet FireWatch"
caption="Figure 4 : Schéma illustratif de l'architecture employée pour le projet FireWatch"
/>

Le serveur central, développé en Java, gère les connexions TCP avec les microcontrôleurs. Ce choix nous
permettait de supporter plusieurs flux simultanés tout en garantissant une haute fiabilité. Pour l’API REST, nous avons
opté pour Node.js et Express.js, avec un accès sécurisé à MongoDB via Mongoose. De nombreux tests unitaires et
d’intégration ont été réalisés avec GitLab afin d’assurer la solidité du système. Les interactions en temps réel,
notamment l’envoi d’images depuis les citoyens, sont gérées via un serveur WebSocket, toujours en Node.js, construit
avec la librairie ws pour garantir une transmission rapide et résistante aux coupures.

<TitleComponent
align="text-center"
text="Microcontrôleurs et capteurs"
/>

La partie matérielle du projet reposait sur des microcontrôleurs ESP32 programmés en C++ avec le framework Arduino.

<ImageComponent
src="/figure15-microcontrolleurs-firewatch.png"
alt="Photographie de la planche ESP32 comprenant les différents capteurs"
caption="Figure 5 : Photographie de la planche ESP32 comprenant les différents capteurs"
/>

Nous y avons connecté des capteurs DHT22 et SCD41 afin d’obtenir des mesures précises et suffisamment fréquentes pour
alimenter notre système d’analyse. L’ensemble peut fonctionner sur batterie et communiquer via Wi-Fi, ce qui rend
l’installation flexible dans des zones forestières.

<TitleComponent
align="text-center"
text="Détection IA des incendies"
/>

L’IA constituait un volet clé du projet. Nous avons développé en Python les scripts d’analyse, orchestrés par notre API
Node.js. 

<ImageComponent
src="/figure16-ia-firewatch.png"
alt="Scripts Python d'analyses de feux de forêts"
caption="Figure 6 : Scripts Python d'analyses de feux de forêts"
/>

L’objectif était de détecter rapidement la fumée ou les flammes dans les images reçues. Le serveur web
affichait ensuite les images analysées, accompagnées des encadrés de détection pour permettre une validation visuelle
par l’opérateur. Cette confirmation humaine, soutenue par l’IA, était essentielle pour éviter les faux positifs.

<TitleComponent
align="text-center"
text="Cohérence visuelle & expérience utilisateur"
/>

Enfin, nous avons porté un soin particulier à la cohérence visuelle et technique de l’ensemble. Le front-end de la
plateforme web a été développé avec Vue.js et une interface Material 3, afin d’assurer une expérience claire et
homogène, complémentaire de l’application mobile.

<ImageComponent
src="/figure14-material-3.png"
alt="Illustration de Material 3"
caption="Figure 7 : Illustration de Material 3"
/>

<TitleComponent
align="text-center"
text="Conclusion"
/>

Au final, FireWatch nous a permis de couvrir un cycle complet : captation de données sur le terrain, analyse
intelligente, centralisation, visualisation, alertes et intervention. C’est un projet dont nous sommes particulièrement
fiers car il mobilise toutes les dimensions d'une architecture moderne (hardware, backend, IA, cartographie, API, mobile
et web).

<ImageComponent
src="/figure17-gitlab-firewatch.png"
alt="Illustration de la page GitLab avec tous les services de l'application"
caption="Figure 8 : Illustration de la page GitLab avec tous les services de l'application"
/>