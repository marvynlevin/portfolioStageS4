---
subTitle: "Blogs > Agriculture Intelligente > Détails du blog"
title: "Agriculture Intelligente"
image: "/banniere-agriculture-intelligente.png"
shareInfo: "BLog Perosnnel : Agriculture Intelligente"
---


<TitleComponent
align="text-center"
text="Introduction"
/>

L'agriculture moderne est confrontée à des défis majeurs, notamment l'accélération du réchauffement climatique,
l'intensification des aléas météorologiques, et la dégradation des milieux naturels tels que les sols, l'eau et l'air.
Face à ces enjeux, et aux défis liés à la sobriété énergétique et à l'empreinte carbone, la robotique et les sciences du
numérique sont devenues des piliers essentiels pour la transition agroécologique, visant à associer le triptyque «
Agroéquipement, Agronomie, Écologie ».    

<br>

L'essor de la robotique agricole a révélé le potentiel de réaliser une production agricole autonome, en intégrant la
robotique avancée, des capteurs, l'intelligence artificielle (IA) et l'analyse de données pour offrir une observation
précise, une prise de décision indépendante, un contrôle intelligent et une exécution automatisée.

<ImageComponent
src="/figure27-schema-agriculture.png"
alt="Schéma représentants les différentes étapes dans l'agriculture"
caption="Figure 1 : Schéma représentants les différentes étapes dans l'agriculture"
:shadow="false"
/>

<TitleComponent
align="text-center"
text="Robotique mobile pour une agriculture durable"
/>

