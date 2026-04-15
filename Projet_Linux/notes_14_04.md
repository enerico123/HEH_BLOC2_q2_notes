# Linux

## Projet linux

WEB
DNS
FTP
surprises...
monitoring
backup

mercredi 60% facon mise en place, 20% github, vendredi 20% points surprise.

## Cours

sestatus : activé ou non, mode de fonctionnement

mode
enforcing : bloque
permissif : mode de déboggage, ne bloque pas mais log
disable : pas de SElinux

top -Z : lister les processus et voir leur contexte par rapport a SElinux

ls -lZ : étiquette des fichiers

"httpd_sys_content" -> peut etre lu par serveur

changer pointer vers serveur web -> config apache

nano /etc/httpd/httpd_config/httpd.conf -> DocumentRoot : "/srv"

/var/log -> log 

chcon -t -> changer de contexte