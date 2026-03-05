notes début de cours : pas de QoS 

# Chapitre 8 : Réseaux locaux sans fil 

WLAN : Wireless lan 

## Avantages des WLAN 

- permet la mobilité 

- plusieurs points d'acces 

## Inconvénients 

- moins bonne qualité de signal 

- sécurité moins bonne -> on sait pas jusqu'ou ca va le wifi en distance 

ondes peuvent varier de distance en fonction des murs / portes ouvertes / météo 

-> obligatoire de chiffre tout ce qui passe en réseau sans fil 

## Principaux standards IEEE 802.11 

image slide 123

## Fréquence 

Certaines bande de fréquences sont libres (tout le monde peut emettre)

Fréquences de 2.400 à 2.4835 GHz 

Divisé en 14 canaux -> 14 communications simultanée 

mais beaucoup divisé donc pas beaucoup de bande passante 

Solution : 5GHz car divisé en 8 Canaux de 20 MHz 

Mais plus sensible aux obstacles car Beaucoup de Hz 


## Gestion centralisé 

AP : point d'accès 

WLC : Wireless lan controleur

Contoleur de plusieurs points d'acces 

detecte si il y a des colisions de canaux, change automatiquement de canal pour pas faire d'interference 

tout passe par le controlleur 

deux canaux : 
- canal de controle : chiffré par defaut 
- canal data (donnée utilisateur) : pas chiffré pas defaut 


## Wifi range repeater/extender 

Permet d'étendre la zone de couverture du réseau WI-FI 

### Antennes 

- omnidirectionnelles 

- directionnel 

- plusieurs antennes différentes en fonction de l'application  

## Mode ad-hoc 

Deux pc qui communiquement ensemble par wifi sans intermediaire 

## Thethering 

Hotspot : permet de partager une connexion 

sécurité pas fou car pirate peut etre hotspot pour simuler la connexion heh et pc se connecte automatiquement au eduroam qui va donner le plus de signal (le pirate)

## Mode infrastructure 

...

## Mode Bridge 

Communication P2P sans fil 

## Mode Mesh 

...

## Trame 802.11 

Beaucoup plus complexe qu'une trame ethernet classique 




## WIFI 1 à WIFI 5 

Caractéristiques 

pour détecter collision : avoir une trame assez longue pour que quand la collision se fasse la trame est encore entrain de s'émettre 

Quand on peut pas détecter les collision -> CSMA/CA 




# CHATGPT – Résumé WLAN / Wi-Fi

## Qu’est-ce qu’un WLAN (Wi-Fi)

Un **WLAN (Wireless LAN)** est un réseau local utilisant des **ondes radio** pour connecter des équipements sans câble, selon les normes **IEEE 802.11**.

### Objectifs principaux

- Connecter des appareils mobiles  
- Réduire le câblage  
- Offrir flexibilité, mobilité et évolutivité  

### Limites

- Signal variable (distance, obstacles, interférences)  
- Sécurité plus complexe que le filaire  
- Bande passante partagée (tout le monde utilise le même média radio)  

---

## Fréquences et canaux

### Bandes principales

- **2,4 GHz (ISM)**  
  - Bonne portée  
  - Peu de canaux non chevauchants (1-6-11)  
  - Très polluée (micro-ondes, Bluetooth, babyphones)  

- **5 GHz (UNII)**  
  - Meilleurs débits  
  - Plus de canaux  
  - Portée plus faible  

- **6 GHz (Wi-Fi 6E)**  
  - Très peu d’interférences  
  - Réservé aux équipements récents  

**Règle clé**  
👉 Toujours utiliser des **canaux non chevauchants** pour éviter les interférences.

---

## Infrastructure WLAN

### Éléments

- **Clients** : PC, smartphone, IoT…  
- **Point d’accès (AP)** : fait le lien entre Wi-Fi (802.11) et Ethernet (802.3)  
- **Routeur Wi-Fi** : AP + switch + routeur (souvent domestique)  
- **WLC (Wireless LAN Controller)** : gestion centralisée des AP (entreprises)

