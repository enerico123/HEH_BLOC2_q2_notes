# Suite Chapitre 5 

## config STP 

- this brige is root 
- la priorité 
- le role 
- état
- cout 
- identifiant (id.priorité)
- status learning, protocol pas terminé 

## Conception STP 

- pas laisser le STP automatiquement choisir le root bridge 
- limiter le nbr de ports bloqués (éxiter de faire des boucles dans la topologie)
> question examen : optimiser un réseau fait par STP automatiquement et dire quel switch serait le meilleur root bridge 

## Commutateur multi couche (L3)

- Plus besoin de STP 
- Mais interessant de conserver STP même sans bloucles au cas ou 
- toujours éviter d'utiliser un seul vlan par réseau

résumé : 

redondance -> chemin de secours -> boucle de couche 2 -> tempête de diffusion 

# CHAPITRE 6 - Redondance de premier saut 

- problème : chemin physique disponible mais lien logique non 

- solution : protocoles qui fait en sorte que 2 routeurs physique deviennent un routeur logique virutuel (adresses ip virtuelle)

## Protocoles 

- HSRP
    - Actif/Veille
    - protocole cisco 
- GLBP 
    - load balancing : faire de la répartition de trafic 


Rappel > GARP : broadcast qui dit ca c'est mon mac et ca c'est mon ip met la dans ta table

GARP utile dans HSRP quand routeur down -> GARP : maj a tous les switch du MAC  

-----

On peut faire des groupes logiques par exemples faire deux groupes logique de 3 routeurs physique 

Il peut y avoir qu'un actif par groupe logique 

 - choix routeur actif : 
    1. priorité + élevée
    2. si priorité égal -> étape 3  
    3. ip plus élevée 


## Interface Tracking 

- problème HSRP ne détecte pas les liens down 

- solution : Interface Tracking -> détecte les liens down ET adapte la priorité en fonction 

## Preemption 

- problème : routeur actif reste actif même si un autre a une priorité plus élevée 

- solution : preemption permet au routeur avec la plus grande priorité de devenir actif 

## Preemption Delay 

- problème : routeur devient actif trop vite sans que ca table de routage soit completement mis a jour 

- solution : délai de préemption permet de laisser le temps le routeur de compléter ses tables de routages avant qu'il devienne actif 


Commandes pour setup tout ca :
![alt text](images_notes/image.png)