Le développement des robots mobiles agricoles connaît une effervescence significative, notamment en Europe, aux
États-Unis, au Japon et en Chine. Au-delà des enjeux économiques colossaux (le marché mondial pourrait dépasser 140
milliards d'euros dans les dix prochaines années), les avantages incluent l'amélioration de la qualité du travail, la
sécurité des opérateurs (l'agriculture étant un secteur dangereux) et le développement de pratiques plus écologiques.

<br>

Les petits robots, de taille et poids réduits, sont privilégiés pour limiter la compaction des sols et permettre des
interventions durant la période agronomique optimale. Ils sont également plus maniables dans les petits parcellaires,
comme les cultures maraîchères. La coopération de plusieurs de ces robots en convoi est une stratégie pour compenser
leur faible productivité individuelle.

<br>

Les tâches ciblées par ces machines comprennent :  
• le contrôle de la croissance des cultures ;  
• le désherbage par binage mécanique (en viticulture et arboriculture) ;  
• les opérations de traitements phytosanitaires, permettant de ne plus exposer l'opérateur.

<br>

En remplaçant les machines lourdes, les robots légers, souvent électriques, aident à réduire la compaction du sol, un
problème clé lié aux rendements et aux émissions de gaz à effet de serre (GES).

<TitleComponent
align="text-center"
text="Précision et autonomie : les technologies de navigation"
/>

Pour réaliser des opérations de précision dans des environnements de plein champ souvent semi-structurés ou non
structurés, une haute exactitude de positionnement (erreurs de quelques centimètres) est indispensable.

<ImageComponent
src="/figure28-robots-agriculture.png"
alt="Illustration des technologies de navigation employées par les robots"
caption="Figure 2 : Illustration des technologies de navigation employées par les robots"
:shadow="false"
/>

<br>

Le positionnement de précision repose fortement sur les systèmes de navigation par satellite (GNSS). L'utilisation du
GNSS permet :  
• l'application de produits phytosanitaires et d'engrais à taux variable (VRA), en localisant la machine avec
précision ;  
• la réduction de l'utilisation de produits chimiques et l'économie de coûts ;  
• la réalisation du désherbage mécanique en reconstruisant la carte du semis avec une exactitude de 2 cm.

<br>

Le cadre de la mobilité accrue exige de nouvelles approches de contrôle/commande qui vont au-delà de l'hypothèse
classique de roulement pur sans glissement, souvent inapplicable sur des sols meubles ou glissants. Des approches ont
été développées pour intégrer explicitement le glissement (ou angles de dérive) dans les lois de commande, assurant
ainsi un suivi précis des trajectoires planifiées.

<br>

Une problématique spécifique aux robots terrestres agricoles est la couverture complète de parcelles de formes variées.
L'objectif de la couverture de zone est de générer des trajectoires d'allers-retours minimisant le recouvrement des
zones et le temps consacré aux manœuvres de demi-tour en bout de parcelle (fourrière).
Un exemple de planification utilise des arcs de clothoïdes pour assurer la continuité de courbure entre les segments de
droite et les arcs de cercle, permettant des changements d'orientation pour le véhicule.

<br>

Les drones sont en plein essor pour la surveillance des cultures (détection de maladies, estimation de biomasse) et la
pulvérisation localisée. Cependant, pour confier aux drones des tâches plus évoluées (manipulation aérienne, collecte
interactive de données), une autonomie décisionnelle accrue est requise.

<TitleComponent
align="text-center"
text="Capteurs connectés et Intelligence Artificielle (IA)"
/>

Les robots de terrain simulent les capacités de perception, de prise de décision, d'opération, d'apprentissage et d'
interaction humaines grâce à l'intégration de technologies clés.
L'IA fournit aux robots des capacités d'apprentissage et de prise de décision intelligentes. Ces systèmes
convertissent les données agricoles structurées et non structurées (météo, croissance des plantes, sol) en
connaissances pour produire des décisions intelligentes, qui commandent ensuite les actionneurs.

<br>

L'IA a réalisé des percées significatives, notamment pour l'amélioration de l'auto-navigation et de l'identification des
cultures. À l'avenir, l'IA évoluera du niveau perceptuel au niveau cognitif, permettant aux robots d'avoir des capacités
cognitives de haut niveau similaires à celles des humains pour comprendre et s'adapter aux environnements complexes.
D'après les travaux de recherche, l'utilisation des techniques d'IA est la plus fréquente pour la planification de
trajectoire (près de 32 % des travaux) et la surveillance (31 %).

<br>

L'acquisition d'informations est essentielle. La technologie de détection intelligente agit comme les yeux du robot, le
guidant par la collecte de données environnementales. L'usage de capteurs communicants en bordure des parcelles est
croissant. De même, l'usage de la perception 3D de la
végétation proche, par exemple via la déviation de faisceaux lasers d'un LiDAR 2D, a été étudiée pour contrôler les
outils embarqués.

<br>

Les réseaux de capteurs sans fil souterrains (WUSN) relèvent d’un paradigme récent qui vise à mesurer l'humidité du sol
en profondeur. L'enfouissement protège les nœuds des impacts des véhicules et des dommages climatiques. Le lien UG2AG (
Underground to Aboveground) est jugé pertinent, avec des portées atteintes de 100 à 200 m dans des sols secs à 433 MHz,
pour des profondeurs de 15 à 30 cm.

<br>

Pour les grandes parcelles, l'utilisation d'un robot ou d'un drone comme collecteur mobile en surface est plus adaptée
et rentable que la multiplication d'infrastructures statiques (mâts). Des travaux expérimentaux ont démontré la
possibilité de récupérer des données de capteurs enterrés (à 15 cm) par drone en vol dynamique. Ces résultats ouvrent
des perspectives sur l'autonomie décisionnelle du drone qui devra ajuster sa vitesse et son positionnement en temps réel
en fonction de la qualité du signal reçu (RSSI).

<TitleComponent
align="text-center"
text="Applications clés de la robotique de terrain"
/>

Les robots de terrain sont largement utilisés dans diverses applications agricoles. Ils peuvent être classés selon
les opérations qu'ils effectuent:  
• <strong>désherbage</strong> : Les robots identifient et éliminent les mauvaises herbes de manière indépendante pour
réduire ou éviter
l'usage de produits chimiques. Le robot Dino de Naïo est un exemple, capable de désherber entre les rangs et entre
les plants grâce à l'IA ;

• <strong>récolte</strong> : Les robots effectuent des tâches complexes et délicates. Un système robotique basé sur l'IA
a montré une
grande efficacité (83,33 % de succès sur fruits réels) pour la récolte des agrumes, assurant une préhension adaptative
et un détachement précis ;

• <strong>surveillance</strong> : Cruciale pour le contrôle des maladies et des ravageurs. Les robots de surveillance
recueillent des
données pour déterminer l'état des sols ou détecter les adventices (scouting), par satellite, drone ou proxidétection au
niveau du sol ;

• <strong>labourage-semis</strong> : Les robots peuvent remplacer les tracteurs traditionnels conduits par l'homme, en
utilisant des
technologies d'auto-navigation et d'IA pour assurer la cohérence dans le labourage et le semis sur de grandes surfaces ;

• <strong>élevage</strong> : La robotique est la "star" pour certaines activités, comme la traite quotidienne des
vaches, où les robots de
traite assurent une opération autonome depuis les années 1990 (estimé à 10% des exploitations laitières françaises en
2019). D'autres robots gèrent l'alimentation (DAC, repousse-fourrages) et le raclage des déjections.

<ImageComponent
src="/figure29-desherbage-agriculture.png"
alt="Illustration d'un robot en train d'effectuer un désherbage"
caption="Figure 3 : Illustration d'un robot en train d'effectuer un désherbage"
:shadow="false"
/>

<TitleComponent
align="text-center"
text="Défis et perspectives d'avenir"
/>

Malgré les avancées, de nombreux défis subsistent, notamment le prix élevé des robots qui les rend inabordables pour
les agriculteurs ordinaires, entravant leur popularisation. De plus, les robots doivent fonctionner dans des
situations agricoles complexes et hostiles pendant une période prolongée, nécessitant une grande endurance et
stabilité.
L'avenir de l'agriculture intelligente repose sur plusieurs axes d'innovation :  
• <strong>opération coopérative</strong> (Essaims de robots hétérogènes) : Pour les grandes fermes intelligentes,
l'utilisation d'
essaims de robots hétérogènes (HFRS) permettra de surmonter les limites du fonctionnement en point unique et
d'augmenter l'efficacité globale via une coopération collaborative, essentielle pour l'allocation des tâches, la
couverture complète de la zone et l'évitement des collisions ;

• <strong>technologies de communication 5G</strong> : L'intégration de la 5G (Mobile de 5e Génération) est cruciale, car
elle offre une
vitesse élevée, une faible latence et un grand débit, constituant l'infrastructure réseau nécessaire pour l'
interconnexion homme-machine-objet-environnement et pour le traitement en temps réel des données agricoles massives ;

• <strong>énergie et durabilité</strong> : L'adoption de l'électrification et l'intégration de sources d'énergie
renouvelables (solaire,
éolien) dans les robots de terrain sont essentielles pour optimiser l'utilisation de l'énergie, minimiser le
gaspillage et réduire les émissions, contribuant ainsi aux objectifs de neutralité carbone agricole ;

• <strong>formation et adaptation</strong> : Les agriculteurs doivent acquérir de nouvelles compétences pour gérer ces
systèmes
numériques et robotiques. Pour tirer pleinement parti des robots, le système de production lui-même (espacement des
rangs, aménagement des cultures) doit s'adapter aux paramètres opérationnels du robot.

<TitleComponent
align="text-center"
text="Conclusion"
/>

La robotique agricole est une réponse directe à la perte de main-d'œuvre et à la pénibilité des tâches (le travail
agricole étant souvent décrit comme "pénible, sale, dangereux et délicat" ou "4D"). Elle est porteuse de grandes
promesses pour l'amélioration de la production et de la durabilité, notamment par la réduction des intrants et
l'atténuation du compactage du sol.

<br>

L’adoption de l’agriculture de précision et des solutions robotiques permet d’intensifier la production durable,
d’optimiser l’utilisation des ressources et de gérer durablement les ressources naturelles. L'introduction de ces
technologies contribue concrètement à la réalisation de plusieurs des Objectifs de Développement Durable (ODD) des
Nations Unies, notamment l'amélioration des moyens d'existence, la souveraineté alimentaire, la création d'emplois
innovants et la gestion durable des ressources.

<br>

En conclusion, l'impact sociétal et environnemental de l'Agriculture 4.0 est significatif, rendant les activités
agricoles plus attractives pour la jeune génération et offrant des opportunités d'entrepreneuriat dans le domaine
technique en milieu rural.

<ImageComponent
src="/figure30-infographie-agriculture.png"
alt="Photographie réalisée par Marvyn LEVIN - Cédric COLIN - Nourath AFFO"
caption="Figure 4 : Photographie réalisée par Marvyn LEVIN - Cédric COLIN - Nourath AFFO"
/>

<ButtonLinkComponent
url="/files/Marvyn_LEVIN_infographieAgricultureIntelligente.pdf"
text="Télécharger l’infographie"
icon="bi-save"
/>