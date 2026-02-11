# Configuration SSH (Suite)

PAM : module linux pour s'id avec mdp/login 

## Demonstration en classe

> Fonctionnement clés : créer une clé privé et publique sur le serveur, envoie la clé publique à quelqu'un pour qu'il puisse se connecter au serveur sans login/mdp

## Commandes Linux 

```sh

# générer la clé 

ssh keygen -t ed25519 -C toto@toto.com
 -C pour préciser l adresse mail 

> ssh keygen.exe  // pour windows 

droits sur clés : 

- clé privé : root rw
- clé privé : root -rw-r--r-- 

# Besoin : une seule ip se connecte au serveur 

firewall-cmd --permanent --add-rich-rule='rule family="ipv4"source address="192.168.146.128" service name="ssh" accept'
firewall-cmd --permanent --remove-service=ssh
firewall-cmd --reload

# Verifier 

firewall-cmd --list-all

# copier la clé et envoyer à un hote 

ssh-copy-id -i "chemin de la clé" hote@ip 

///

# verifier l'état de configuration du fichier de config 

sshd -t 

# redémarrer le service pour appliquer les modifications 

systemctl restart sshd.service 
```
---
## Fichier de Configuration SSH 

```sh 
AutorizedKeysFile : chemin vers le fichier des clés 

UsePAM : yes ou no -> enlever le login/mdp 

AllowUsers : nom du user 
AllowGroups : nom du groupe 

```

## Comment faire un clé pour un nouveau User en ayant les sécurités activés 

```sh
## Comment faire une clé pour un nouveau User (SSH sécurisé déjà activé)

> Hypothèse :  
> - PasswordAuthentication no  
> - PubkeyAuthentication yes  
> - Firewall limité  
> - AllowUsers déjà configuré  

# 1. Créer le nouvel utilisateur sur le serveur

```sh
#1. Créer user
useradd krizia
passwd krizia

# 2. Créer le dossier .ssh

mkdir /home/krizia/.ssh
chmod 700 /home/krizia/.ssh
chown krizia:krizia /home/krizia/.ssh


# 3. Générer la clé côté client (machine de krizia)
ssh-keygen -t ed25519 -C krizia@email.com

# 4. Envoyer la clé publique au serveur
ssh-copy-id krizia@IP_SERVEUR



# 5. Autoriser le user dans sshd_config
AllowUsers enric krizia

# 6. Vérifier la configuration
sshd -t

# 7. Redémarrer le service
systemctl restart sshd.service
```

---

```sh
# voir les logs de connections 
cat /var/log/secure
```

site interessant : [raintech.com ](https://reintech.io/blog/configure-ssh-key-authentication-almalinux-9)