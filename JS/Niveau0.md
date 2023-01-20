# Niveau 0

## Comment ajouter du JS à sa page HTML?

Il y a deux différentes manières d'intégrer du JS à son projet HTML:
- Insérer une balise `<script>` dans le `body` de la page
- Créer un fichier JS (exemple: index.js) et le relier à votre page HTML grâce à une balise `<script>` que vous mettrez dans le `body` comme précédemment mais cette fois-ci, vous y rajouterez `src="index.js"` si tel est le nom de votre fichier. S'il se trouve dans un autre dossier, il faudra l'indiquer comme ceci: `<script src="mesScript/index.js"></script>`

## Le print() en JavaScript

La fonction `print()` en python est essentielle pour vous aider lorsque votre programme ne fonctionne pas correctement et qu'aucune erreur ne s'affiche. Et bien en JavaScript également! Mais attention, en JavaScript, cela s'écrit d'une autre manière: `console.log("Hello World!")`
Vous pouvez également "print" des messages en les affichant sur la page avec la fonction `alert("Message");` au lieu d'aller dans la `Console ` du menu `Inspecter` que vous pourrez trouver en faisant in `Click Droit` sur la page.

## Les variables

Les variables vous permettent de définir un bon nombre d'information et de donné pour votre page web. Elles sont essentielles et nous allons voir les différents types de variable que nous pouvons trouver en JS:
- Les variable `var` sont **modifiables** et `globales` au sein d'une fonction. (exemples dans `Niveau0/index.js`)
- Les variables `let` sont **modifiables** et `locales` au sein d'un block, elles ne peuvent pas être utilisées en dehors d'un block fonction.
- Les variables `const` sont **non modifiables** ("const" = "constantes") et `locales`. Elles sont les plus utilisées et les plus suggérées.

Pour résumer, il y a des variables locales comme `let` et `const` et des variables global comme var. L'utilisation des variables locales est **fortement suggéré** pour éviter la confusion de votre code.

