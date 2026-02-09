# DEVELOPEMENT FRONT-END 

# JAVA SCRIPT

## Introduction



## Variables 

\- var : portée : locale à la fonction 

\- let : portée : locale au bloc d'instruction (seul utilisé)

\- const : constante 


### Types primitif 

```js
let truc = 45 ; 
let machin = "isabelle" ;
let chose = true ;
let bidule ;
```

### Intégrer une variable dans un str
```js
let x = 255 ; 
console.log("j'ai vu ${x} fois ce film ! ") ; 
```

## Tableaux 

### Indicés 

tableau avec des indices qui se suivent  

```js

let tableau = new Array("ok", 15, 7 , 'JS') ;
let variante = ["ok", 15, 7 , 'JS'] ;
let tab = [7] ;

jours[0] = "lundi";
jours[1] = "mardi";

for (let i = 0 ; i < jours.length ; i++) {
    console.log(jours[i]) ;
}

```

### Associatif 

tableau ou on peut choisir les indices 

```js

let navig = { "Firefox" : 8, "Chrome" : 51, "Safari": 19};

navig["Firefox"] = 9;
navig["Chrome"] = 52;
navig["Safari"] = 21;

for (let i in navig) {
    console.log(navig[i]) ;
}
```


## Structure conditionelle 
### switch 
```js
switch (variable) {
    case 1 : instructions1;
             break;
    case 2 : instructions2;
             break;
    case 3 : instructions3;
             break;
    default : instructions_par_défaut;
}

```


### Break & Continue 
\- Break : 

\- Continue : 

## Fonctions 

### Déclaration d'une fonction 
```js
function nom_de_la_fonction (paramètre1, paramètre2, …) {
    //instructions de la fonction
}

```
[Code test fonction](exemple_code_pas_important/pc_exemple.html)

### Fonction anonymes

fonction sans nom utilisée qu'une fois 

### Fonction fléchées 

syntaxe courte pour fonction anonyme 
```js
(x, y) => x * y
```



(fin page 26)