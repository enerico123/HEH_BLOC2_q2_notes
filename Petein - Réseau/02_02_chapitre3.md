# CHAPITRE 3 PETEIN RESEAU 



# DHCP :



## IPV4 :

#### Type d'attibution :



\- Attribution automatique d’adresse IP (DHCP automatique)
Le serveur DHCP attribue une adresse IP une seule fois à un client.
Cette IP est ensuite conservée définitivement pour ce client (tant que la config DHCP existe).



\- Attribution dynamique d’adresse IP (DHCP dynamique)
Le serveur DHCP attribue une adresse IP pour une durée limitée appelée bail (lease).



### DORA : 

\- Discover : client fait broadcast pour trouver serveur DHCP 

\- Offer : réponse du serveur DHCP (IP + paramètres) 

\- Request : le client accepte 

\- Acknowlege : le serveur confirme + bail activé 


### DHCP Relay
sur routeur interface coté client 
permet a un client d'avoir une ip d'un DHCP d'un autre réseau 

### DHCP Failover 
2 serveur DHCP dans deux réseaux différents 
qui sont synchronisé 

(un client peut être un DHCP)

## IPV6 

toujours /64 en réseau IPV6 

### Types d'adresses 
- **Unicast** : 

    - global unicast (ip publique)

    - link-local (FE80::/10)

    - loopback (::1)


- **Multicast**

    - remplace broadcast 

- **Anycast** : 

    - plusieurs machines ont la même ip 


### Autoconfiguration IPV6 

a completer 

