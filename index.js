const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let pass1 = document.getElementById("pass1-el")
let pass2 = document.getElementById("pass2-el")
let passGen = document.getElementById("passGen")

passGen.addEventListener("click", function () {
    for (let i = 0; i < 16; i++) {
        let randomNum = Math.floor(Math.random() * characters.length)
        let randomNum2 = Math.floor(Math.random() * characters.length)
        pass1.textContent += characters[randomNum]
        pass2.textContent += characters[randomNum2]
    }
})