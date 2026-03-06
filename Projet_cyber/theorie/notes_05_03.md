# Chapitre 5 : VPN IPsec 

## intro systeme distribué 

télétravail, application cloud / pas centralisé donc besoin de sécurité 

deux possibilité 

- réseau wan chez un FAI (info dans mon réseau ou FAI de confiance)

- réseaux publique (moins cher) utiliser connexion internet des employer -> VPN entre télétravailleur et entreprise 

## VPN (Virtual Private Network)

c'est un assemblage de plusieurs technologies (tunneling, authentification, chiffrement)

permet de créer une connexion privée de bout en bout 

tunnel chiffré : entre télétravail et entreprise tout est chiffré 

virtual car plusieurs lignes physique mais pas seulement pour nous 

remarque : VPN ne chiffre pas les données systématiquement

le vpn permet la verification de l'intégrité des données

anti rejeu : empêche qu'on puisse rejouer des données (on peut pas recevoir deux fois la même donnée)

authentification : verifie que c'est la machine a qui j'envoie est bien celle à qui je veux envoyer 

### Deux technologie 

- TLS 

- IPsec (ce qu'on voit dans ce cours) 

## VPN de site à site 

On va voir des VPN de sites à sites (P2P)

d'un routeur à routeur / FW à FW / routeur à FW 

tunnel toujours ouvert 

### Exemple 

On peut pas accéder a des documents avec notre IP maison 

Grâce au VPN donne une ip du FAI de l'école comme si on était connecté au réseau internet 

donc on peut accéder à ses documents 

arrive a la gateway de l'école qui route vers le serveur de documents 

## Avantages 

flexible et productif -> on peut travailler de chez nous 

cout moindre -> utilisation du réseau internet de l'employés 

## Inconvénients 

Niveau de service n'est pas garanti -> pas de truc qui garanti QoS qui garanti notre connexion et sa rapidité 

Sécurité -> Ne respecte pas le moindre privilège  (accède a tout le réseau / solution ZTNA : user peut accéder que a l'application demandée )

Confidentialité -> traffic par se service potentiellement gardent les logs et tout 

## Technique de chiffrement 

Utilise une transformation mathématiquement donc réversible 

conclusion si chiffrement trop simple on va pouvoir être déchiffré 

### Chiffrement actuel 

toujours basé sur algo 

utilisation de clé de chiffrement 


## Degré de Sécurité 

Va dépendre de la longueur de ma clé de chiffrement 

dépend de la durée de vie de la clé 

tunnel chiffré : on va changer souvent de clé de chiffrement 

dépend de la méthode d'échange de la clé de chiffrement 

> chiffrement symétrique car même clé pour chiffrer et déchiffrer 

> Solutient chiffrement symétrique : utilise deux clé différentes pour chiffrer/déchiffrer 

Bob génère une paire de clé envoie que la clé publique à Alice pour chiffrer et garde la clé privée pour déchiffrer mais la clé privée n'est pas partagée elle reste chez bob

### Inconvénient 

- pas d'auth -> possible men in the middle 
    - pirate envoie sa propre clé publique à la place de bob pour recevoir le message qui a été chiffré avec sa clé publique dont il a la clé privée 

- nécessite d'échanger la clé 

- super lent que le chiffrement symétrique (1000 à 10 000x plus lent)

## Fonction de hachage 

algo qui crypte que dans un sens irréversible 

deux entrée -> passé en hach -> sont identique si le hache est identique 

inconvénient : men in the middle, pirate intercepte message 

solution : utiliser une clé secrète en + du hachage (HMAC)

problème rient : clé secrète qui doit être envoyée 

### Signature Electronique 

garanti l'auth de l'auteur du message 

garanti l'intégrité 

garanti la non répudiation d'un message : peut pas nier avoir fait une action 

car si action faite avec la clé privée on est sur de qui à cette clé 

Mais retour dans le cas : pas sur que on a la bonne clé 

### Solution : signature numérique 

générer une paire de clé et faire certifier la clé publique 

créer des certificat numérique qui contient la clé publique 

problème : mais pirate peut créer une faux certificat 

solution : CErtifier le certificat avec une signature qui vient de l'organisation tiers 

emptreinte du certificat chiffré avec clé privée 

---

Arreté ici Relire et bien comprendre ces notions 
