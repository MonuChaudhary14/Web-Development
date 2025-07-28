const inputSlider = document.querySelector("[data-lengthSlider]")
const lengthDisplay = document.querySelector("[data-lengthNumber]")
const passwordDisplay = document.querySelector("[data-passwordDisplay]")
const copyBtn = document.querySelector("[data-copy]")
const copyMsg = document.querySelector("[data-copyMsg]")
const uppercaseCheck = document.querySelector("#uppercase")
const lowercaseCheck = document.querySelector("#lowercase")
const numbersCheck = document.querySelector("#numbers")
const symbolsCheck = document.querySelector("#symbols")
const indicator = document.querySelector("[data-indicator]")
const generateBtn = document.querySelector(".generateButton")
const allCheckBox = document.querySelectorAll("input[type=checkbox]")
const symbols = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
setIndicator("#ccc");

// set password length
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

    const max = parseInt(inputSlider.max);
    const min = parseInt(inputSlider.min);
    const percentage = ((passwordLength - min) * 100) / (max - min);

    inputSlider.style.backgroundSize = `${percentage}% 100%`;
}


function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 15px ${color}`;
}

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max-min)) +min;
}

function generateRandomNumber(){
    return getRndInteger(0, 9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol(){
    const randomNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randomNum);
}

function calcStrength(){

    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8){
        setIndicator("#0f0");
    } else if((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6){
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

function handleCheckBoxChange(){

    checkCount = 0;

    allCheckBox.forEach( (checkbox) => {

        if(checkbox.checked) checkCount++;

    });

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }



}


// Shuffle Algorithm -> Fisher Yates Method

function shufflePassword(array){

    for(let i = array.length-1; i > 0 ; i--){

        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let str = "";
    array.forEach( (el) => (str += el));
    return str;

}


async function copyContent(){

    try{
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText = "Copied";
    }
    catch(e){
        copyMsg.innerText = "Problem"
    }

    copyMsg.classList.add("Active");

    setTimeout( () => {
        copyMsg.classList.remove("Active")
    }, 2000);

}

inputSlider.addEventListener('input' , (e) => {

    passwordLength = e.target.value;
    handleSlider();

})

copyBtn.addEventListener('click', ()=> {

    if(passwordDisplay.value){
        copyContent();
    }

})

allCheckBox.forEach( (checkbox) => {

    checkbox.addEventListener('change' , handleCheckBoxChange);

})

generateBtn.addEventListener('click' , () => {

    if(checkCount == 0){
        return ;
    }

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider(); 
    }

    // remove old password
    password = "";

    // adding items accoring to check box

    // if(uppercaseCheck.checked){
    //     password += generateUpperCase();
    // }
    // if(lowercaseCheck.checked){
    //     password += generateLowerCase();
    // }
    // if(numbersCheck.checked){
    //     password += generateRandomNumber();
    // }
    // if(symbolsCheck.checked){
    //     password += generateSymbol();
    // }

    
    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);


    // compulsary addition

    for(let i = 0; i < funcArr.length; i++){

        password += funcArr[i]();

    }


    // remaining additon

    for(let i = 0; i < passwordLength-funcArr.length; i++){

        let randIndex = getRndInteger(0 , funcArr.length);
        password += funcArr[randIndex]();

    }

    // suffle the password
    password = shufflePassword(Array.from(password));

    // Show the password
    passwordDisplay.value = password;

    // changing the strength
    calcStrength();
      

    

})







