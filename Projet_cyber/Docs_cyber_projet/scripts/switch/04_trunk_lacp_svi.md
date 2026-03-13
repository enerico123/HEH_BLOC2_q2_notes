# Trunk, LACP & SVI – Switch

```ssh
enable
configure terminal

! --- Sécurité niveau 2 ---
spanning-tree mode rapid-pvst

ip arp inspection vlan [ID-VLAN-1],[ID-VLAN-2],...
ip arp inspection validate src-mac dst-mac ip

ip dhcp snooping vlan [ID-VLAN-1],[ID-VLAN-2],...
ip dhcp snooping

! --- Port-channel LACP (agrégation de liens) ---
interface Port-channel1
    description Liaison LACP
    switchport trunk allowed vlan [IDs-VLANs]
    switchport trunk native vlan [ID-NATIF]
    switchport mode trunk
    switchport nonegotiate
    ip arp inspection trust
    ip dhcp snooping trust
exit

interface [INT-LACP-1]
    description Port LACP - Trunk
    switchport trunk allowed vlan [IDs-VLANs]
    switchport trunk native vlan [ID-NATIF]
    switchport mode trunk
    switchport nonegotiate
    ip arp inspection trust
    channel-group 1 mode active
    ip dhcp snooping trust
exit

interface [INT-LACP-2]
    description Port LACP - Trunk
    switchport trunk allowed vlan [IDs-VLANs]
    switchport trunk native vlan [ID-NATIF]
    switchport mode trunk
    switchport nonegotiate
    ip arp inspection trust
    channel-group 1 mode active
    ip dhcp snooping trust
exit

! --- SVI de management ---
interface Vlan[ID-VLAN-MGMT]
    ip address [IP-MGMT] [masque]
    no shutdown
exit

end
copy running-config startup-config
```
