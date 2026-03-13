# Interfaces & NAT – Routeur

```ssh
enable
configure terminal

! --- ACL pour le NAT ---
ip access-list standard NAT_ACL
    permit [réseau-LAN] [wildcard]
exit

! --- Interface WAN (côté Internet / FAI) ---
interface [INT-WAN]
    description Lien WAN
    ip address [IP-WAN] [masque]
    ip nat outside
    no shutdown
exit

! --- Interface LAN (côté réseau interne) ---
interface [INT-LAN]
    description Lien vers réseau interne
    ip address [IP-LAN] [masque]
    ip nat inside
    no shutdown
exit

! --- NAT overload (PAT) ---
ip nat inside source list NAT_ACL interface [INT-WAN] overload

end
copy running-config startup-config
```
