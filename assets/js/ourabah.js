// Fonction pour inverser une chaîne de caractères
function OurabahEsque(chaine) {
    var nouvelleChaine = "";
    // Parcours de la chaîne de caractères de la fin vers le début
    for (var i = chaine.length - 1; i >= 0; i--) {
      // Concaténation des caractères dans l'ordre inverse
      nouvelleChaine += chaine[i];
    }
    // Retourne la chaîne inversée
    return nouvelleChaine;
  }
  
  // Fonction pour lire les éléments d'un tableau séparés par un espace
  function lireTableau(tableau) {
    // Jointure des éléments du tableau en une seule chaîne de caractères avec un espace entre chaque élément
    let resultat = OurabahEsque(tableau.join(" "));
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




