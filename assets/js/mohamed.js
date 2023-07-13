

const inverser = tableau => tableau.map((_, index) => tableau[tableau.length - 1 - index]);
 
var tableau = [ 1, 2, 3, 4, 5 ];
var rev = inverser(tableau);
console.log(rev);

/*
    Résultat: [ 5, 4, 3, 2, 1 ]
*/





/*    2eme script

Ce script JavaScript est une fonction qui prend un tableau (array) en entrée et renvoie 
un nouveau tableau qui contient les éléments du tableau d'origine dans l'ordre inverse.

Voici comment cela fonctionne :

1.La fonction reverse est définie avec arr comme paramètre.
2.Une nouvelle variable rev est créée et initialisée 
avec un tableau vide en utilisant new Array.
3.Une boucle for est utilisée pour parcourir le tableau d'origine à l'envers,
en commençant par le dernier élément (arr.length - 1) et en se déplaçant vers
le premier élément (i >= 0), en décrémentant i à chaque itération (i--).
4.À chaque itération de la boucle, l'élément courant (arr[i]) est 
ajouté au nouveau tableau rev en utilisant la méthode push.
5.Une fois que la boucle est terminée, le tableau rev contient 
les éléments du tableau d'origine dans l'ordre inverse.
6.Le tableau inversé est renvoyé à partir de la fonction reverse.
7.En dehors de la fonction, un tableau arr est défini avec les valeurs 
[1, 2, 3, 4, 5].
8.La fonction reverse est appelée avec arr comme argument, 
et le résultat est stocké dans la variable rev.
9.Finalement, le tableau inversé rev est affiché dans la console à l'aide de console.log.

Ainsi, lorsque vous exécutez ce script, il affichera [5, 4, 3, 2, 1] dans la console, car les éléments du tableau arr ont été renversés.
*/
function reverse(arr) {
    var rev = new Array;
    for (var i = arr.length - 1; i >= 0; i--) {
        rev.push(arr[i]);
    }
    return rev;
}
 
var arr = [ 1, 2, 3, 4, 5 ];
var rev = reverse(arr);
console.log(rev);
 
/*
    Résultat: [ 5, 4, 3, 2, 1 ]
*/