alert("Message"); /* Fonction de base en JavaScript pour afficher un message sur votre page HTML, peut être utilisé comme un print() */

function Variables() {
    if (true) {
        var VariableVar = "Valeur de VariableVar";
        let VariableLet = "Valeur de VariableLet";
    }
    console.log(VariableVar); // Valeur
    console.log(VariableLet); // ReferenceError: VariableLet is not defined (VariableLet n'est pas défini)
}
Variables(); // Retirer cette ligne pour faire fonctionner la suite