# Chapitre 3 : Règles de parefeu 

### Caractéristiques 

Fonctionnement : tout refuser et accepter explicitement ce qu'on veut 

Importantce de l'ordre des règles 

Deny all a la fin 

### Critères 

- interface source et destination (MAC L2 ?)
- adresse ip source et destinsation (Layer 3)
- horaire 
- service (protocole et num. de port)

Si Un critère correspond -> action = accept 

(si "accept" on peut faire une verification supplémentaire)

chaque règle à un numéro de séquence qui correspond a l'ordre de lecture

chaque règle à un ID qui permet de l'identifier 

### Différents types de règles 

On va surtout voir les règles ipv4 

### Zone 

3 réseau peut faire parti de la même Zone pour configurer des interface une fois appliquée sur la zone qui contiennent les 3 réseaux 

### Création d'une règle de pare-feu 

Create New > options à suivre simplement 

### Correspondance de la source 

obligatoire : 
- adresse source ou réseau
- zone géographique 
- FQDN
- objet de base de données (ISDB)
    - liste des adresses ip 

optionnel : 
- user source
- groupe source
- device source 





