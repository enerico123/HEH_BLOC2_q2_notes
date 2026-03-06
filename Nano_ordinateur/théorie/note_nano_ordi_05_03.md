# Préparation GDP - Depreter

multi-threading / mock / test-unitaire 

## Rappel POO 

### Classes 

### Relation 

- Association 

- Agrégation 

- Composition 

### Methodes 

methodes spéciales :  \__repr__, \__str__ 


surcharge : methode qui va apparaitre plusieurs fois mais avec des parametres différents 
(même nom mais différent parametre)
en python ca fonctionne beaucoup avec des parametres par defaut 

### Acces aux données

public, protected self._ , private self.__

### Heritage 

class Voiture(Vehicule)
def \__init__(self, parametre_parent, parametre_enfant)
super(Voiture, self).\__init__(parametre_parent)

### Polymorphyisme 

### Dependance 

faire en sorte de dépendre d'interface et pas de dépendance 

### Classe abstraite 

abc library 

classe qu'on instancie pas avec une methode abstraite 

### Interface 

Signe un contract avec une interface 

n'a que des methodes abstraite 

## Chapitre 2 : Les threads 

diff processus et threads 

processus : ensemble d'instruction a executer 

threads : ca compose un processus 

threads vont partager le meme espace mémoire et le même flux d'entré sortie des __processus__

faire du multi-treading 

- fonction parrallélisé 

- hérite de la classe thread (bibliotheque : threading)

## Chapitre 3 : Les tests 

Travailler en test first 

coder aucune feature tant que je n'ai pas codé tout mes tests 

Un test doit etre déterministres -> savoir la réponse et avec les memes entrées toujours les mêmes sorties 

Mock : simuler des entrées, simuler des objets 

Patch : ... 



## Bonnes pratiques et Infos 

faire aussi tous les tests de composants 

realiser des test de contrats 

nommer les test de maniere explicite 

si nécessaire, implémentez des data builders 

testdesiderata.com 
natpryce.com
martinfowler.com
github PartsUnlimited.HRCost

# IL FAUT VENIR PREPARÉ 

rechercher comment se préparer 

préparer les test 