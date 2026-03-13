# Routage & ACL SSH – Routeur

```ssh
enable
configure terminal

! --- ACL pour restreindre l'accès SSH ---
ip access-list standard SSH_ACL
    permit [réseau-admin-1] [wildcard]
    permit [réseau-admin-2] [wildcard]
    deny any
exit

line vty 0 15
    access-class SSH_ACL in
exit

! --- Routes statiques ---
! Route par défaut vers FAI
ip route 0.0.0.0 0.0.0.0 [IP-next-hop-FAI]

! Routes vers réseaux distants
ip route [réseau-distant] [masque] [IP-next-hop]

end
copy running-config startup-config
```
