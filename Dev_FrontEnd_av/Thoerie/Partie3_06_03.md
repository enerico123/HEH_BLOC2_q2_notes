rappel réact important fonction 

un composant = une fonction en React 

# Partie 3 

2 types de composants : 

- intégrés -> balises html 

- personnalisé -> fonction -> renvoie des valeurs (commence par une majuscule)

---
### Un fichier = un composant = une fonction 
---

Fonction react renvoie une seule valeur si ca renvoie \<h1> et \<h2> c'est deux valeurs donc il faut le mettre dans un \<div> pour qu'il prenne ca comme une seule valeur 

```jsx
const title = "React"
<h1>Hello {title}</h1>

// pour récupérer une variable 
```
---
```jsx 
function Component(){
    // logique code
    return (
        // ce que ca return  
    );
}
```

## Pourquoi react /= balises html 

```jsx
// pour préciser html
<label htmlfor=""> </label>

// pour faire une class en react 
className 
```

avantages de faire des composant / code scindé / modulaire 

avantage : réutilisation 

```jsx
// tableau 

tab = []
```

## Map 

= à foreach, applique la même chose a tous les éléments de la liste. 

et vient le stocker au même index 

```jsx
const fruits = ["pomme","banane","poire","kiwi"];

// fonction map
const fruitsMaj = fruits.map((fruit) => fruit.toUpperCase());

console.log(fruitsMaj);
// ["POMME","BANANE","POIRE","KIWI"]
```

## Props 

permet de transmettre des informations au composants enfants 

