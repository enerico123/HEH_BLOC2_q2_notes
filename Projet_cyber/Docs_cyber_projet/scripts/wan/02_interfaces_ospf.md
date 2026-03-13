# Interfaces – Routeur OSPF (WAN)

```ssh
enable
configure terminal

! --- Lien série vers routeur OSPF voisin ---
interface Serial[X/X/X]
    description Lien_serie_vers_[NOM-VOISIN]
    ip address [IP-SERIE] [masque]
    no shutdown
exit

! --- Lien Gigabit vers routeur OSPF voisin ---
interface [INT-GIG]
    description Lien_vers_[NOM-VOISIN-OU-SITE]
    ip address [IP-GIG] [masque]
    no shutdown
exit

! --- Lien Internet (si routeur avec NAT) ---
interface [INT-INTERNET]
    description Lien_Internet
    ip address [IP-PUBLIQUE] [masque]
    ip nat outside
    no shutdown
exit

! --- NAT (si applicable) ---
ip access-list standard NAT_LIST
    permit [réseau] [wildcard]
    ! Répéter pour chaque réseau à nater...
exit

ip nat inside source list NAT_LIST interface [INT-INTERNET] overload

end
write memory
```
