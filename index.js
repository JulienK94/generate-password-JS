const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
 "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",
 ".","?","/"];

let buttonEl = document.getElementById("generate")
let inputElOne = document.getElementById("input-1")
let inputElTwo = document.getElementById("input-2")

let passwordLength = 15

function getRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
}

function getRandomPassword() {
    let randomPassword = ""
    for(i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

function selectTextInput() {
    inputElOne.select()
    inputElTwo.select()
}

buttonEl.addEventListener("click", function() { 
    inputElOne.value = getRandomPassword()
    inputElTwo.value = getRandomPassword()
})

inputElOne.addEventListener("click", function () {
    inputElOne.select()
    document.execCommand("Copy")
} )

inputElTwo.addEventListener("click", function () {
    inputElTwo.select()
    document.execCommand("Copy")
} )




