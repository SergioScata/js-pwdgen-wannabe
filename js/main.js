// Questo è il file che contiene tutto il codice JS della pagina web

let name= prompt ("Inserisci il tuo nome");
let surname= prompt("Inserisci il tuo cogonome");
let favouritecolor= prompt("Inserisci il tuo colore preferito")

let passwordgenerator1=`
Questa è la tua nuova Password!
---${name}${surname}${favouritecolor}21---
`;

console.log(passwordgenerator1);


let choicenumber= prompt("Inserisci un numero a due cifre");
let choicenumber2= prompt("Inserisci un altro numero a due cifre")

choicenumber= parseInt(choicenumber);
choicenumber2= parseInt(choicenumber2);


let dividednumber= Math.floor (choicenumber / choicenumber2);

let passwordgenerator2=`
Questa è la tua incredibile password! Da non crederci vero?

---${name}${surname}${favouritecolor}${dividednumber}

`;

console.log(passwordgenerator2);