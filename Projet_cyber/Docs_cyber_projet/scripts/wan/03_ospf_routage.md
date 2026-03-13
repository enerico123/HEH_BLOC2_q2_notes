# OSPF & Routes statiques – Routeur WAN

```ssh
enable
configure terminal

! --- Routes statiques vers sites/agences ---
ip route [réseau-site] [masque] [IP-next-hop]
! Répéter pour chaque site/agence...

! --- Route par défaut (uniquement sur le routeur avec accès internet) ---
ip route 0.0.0.0 0.0.0.0 [IP-next-hop-FAI]

! --- Processus OSPF ---
router ospf [ID-PROCESSUS]
    router-id [X.X.X.X]
    log-adjacency-changes
    redistribute static subnets

    ! Liens WAN (entre routeurs OSPF)
    network [réseau-lien-serie-1] [wildcard] area [X]
    network [réseau-lien-serie-2] [wildcard] area [X]
    network [réseau-lien-gig] [wildcard] area [X]

    ! Interfaces vers sites/agences = passives
    passive-interface [INT-vers-site]
exit

end
write memory
```

---

> **Rappel areas :**
>
> - `area 0` = backbone (entre routeurs centraux)
> - `area 1`, `area 2`... = zones vers les sites/agences
