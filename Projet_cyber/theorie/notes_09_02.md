# CHAPITRE 2

## Intro à l'UTM FortiGate (FortiOS 7.6)

Fortigate : sert a la visibilité globale du réseau ?
Rôle : sécuriser ce qui peut entrer et sortir 
## Configuration par défaut 

- Adresse ip 192.168.1.99/24
- ... 

## Moyen d'Administration du Fortigate 

- Connexion console CLI 
- admin CLI ou GUI 
- FortiManager (centralisation pour grande entreprise)
- API 

## Types de comptes 
- Local user 
- Remote (AD / LDAP)
- PKI (certificat numérique)
- possibilité de restriction de permission 
- possibilité de A2F par SMS ou autre 

## Admin profile (projet)
- profils administrateur
- super-admin : root 
- prof-admin : droit sur un seul parefeu parmis plusieurs dans plusieurs VDOM   (inter-vdom link : lien virtuel a l'interieur de ton parefeu virtuel)
- profils custom 

## Option de profil 

...

## Configuration d'une interface (projet)

- Administratif access : gérer comment se connecter au parefeu (HTTPS, SSH)



> Rappel : 
>
>CDP : cisco discovery protocol 
>
>LLDP : pareil mais pas propriétaire cisco

## Interface VLAN 

> Rappel : Besoin de faire des sub-interface dans le routeur pour avoir plusieurs GateWay virtuelle et permettre à plusieurs VLAN 

Appliqué au FireWall pareil : Au niveau du port physique créer plusieurs interface pour les vlan comme gateway. 
Mais besoin d'une règle de parefeu qui authorise ça 

slide 83 et 84 et 85 pas trop compris à revoir 

## Configuration passerelle par défaut 

- DHCP 
- Route statique 


## Sauvegarder et Restaurer (projet)

- exporter la config dans un fichier (dans un périphérique ext.)

- Restaurer la config 
    - possible : sur le même modèle (slide 90 pour voir)
    - possbile : avoir le même firmware si le fichier est chiffré
    - besoin de reboot 

## MàJ du Firmware 

Obligation de respecter l'Upgrade Path /!\ 
Dans Upgrade Path Tool Table

- Etapes MAJ 
    - faire backup 
    - se connecter en console 
    - lire release note 
    - mettre à jour

## Systeme information 

- Dashboard>Status
- information sur le système 


