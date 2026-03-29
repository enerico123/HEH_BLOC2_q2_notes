# Exercice de dépannage

A garder en tête :

- Les dernières adresses de chaque sous-réseau seront les gateway.

- tous les périph intermédiaire doivent avoir comme mdp "class" pour accès privilégié

- si besoin ssh :

  - login : adminSSH
  - mdp : ciscossh
  - déconnexion 1m30

- faire en sorte que VLAN 20 et 30 puisse accéder a internet

- VLAN 10 pas accès a internet

- périphérique finaux doivent être joingnable et administrable par PC3

- premier paragraphe de deuxieme feuille pas compris a faire plus tard

## plan d'adressage

VLAN 10 :

192.168.10.0/25 -> 255.255.255.128

192.168.10.127

VLAN 20 :

192.168.20.0/27 -> 255.255.255.224

192.168.20.31

VLAN 30 :

192.168.30.0/26 -> 255.255.255.192

192.168.30.63

---

vérification que tous les périphériques soient bien allumé

vérifier que tous les périphériques ont une ip qui est dans la vlan :

PC1 : mauvais mask

PC2 : mauvaise ip 127.16 -> 172.128

PC3 : mis en DHCP

PC4 : mis en DHCP

vérifier les switch :

S2 :

changé port fa0/2 dans le vlan 30

changer G0/1 en trunk et autoriser vlan 10,20,30

Fa0/25 allow 10,20,30

création VLAN 20

port fa0/2 en no shutdown

S1 :
