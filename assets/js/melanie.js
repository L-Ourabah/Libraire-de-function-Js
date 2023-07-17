function melanieReverseString(str) {
    let newStr = '';
    for (let i = (str.length - 1) ; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr;
}

function melanieReverseArray(array) {
    let newArray = [];

    for (let i = (array.length -1); i >= 0; i--) {
        newArray.push(array[i].trim());
    }
    return newArray;
}


function melanieReverse(value) {
    let returnValue = '';
    if (value.length < 1) {
        returnValue = 'Please fill something';
    }
    else {

        if (value[0] == '*') {
            if (value == "*true") {
                value = true;
            }
            else if (value == "*false") {
                value = false;
            }
        }
        if (value[0] == '[') {
            value = value.slice(1).split(',');
        }
        if (value[0] == '>') {
            if (value[1] == '-' && value.length > 2) {
                returnValue += '-' + melanieReverseString(value.substr(2));
            }
            else {
                returnValue += melanieReverseString(value.substr(1));
            }
            
        }
        else {
            if (typeof value == "boolean") {
                if (value === true) {
                    returnValue = false ;
                }
                else if (value === false) {
                    returnValue = true;
                }
            }
            else if (typeof value === "string") {
                returnValue = melanieReverseString(value);
            }
            else if (typeof value === "object") {
                returnValue = melanieReverseArray(value);
            }
            else if (typeof value === "number") {
                if (value < 0) {
                    returnValue = Math.abs(value);
                }
                else if (value > 0) {
                    returnValue = value * (-1);
                }
                else {
                    returnValue = 0;
                }
            }
        }
        return returnValue;
    }
    
}


const buttonSubmit = document.getElementById('submitMelanie');
const getInput = document.getElementById('demoMelanie');

const displayInput = document.getElementById('displayInput');
const functionResult = document.getElementById('functionResult');

let insertFtResult = document.createElement('p');
let insertDisplayInputTitle = document.createElement('h4');

functionResult.appendChild(insertFtResult);
displayInput.appendChild(insertDisplayInputTitle);

buttonSubmit.onclick = () => {
    let getInputValue = getInput.value;
    insertDisplayInputTitle.innerText = getInputValue;
    let getResult = melanieReverse(getInputValue);
    getInput.value = '';
    insertFtResult.innerText = getResult;
}