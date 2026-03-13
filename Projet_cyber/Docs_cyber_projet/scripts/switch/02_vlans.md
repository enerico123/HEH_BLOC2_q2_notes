# VLANs – Switch

```ssh
enable
configure terminal

vlan [ID-VLAN-1]
    name [NOM-VLAN-1]
exit

vlan [ID-VLAN-2]
    name [NOM-VLAN-2]
exit

! Répéter pour chaque VLAN...

! VLAN natif (trunk)
vlan [ID-NATIF]
    name Natif
exit

! VLAN poubelle (ports inutilisés)
vlan [ID-POUBELLE]
    name Poubelle
exit

end
copy running-config startup-config
```

---

> **Exemple utilisé en cours :**
> VLANs 10 Informatique, 15 Commerciaux, 20 Technique, 25 Finance,
> 30 Marketing, 35 RD, 40 RH, 45 Direction, 50 Gestion, 60 Serveurs, 65 Voix,
> 100 Natif, 199 Poubelle
