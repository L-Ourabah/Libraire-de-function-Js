function OurabahEsque(tableau) {
    var newTableau;
    newTableau = []; // Crée un nouveau tableau vide
    var longueur = tableau.length; // Stocke la longueur du tableau d'entrée dans une variable

    // Parcours du tableau d'entrée de la fin vers le début
    for (i = longueur - 1; i >= 0; i--) {
        newTableau.push(tableau[i]); // Ajoute l'élément à l'indice i du tableau d'entrée à la fin du nouveau tableau
    }

    return newTableau; // Renvoie le nouveau tableau inversé
}
var originalTableau = ["football", "geek", "ballon", "manette", "argent", "bresil", "orlando", "fourabaesque", "developpeur"];
var retournerTableau = OurabahEsque(originalTableau);

let btnLecture = document.getElementById("lecture");
let btnChut = document.getElementById("chut");
let inputText = document.getElementById("texte");

btnLecture.onclick =  () => {
    let texte = OurabahEsque(inputText.value);

    let parole = new SpeechSynthesisUtterance();

    parole.text = texte;
    parole.pitch = 2;
    parole.rate = 1;
    parole.volume = 1;
    speechSynthesis.speak(parole);
    parole.onend = function (event) {

    }

};