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

console.log(originalTableau); // Affiche le tableau d'origine dans la console

document.getElementById('Tableau1').innerText = ('original Tableau', originalTableau); // Affiche le tableau d'origine dans la console

var retournerTableau = OurabahEsque(originalTableau); // Appelle la fonction OurabahEsque avec le tableau d'origine et stocke le tableau inversé retourné

document.getElementById('StatutJeu').innerText = ('Retourner Tableau', retournerTableau); // Affiche le tableau inversé dans la console



var originaleTableau = ["football", "geek", "ballon", "manette", "argent", "bresil", "orlando", "fourabaesque", "developpeur"];
console.log(originaleTableau); // Affiche le tableau d'origine dans la console
function raba(tableau) {
    var newTableau = [];
    var longueur = tableau.length;

    for (var i = 0; i < longueur; i++) {
        newTableau.unshift(tableau[i]);
    }

    return newTableau;
}





document.getElementById('Tableau1').innerText = 'original Tableau: ' + originaleTableau; // Affiche le tableau d'origine dans un élément HTML

var retournerTableau = raba(originaleTableau); //

document.getElementById('StatutJeu').innerText = 'Retourner Tableau: ' + retournerTableau; // Affiche le tableau inversé dans un élément HTML





function oura(mot) {
    var nouveauMot = "";
    var longueur = mot.length;

    for (var i = longueur - 1; i >= 0; i--) {
        nouveauMot += mot[i];
    }

    return nouveauMot;
}

var motOriginal = "football";

console.log(motOriginal); // Affiche le mot d'origine dans la console

var motInverse = oura(motOriginal);

console.log(motInverse); // Affiche le mot inversé dans la console





function bar(mot) {
    var nouveauMot = "";
    for (var i = mot.length - 1; i >= 0; i--) {
        // Parcours du mot d'entrée de la fin vers le début
        // En commençant par l'indice de la dernière lettre jusqu'à l'indice 0
        nouveauMot += mot.charAt(i); // Ajoute le caractère à l'indice i du mot d'entrée au nouveau mot
    }
    return nouveauMot; // Renvoie le nouveau mot inversé
}

var motOriginal = "melanie";

console.log(motOriginal); // Affiche le mot d'origine dans la console

var motInverse = bar(motOriginal); // Appelle la fonction reverseMot avec le mot d'origine et stocke le mot inversé retourné

console.log(motInverse); // Affiche le mot inversé dans la console






function rabah(tableau) {
    // Tant qu'il reste des éléments de type tableau dans le tableau
    while (tableau.some(Array.isArray)) {
        // Aplatir le tableau en concaténant ses éléments
        tableau = [].concat(...tableau);
    }
    // Retourner le tableau aplatit
    return tableau;

}


var tableauOriginal = [1, [2, [3, 4], 5], 6];
console.log(tableauOriginal);

var profondeurTableau = rabah(tableauOriginal);
console.log(profondeurTableau);
