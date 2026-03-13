# Ports d'accès – Switch

```ssh
enable
configure terminal

! --- Port d'accès standard ---
interface [INT]
    description [NOM-VLAN] - Section [NOM-SECTION]
    switchport mode access
    switchport access vlan [ID-VLAN]
    switchport port-security maximum 8
    switchport port-security violation restrict
    switchport port-security aging type inactivity
    switchport port-security
    spanning-tree portfast edge
    spanning-tree bpduguard enable
    ip verify source
    ip dhcp snooping limit rate 6
exit

! --- Port serveur (DHCP snooping trust + ARP trust) ---
interface [INT-SERVEUR]
    description [NOM-VLAN] - Section Serveurs
    switchport mode access
    switchport access vlan [ID-VLAN-SERVEURS]
    switchport port-security maximum 8
    switchport port-security violation restrict
    switchport port-security aging type inactivity
    switchport port-security
    ip arp inspection trust
    spanning-tree portfast edge
    spanning-tree bpduguard enable
    ip dhcp snooping trust
exit

! --- Port voix ---
interface [INT-VOIX]
    description [NOM-VLAN] - Section Voix
    switchport mode access
    switchport access vlan [ID-VLAN-VOIX]
    switchport voice vlan [ID-VLAN-VOIX]
    switchport port-security maximum 8
    switchport port-security violation restrict
    switchport port-security aging type inactivity
    switchport port-security
    mls qos trust cos
    spanning-tree portfast edge
    spanning-tree bpduguard enable
    ip verify source
    ip dhcp snooping limit rate 6
exit

! --- Ports inutilisés (shutdown + VLAN poubelle) ---
interface range [INT-DEBUT]-[INT-FIN]
    description Useless Ports - Inactive
    switchport mode access
    switchport access vlan [ID-POUBELLE]
    switchport port-security maximum 8
    switchport port-security violation restrict
    switchport port-security aging type inactivity
    switchport port-security
    shutdown
    spanning-tree portfast edge
    spanning-tree bpduguard enable
    ip verify source
    ip dhcp snooping limit rate 6
exit

end
copy running-config startup-config
```
