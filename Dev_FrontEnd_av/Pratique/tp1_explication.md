# Explication Git/ Github 

On peut déployer / mettre en production le projet 

dossier .git on va configurer les éléments 
quels fichiers doit se retrouver ou non dans le git 

## Systeme de stockage 

clé lié à un commit 

clé => valeur -> stocké dans un db 

## Commandes 

blop : binaire 

git cat-file -p numero_hash -> afficher  

man git -> informations 

git commit 

git merge 

## Fonctionnement interne

commit a des informations 

ne pas faire de commit orphelin car supprimé par le garbage collector apres 30 jours 

## Systeme de référence 

pointeur interne qui nous positionne dans l'arborescence git 

devient orphelin quand il n'a nis le head nis la branche 

## 3 Zones 

### Working directory 

Fichiers en cours (untracked) non suivi 

pas intégré au commit 

### Index 

git add ajoute des fichiers à l'index 


### History 

git commit -m "" -> copie l'index dans un commit 

-m "" -> permet d'ajouter un commentaire 


--- 

git diff -> différence entre deux fichier modifié 

git diff --cache -> différence fichier non modifié 


## convetion de nommages 

3 chiffres 

changement_majeur.changement_mineur.patch 

## Branches 

git branch nom_branch
git chekout nom_branch 

