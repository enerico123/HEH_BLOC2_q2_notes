# Configuration de base – Routeur

```ssh
enable
configure terminal

hostname [NOM-DU-ROUTEUR]

banner motd #
*******************************
WARNING: Access restricted to authorized personnel.
Unauthorized use is prohibited.
*******************************#

clock timezone CET 1
service timestamps log datetime msec
service timestamps debug datetime msec

ip domain-name [domaine.local]
no ip domain-lookup

security passwords min-length 10
enable secret [mot-de-passe-enable]
service password-encryption

line console 0
    password [mot-de-passe-console]
    login
    exec-timeout 5 0
exit

username [prenom.nom] privilege 15 secret [mot-de-passe-enable]
username ansible privilege 15 secret [mot-de-passe-ansible]

crypto key generate rsa general-keys modulus 2048
ip ssh version 2

login block-for 300 attempts 3 within 60

line vty 0 15
    login local
    transport input ssh
    exec-timeout 5 0
exit

no ip http server
no ip http secure-server
no service config
no ip bootp server
no ip gratuitous-arps
no cdp run

end
copy running-config startup-config
```
