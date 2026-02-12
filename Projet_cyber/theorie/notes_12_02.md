# Chapitre 4 : Routage 

## NAT/route mode 

mode dans le quel le fortigate agis comme un routeur 

## RIB / FIB 

- Routing Information Base
    - ... 

- Forwarding Information Base
    - ... 


## Types de routes 

### Route directement connectés 

### Routes statiques 
- priorité 

### Routes dynamique 

- RIP, OSPF 

### Routes DHCP 

## Policy-based routes 

De base le routage se fait en fonction de l'ip 

Dans policy based route le routage peut se faire en fonction d'un service, une interface, une source 

> Voir routes : Static and dynamics routes dans le dashboard 

---

### Policy match 

verifier les policy 

### Route Lookup 

verifier les routes (debuger)


## ECMP (Equal Cost Multi-Path)

fais de l'équilibrage de charge à cout égal

comment il réaprti ?   :   
- Source IP  
- Source-destination IP 
- Weighted (set le pourcentage du traffic qui passe sur chaque route (3/8 et 5/8) )
- Usage (Spillover) : toujours utiliser la même route et quand le seuil est atteint on décide que la deuxieme route transfere aussi 


condition pour faire de l'équilibrage : même distance administrative, métrique, priorité, réseau de destination. => peut équilibrer la charge 


### Configuration ECMP 

- configuration du poids 

- spillover 

- ... [commandes]

## RPF 

> protection contre l'usurpation d'adresse IP 

Deux modes 

- Loose : paquet accepté si route active existe VERS l'adresse IP source via l'interface entrante 

- Strict : même que loose mais en + ET si cette route est la meilleure route vers l'ip source 

/!\ : routage dynamique peut biaiser le RPF 
