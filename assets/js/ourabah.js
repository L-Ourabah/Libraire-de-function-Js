// Fonction pour inverser une chaîne de caractères
/*function OurabahEsque(chaine) {
    var nouvelleChaine = "";
    // Parcours de la chaîne de caractères de la fin vers le début
    for (var i = chaine.length - 1; i >= 0; i--) {
      // Concaténation des caractères dans l'ordre inverse
      nouvelleChaine += chaine[i];
    }
    // Retourne la chaîne inversée
    return nouvelleChaine;
  }
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
var retournerTableau = OurabahEsque(originalTableau);*/


function OurabahEsque(inverse) {
  var nouveauInverse = "";
  var longueur = inverse.length;

  for (var i = longueur - 1; i >= 0; i--) {
    nouveauInverse += inverse[i];
  }

  return nouveauInverse;
}



// Fonction pour lire les éléments d'un tableau séparés par un espace
function lireTableau(tableau) {
  // Jointure des éléments du tableau en une seule chaîne de caractères avec un espace entre chaque élément
  let resultat = OurabahEsque(tableau.join(" - "));
  // Retourne la chaîne de caractères inversée
  return resultat;
}

// Fonction pour lire les lettres d'un mot séparées par un espace
function lireLettres(mot) {
  let resultat = "";
  // Parcours des caractères du mot
  for (let i = 0; i < mot.length; i++) {
    // Concaténation des caractères avec un espace entre chaque lettre
    resultat += mot[i] + " ";
  }
  // Retourne la chaîne de caractères avec les lettres séparées par un espace
  return resultat;
}

// Récupération des éléments du DOM
let btnLecture = document.getElementById("lecture");
let btnLtmot = document.getElementById("mot");
let inputText = document.getElementById("texte");

// Gestionnaire d'événement pour le bouton "Lecture"
btnLecture.onclick = function () {
  let texte = inputText.value;
  // Séparation du texte en mots en utilisant l'espace comme délimiteur
  let mots = texte.split(" ");
  let resultat = "";
  // Parcours des mots
  for (let i = 0; i < mots.length; i++) {
    // Inversion des lettres de chaque mot et ajout des espaces entre les lettres
    resultat += OurabahEsque(lireLettres(mots[i])) + " ";
  }

  // Création de l'objet SpeechSynthesisUtterance pour la synthèse vocale
  let parole = new SpeechSynthesisUtterance();
  // Configuration du texte à lire à voix haute
  parole.text = resultat;
  parole.pitch = 2; // Hauteur de la voix
  parole.rate = 1; // Vitesse de la lecture
  parole.volume = 1; // Volume de la voix

  // Lecture à voix haute du texte inversé
  speechSynthesis.speak(parole);


};

// Gestionnaire d'événement pour le bouton "liremot"
btnLtmot.onclick = function () {
  let texte = inputText.value;
  // Séparation du texte en mots en utilisant l'espace comme délimiteur
  let mots = texte.split(" ");
  // Inversion du tableau de mots en utilisant la fonction lireTableau
  let resultat = lireTableau(mots);

  // Création de l'objet SpeechSynthesisUtterance pour la synthèse vocale
  let parole = new SpeechSynthesisUtterance();
  // Configuration du texte à lire à voix haute
  parole.text = resultat;
  parole.pitch = 2; // Hauteur de la voix
  parole.rate = 1; // Vitesse de la lecture
  parole.volume = 1; // Volume de la voix

  // Lecture à voix haute du tableau inversé
  speechSynthesis.speak(parole);


};








//////methode1


function OurabahEsque1(tableau) {
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

console.log('original Tableau' + originalTableau); // Affiche le tableau d'origine dans la console

var retournerTableau = OurabahEsque1(originalTableau); // Appelle la fonction OurabahEsque avec le tableau d'origine et stocke le tableau inversé retourné

console.log('Retourner Tableau' + retournerTableau); // Affiche le tableau inversé dans la console













///////////// methode 2



// Définition d'un tableau "originaleTableau" contenant des mots
var originaleTableau = ["football", "geek", "ballon", "manette", "argent", "bresil", "orlando", "fourabaesque", "developpeur"];

// Affiche le tableau d'origine dans la console
console.log(originaleTableau);

// Définition de la fonction "OurabahEsque2" prenant un tableau en paramètre
function OurabahEsque2(tableau) {
  // Initialisation d'un nouveau tableau vide "newTableau" qui contiendra les éléments inversés
  var newTableau = [];

  // Récupération de la longueur du tableau d'origine
  var longueur = tableau.length;

  // Boucle pour parcourir le tableau d'origine
  for (var i = 0; i < longueur; i++) {
    // Utilisation de "unshift" pour ajouter l'élément actuel à l'avant du nouveau tableau
    // Cela signifie que les éléments seront insérés dans l'ordre inverse de leur position d'origine
    newTableau.unshift(tableau[i]);
  }

  // Renvoie du nouveau tableau inversé
  return newTableau;
}

// Appel de la fonction "OurabahEsque2" avec le tableau d'origine "originaleTableau"
// Le résultat inversé sera stocké dans la variable "resultatInversé"
var resultatInversé = OurabahEsque2(originaleTableau);

// Affiche le résultat inversé dans la console
console.log(resultatInversé); // Affiche le tableau inversé


document.getElementById('Tableau1').innerText = 'Tableau original: ' + originaleTableau; // Affiche le tableau d'origine dans un élément HTML

var retournerTableau = OurabahEsque2(originaleTableau); //

document.getElementById('tableau2').innerText = 'Tableau inversé: ' + retournerTableau; // Affiche le tableau inversé dans un élément HTML









/////////////////////////Methode 3


// Définition de la fonction "Ourabesque3" prenant un mot en paramètre
function Ourabesque3(mot) {
  // Initialisation d'une variable "nouveauMot" qui contiendra le mot inversé
  var nouveauMot = "";

  // Récupération de la longueur du mot
  var longueur = mot.length;

  // Boucle pour parcourir le mot de la fin vers le début
  for (var i = longueur - 1; i >= 0; i--) {
    // Ajout du caractère actuel (à l'index i) à la fin du "nouveauMot"
    // Cela construit le mot inversé en ajoutant les caractères dans l'ordre inverse
    nouveauMot += mot[i];
  }

  // Renvoie du mot inversé
  return nouveauMot;
}

// Définition du mot d'origine "motOriginal"
var motOriginal = "football";

// Affiche le mot d'origine dans la console
console.log(motOriginal);

// Appel de la fonction "Ourabesque3" avec le mot d'origine "motOriginal"
// Le résultat inversé sera stocké dans la variable "motInverse"
var motInverse = Ourabesque3(motOriginal);

// Affiche le mot inversé dans la console
console.log(motInverse);








///////////////////////////////////methode 4


function Ourabesque4(mot) {
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

var motInverse = Ourabesque4(motOriginal); // Appelle la fonction reverseMot avec le mot d'origine et stocke le mot inversé retourné

console.log(motInverse); // Affiche le mot inversé dans la console






/////////// fonctiokn flat


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