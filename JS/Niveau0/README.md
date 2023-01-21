# Niveau 0

## Comment ajouter du JS à sa page HTML?
Il y a deux différentes manières d'intégrer du JS à son projet HTML:
- Insérer une balise `<script>` dans le `body` de la page
- Créer un fichier JS (exemple: index.js) et le relier à votre page HTML grâce à une balise `<script>` que vous mettrez dans le `body` comme précédemment mais cette fois-ci, vous y rajouterez `src="index.js"` si tel est le nom de votre fichier. S'il se trouve dans un autre dossier, il faudra l'indiquer comme ceci: `<script src="mesScript/index.js"></script>`


## Le print() en JavaScript
La fonction `print()` en python est essentielle pour vous aider lorsque votre programme ne fonctionne pas correctement et qu'aucune erreur ne s'affiche. Et bien en JavaScript également! Mais attention, en JavaScript, cela s'écrit d'une autre manière: `console.log("Hello World!");`
Vous pouvez également "print" des messages en les affichant sur la page avec la fonction `alert("Message");` au lieu d'aller dans la `Console ` du menu `Inspecter` que vous pourrez trouver en faisant in `Click Droit` sur la page.


## Les variables
Les variables vous permettent de définir un bon nombre d'information et de donné pour votre page web. Elles sont essentielles et nous allons voir les différents types de variable que nous pouvons trouver en JS:
- Les variable `var` sont **modifiables** et `globales` au sein d'une fonction. (exemples dans `index.js`)
- Les variables `let` sont **modifiables** et `locales` au sein d'un block, elles ne peuvent pas être utilisées en dehors d'un block fonction.
- Les variables `const` sont **non modifiables** ("const" = "constantes") et `locales`. Elles sont les plus utilisées et les plus suggérées.
```javascript
function Variables() {
    if (true) {
        var VariableVar = "Valeur de VariableVar";
        let VariableLet = "Valeur de VariableLet";
    }
    console.log(VariableVar); // Valeur
    console.log(VariableLet); // ReferenceError: VariableLet is not defined (VariableLet n'est pas défini)
}
```
Pour résumer, il y a des variables locales comme `let` et `const` et des variables global comme var. L'utilisation des variables locales est **fortement suggéré** pour éviter la confusion de votre code.


## Les fonctions
Les fonctions sont très importantes en JavaScript pour organiser, clarifier et réduire votre code car vous devez souvent reproduire les même actions plusieurs fois. Les fonctions sont assez simples à faire. Prenons exemple sur le python:
```python
def Fonction(arg):
    print(arg)
```
Et bien en JavaScript, c'est plus simple de s'y retrouver car les fonctions sont ouvertes et fermées par des {}, elles s'écrivent comme ceci:
```javascript
function Fonction(arg) {
    alert(arg);
}
Fonction("Hello World!"); // Et sont appellées comme cela
```
Elles peuvent même tenir en une seule ligne..même si c'est déconseillé:
```javascript
function Fonction(arg) { console.log(arg); alert(arg); } // Ne surtout pas oublier de mettre les ";" après chaque actions.
```


## Les conditions
Les conditions font également parties des fondamentaux du JavaScript. Elles ont deux syntaxes que vous devez connaître.
`if (condition) alert("Condition vraie");` Celle-ci tient sur une seule ligne seulement s'il y a **une seule fonction** à executer après.
Tandis que celle-là tient dans un block comme une fonction, il vaut mieux les faire ainsi au début pour mieux comprendre.
```javascript
if (condition) {
    alert("Condition vraie");
}
```
Pour les `if else`, ça s'écrit comme ci-dessous:
```javascript
if (condition) {
    alert("Condition vraie");
} else {
    alert("Condition fausse");
}
```
Et pour les `else if`, `elif` en python, c'est comme ça:
```javascript
if (condition) {
    alert("Condition vraie");
} else if (condition) {
    alert("Autre condition vraie");
} else {
    alert("Condition fausse");
}
```


## Lier HTML et JavaScript
Enfin nous entrons dans le vif du sujet! Et oui, nous allons voir comment exécuter des fonctions JS à partir de notre page HTML.
Tout d'abord, commençons avec des `<button>`. 
> (codes complets dans `index.html` et `index.js`)

Créons une fonction simple pour changer le texte du titre `<h1>` qui aura pour `id` "titre", afin de l'identifier avec notre JavaScript.

*index.html*
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Ma Page HTML</title>
    </head>

    <body>
        <h1 id="titre">Titre 1</h1> <!-- Element grand titre auquel nous allons changer le contenu -->

        <script src="index.js"></script> <!-- Voici comment relier votre script -->
    </body>
</html> 
```

Rajoutons le boutton en question:
```html
<body>
    <h1 id="titre">Titre 1</h1>
    <button onclick="boutton1();">Boutton 1</button>

    <script src="index.js"></script>
</body>
```

Que veut dire tout ça? Et bien nous venons de créer un élément `<button>` avec "Bouton 1" comme texte et la fonction `boutton1()` à exécuter dès que l'on va cliquer le boutton grâce au terme `onclick`. Et maintenant, cette fonction, il faut la créer!

*index.js*
```javascript
function boutton1() {
    const titre = document.getElementById("titre"); // Cherche l'élément de la page qui a "titre" pour id
    titre.innerHTML = "Boutton 1"; // Change le texte du titre pour "Boutton 1"
}
```

Que veut dire `document`? Et bien c'est notre page `HTML` que nous avons relié au script grâce à la balise `<script src="index.js">`.
Et nous utilisons la fonction `getElementById()` pour trouver notre élément titre grâce à son `id`.
Donc nous venons de créer une fonction qui va changer le texte d'un titre en appuyant sur un boutton.
Bien sûr il y a une autre manière d'éxécuter la fonction du boutton. Créons un deuxième boutton pour cela.

*index.html*
```html
<body>
    <h1 id="titre">Titre 1</h1>
    <button onclick="boutton1();">Boutton 1</button>
    <button id="boutton2">Boutton 2</button>

    <script src="index.js"></script>
</body>
```
Nous avons créé un deuxième boutton avec "boutton2" comme `id` pour l'identifier dans notre code JavaScript.
Voici une autre fonction pour ce boutton:

*index.js*
```javascript
const boutton2 = document.getElementById("boutton2"); // Cherche l'élément boutton
boutton2.onclick = boutton2(); // Exécute la fonction boutton2() lorsque l'on clique le boutton

function boutton2() {
    const titre = document.getElementById("titre");
    titre.innerHTML = "Boutton 2";
}
```

Il y a même un autre type de fonction que nous pourrions utiliser dans ce cas où nous avons pas besoin de la fonction autre pars.
Les `Arrow Functions`. Comme son nom l'indique, c'est une fonction qui va utiliser une sorte de flèche et cette fonction n'aura pas de nom,
elle ne servira qu'une seule fois:

```javascript
const boutton2 = document.getElementById("boutton2"); // Cherche l'élément boutton
boutton2.onclick = () => { // Voici la syntaxe de la fonction arrow
    const titre = document.getElementById("titre");
    titre.innerHTML = "Boutton 2";
}
```