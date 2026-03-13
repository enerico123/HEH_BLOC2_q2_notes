# Configuration de base – Routeur OSPF (WAN)

```ssh
enable
configure terminal

hostname [NOM-OSPF]

no ip domain-lookup
ip domain-name [domaine.local]

enable secret [mot-de-passe-enable]
service password-encryption

username ansible privilege 15 secret [mot-de-passe-ansible]
username admin privilege 15 secret [mot-de-passe-admin]

crypto key generate rsa modulus 2048
ip ssh version 2
ip ssh time-out 60
ip ssh authentication-retries 3

line console 0
    password [mot-de-passe-console]
    login
    logging synchronous
    exec-timeout 5 0
exit

line vty 0 4
    login local
    transport input ssh
    exec-timeout 5 0
exit

no ip http server
no ip http secure-server
no cdp run

end
write memory
```
