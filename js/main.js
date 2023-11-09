// Richiedo all'utente le informazioni che mi servono

let name= prompt ("Inserisci il tuo nome");
let surname= prompt("Inserisci il tuo cogonome");
let favouritecolor= prompt("Inserisci il tuo colore preferito")
let password=name+surname+favouritecolor;

//Creato generatore password
let passwordgenerator1=`
Questa è la tua nuova Password!
---${password}21---
`;

console.log(passwordgenerator1);


let choicenumber= prompt("Inserisci un numero a due cifre");
let choicenumber2= prompt("Inserisci un altro numero a due cifre")

//Converto in numeri le string dei due prompt appena fatti
choicenumber= parseInt(choicenumber);
choicenumber2= parseInt(choicenumber2);


let dividednumber= Math.floor (choicenumber / choicenumber2);

//Creato secondo generatore password
let passwordgenerator2=`
Questa è la tua incredibile password! Da non crederci vero?

---${password}${dividednumber}---

`;

console.log(passwordgenerator2);

//Creato terzo generatore password
let passwordgenerator3=`
  Indovina un po'? Arriva un altra password solo per te!!

 ${password}${Math.floor(Math.random() * 100)};---
`;

console.log(passwordgenerator3);

let password1=(password+21);
let password2=(password+dividednumber);
let password3=(password+Math.floor(Math.random() * 100));

//Collego js a html
document.getElementById("password1").innerHTML= password1;
document.getElementById("password2").innerHTML= password2;
document.getElementById("password3").innerHTML= password3;

