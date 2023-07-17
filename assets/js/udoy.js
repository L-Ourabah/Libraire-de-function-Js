/*
given a string
reverse it
reverse ('turn')=== 'nrut' ;
reverse ('me!')='!em'
*/

/* solution 1
1. given string - convert it into array
2. reverse it the array
3. turn the array back into string
*/

const revString = (str)=>{
    const array = str.split ("");
     array.reverse();
      str = array.join("");
       console.log(str);
     }

  revString("turn");


/* solution 2
1. given string - creat empty string
2. loop theough each character
3. return the reversed
*/

(function(str) {
    let reversed = '';
    for(let character of str)
    {
      reversed = character + reversed;
    }
    console.log({
    reversed_value:reversed
    })
}) ("baka!")