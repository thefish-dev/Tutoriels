function boutton1() {
    const titre = document.getElementById("titre"); // Cherche l'élément titre

    titre.innerHTML = "Boutton 1"; // Modifie le texte du titre
}

const boutton2 = document.getElementById("boutton2"); // Cherche l'élément boutton
boutton2.onclick = () => { // Voici la syntaxe de la fonction arrow
    const titre = document.getElementById("titre");
    titre.innerHTML = "Boutton 2";
}