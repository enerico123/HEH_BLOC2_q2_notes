# Chapitre 10 : Sécurité de couche 2 

## En Général 

La couche 2 n'est pas sécurisé 

problème -> attaques faciles 

## Attaques courantes : 

- Attaque de la table de commutation : MAC flooding 

problème -> Table CAM du switch overflow (place saturée) -> diffuse tout le traffic 

Solution -> port security 

## Port Security 

permet de limiter le nombre de MAC autorisées par port 

problème -> 

- MAC autorisée peut rester a l'infini 

- Un periphérique déplacé ou retiré garde son entrée attribué 

Solution -> Port Security Aging 

## Port Security Aging 

permet de supprimer automatiquement les mac apres un certain temps 

- modes : 
    - absolute : suppression apres X minutes 
    - inactivity : suppression apres X minutes sans traffic 

-> Problème : Aucune tracabilité pour voir les attaques etc..

-> Solution : Notification SNMP 

## Notification SNMP 

permet au switch d'envoyer des "traps SNMP" lorsque une MAC est ajoutée/supprimée 

--- 

problème -> 

Si il y a un problème, comme une attaque, le port se met en err-disable (erreur il se désactive)

Mais problème il ne se réactive pas automatiquement il faut le réactiver manuellement 

Solution -> Errdisable Recovery 

## Errdisable Recovery 

réactive automatiquement le port apres délai/cause 

--- 

Problème -> Vlan Hopping (accès a d'autres VLan)

Attaque 1 : Switch Spoofing 

Solution : Désactiver DTP et forcer port utilisateur en mode access 

Attaque 2 : Double tagging 

Solution : Rien connecter au VLAN 1, changer de port natif

--- 
completer suite avec chatgpt plus tard !!!! 

--- 

## VTP : propage les VLAN entre les switch 

mais quand meme devoir configurer quel port est associé à quel vlan  

et autre problème mauvaise config vlan peut écraser les autres configurations des bonnes configuration dans le réseau 

comment fonctionne VTP : 
- objectif automatiser, 
- fonctionne avec un numéro de révision, 
- si on ne configure pas VTP et qu'un switch VTP veut propager sa config VTP va s'activer automatiquement -> c'est un problème
- mode transparent : forward les requetes VTP mais ne change pas sa config 



Solution -> Loop guard -> détecter et casser boucles 

