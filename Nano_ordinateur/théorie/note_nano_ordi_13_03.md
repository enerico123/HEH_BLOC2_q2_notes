# Contrôle des actionneurs

## Pourquoi ne pas appliquer une consigne d'un coup ?

PWM 100% problème car de 0 à 100 -> patinage des roues -> perte

solution profil trapézoidale :

accélération -> vitesse constante -> Décélération

Profil en S

Moteur de propulsion :

roues arriere sont en pont en H

moteur de direction

Roues avant boucle fermée i,nter

DABORD ralentir avant de tourner



## Gestion du temps

monotonic 

sleep /  

## Boucle ouverte vs boucle fermée

boucle ouvert : 

certaine valeur a atteindre 

valeur a atteindre -> action 

controlleur actionne 

boucle fermée c'est du contrôle proportionnel 

valeur a atteindre -> action -> return valeur a atteindre -> boucle 

on ne va pas utiliser les boucles fermées 

## Conclusion