# Presentation Voie IP

But : montrer que la théorie s'applique chez un opérateur télécom

1990 : utiliser réseau pour tous les services

Couche Haut niveau :

- IT : responsable de provisionner les entreprises, particulier soient configuré dans le système (on va pas en parler)

- Core : ce qui vient de l'acces, il choisit ce qu'on fait avec ce qui vient de l'acces. (de quoi on va parler)

- Access : Antennes, Fibres, tout ce qui donne accès au réseau (pas en parler)

#### Avant

Circuit Switched Network, toutes les informations suivent le même circuit

- avantage : stable

- désavantages : pas éfficace (quand on parle pas les blancs s'acheminent quand meme)

##### Apres : Packet Switched Network, les paquets sont scindés en paquet

---

VOIP utilise Serveur, a l'époque les switch utilisaient énormément de place donc passer sur des serveur -> moins d'espace -> vente de batiments.

- Network Acces Layer
- Internet Layer
- Transport Layer
- Application Layer (ciblé)

## Protocol IP

Non fiable, paquet acheminé rapidement lentement. premier paquet peut arriver avant le second. très désordoné

il y a quand même le TTL, la fragmentation...

VOIP évite la fragmentation car plus on fragmente plus on perd

## UDP Protocol

protocol transport de base mais le moins fiable.

UDP est utilisé pour le temps réel comme la voix

## TCP Protocol

Est fiable mais pas rapide
Assure bien que le paquet soit bien arrivé

## Protocol SIP

Signal Protocol

inviter quelqu'un dans un réseau mutli média

Message SMTP et SIP ressemble fort

FROM/TO...

une entête SIP peut faire crasher un serveur d'un opérateur

protocol SIP comme HTTP est un protocol requête/réponse

## SIP

User Agent : périphérique final, nos téléphones coté access

SIP Servers : ...

Proxy Stateless : envoie le message c'est tout

Proxy Statefull : est conscient de la session qui est en cours et sait les données qui y sont liées

SIP reponse : 200 OK, réponse bien recue

plusieurs methode

INvite commencer une session multimedia

BYE : end la sessions

REGISTER : s'enregistrer sur le réseau fait toute la partie authentification et dit a quelle adresse ip et tel port on doit le contacter

Utilisation de MD5 algo d'authentification

client peut répondre au challenge si il a le mot de passe stocké dans la carte SIM

et si il répond bien au challenge il est connecté ai réseau on peut le joindre

Comment ca se passe User 1 register pareil pour 2

proxy de 2 envoie une invite au proxy de 1

2 SIP UA communiquement avec un SIP Server au milieu

le media passe sans passer par le serveur

## RTP (Real-Time Transport Protocol)

permet d'encoder et de transporter la voix dans la réseau

les FAI monitorent tous les appels dans leur réseau

Ils ont des Firewall qui permettent de gérer les attaques  

DTMF : appuier sur des boutons pour répondre a des questions.

## SDP (Session Descriptor Protocol)

---