### Types de points d’accès

- **AP autonome** : configuration locale, indépendant  
- **AP léger (Lightweight)** : contrôlé par un WLC via CAPWAP  
- **Cluster d’AP** : un AP joue le rôle de contrôleur  
- **Gestion Cloud** : configuration centralisée sans contrôleur local  

---

## Topologies Wi-Fi

- **Ad-hoc (IBSS)** : sans point d’accès (Wi-Fi Direct, Bluetooth)  
- **Infrastructure**  
  - **BSS** : un AP  
  - **ESS** : plusieurs AP avec le même SSID (roaming)  
- **Bridge** : liaison point-à-point entre deux réseaux filaires  
- **Mesh** : AP interconnectés automatiquement  
- **Tethering** : partage de connexion via smartphone  

---

## Fonctionnement radio

### Accès au média

- Half-duplex  
- CSMA/CA (écouter avant d’émettre)  
- ACK obligatoire pour chaque trame  

### Nœuds cachés

- Problème : deux stations ne s’entendent pas mais parlent au même AP  
- Solution : **RTS / CTS** avec réservation du canal (NAV)

### Types de trames 802.11

- Trames de gestion (beacon, association)  
- Trames de contrôle (RTS, CTS, ACK)  
- Trames de données  

---

## Technologies radio

### Étalement de spectre

- **DSSS** : robuste, ancien  
- **FHSS** : sauts de fréquence  
- **OFDM** : base des Wi-Fi modernes  

### Performances

- **MIMO** : plusieurs antennes = plus de débit  
- **Beamforming** : concentre le signal vers le client  
- Dépendent de :
  - Distance  
  - Interférences  
  - Largeur de canal  
  - Nombre d’utilisateurs  
  - Obstacles  
  - Type d’antenne  

---

## Sécurité Wi-Fi

### Menaces

- Accès non autorisé  
- Rogue AP / hotspots personnels  
- Interférences et déni de service  
- Désassociation forcée  
- Sniffing des communications  

### Fausses protections

- Masquer le SSID  
- Filtrage MAC seul  

### Bonnes pratiques

- WPA3  
- 802.1X + RADIUS en entreprise  
- Segmentation VLAN  
- Désactiver WPS  
- Mettre à jour les firmwares  
- Audits Wi-Fi et site survey  

---

## Authentification et chiffrement

- **Open** : aucun chiffrement (Wi-Fi public)  
- **WEP** : obsolète  
- **WPA / WPA2-PSK** : vulnérable  
- **WPA2 / WPA3 Enterprise** : sécurisé (802.1X)  
- **WPA3** :
  - SAE (anti brute-force)  
  - Confidentialité persistante  
  - Enhanced Open (OWE)  
  - Easy Connect (remplace WPS)  

---

## Dépannage WLAN

### Méthode

1. Identifier le problème  
2. Lister les causes possibles  
3. Tester les hypothèses  
4. Corriger  
5. Vérifier  
6. Documenter  

### Causes fréquentes

- Mauvais positionnement des AP  
- Chevauchement de canaux  
- Interférences  
- Normes Wi-Fi trop anciennes  
- Mauvaise configuration de sécurité  

---

## Évolution des normes Wi-Fi

| Nom | Norme | Apports principaux |
|---|---|---|
| Wi-Fi 4 | 802.11n | MIMO |
| Wi-Fi 5 | 802.11ac | MU-MIMO descendant, beamforming |
| Wi-Fi 6 | 802.11ax | OFDMA, UL/DL MU-MIMO, BSS Coloring, TWT |
| Wi-Fi 6E | 802.11ax | Bande 6 GHz |
| Wi-Fi 7 | 802.11be | MLO, canaux 320 MHz, puncturing, TSN |

---

## Idée clé à retenir

Le **Wi-Fi est un média radio partagé**, sensible aux interférences.  
Les **performances et la sécurité** dépendent autant de la **norme utilisée** que de la **conception du réseau**.
