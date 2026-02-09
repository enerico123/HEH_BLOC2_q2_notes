# CONFIGURATION SSH 


## Moyen de se connecter 
### 1. Login / Mot de passe 
### 2. Connexion par clé 

- RSA 
- ed25519 (recommandé)

> on peut ajouter un passphrase : mdp pour utiliser la clé 

### Bonne pratique 

- changer le port SSH 

## Demonstration Sécurisation SSH 

```sh
# gerer clé coté client

ssh-keygen -t ed25519

- Dossier ou on veut save la clé privé 
- Dossier ou on veut save la clé publique 
- entrer passphrase 

# envoyer la clé vers un hote (le serveur)

ssh-copy-id -i /root/.ssh/id_ed25519.pub toto@192.168.146.129

- on peut remplacer /root par ~ 

# fichier de configuration ssh  

nano /etc/ssh/sshd_config


- Désactiver PermitRootLogin
- MaxAuthTries 
- MaxSessions 2 
- Port 2222 

> si on change de port taper la commande (semanage)
> PAM : module qui permet de se login 
??? a compléter demander notes Filipes

# verifier que la config est bonne
sshd -t 

#possible problème : 
 - ping fonctionne mais pas auth 
 - problème de firewall 

# ports commandes  
firewall-cmd --list-ports 
firewall-cmd --permanant --remove-service=ssh

```