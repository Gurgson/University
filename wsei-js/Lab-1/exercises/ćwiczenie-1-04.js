/**
 * Napisz skrypt, który generuje losowy łańcuch o długości z zmiennej length składający się ze znaków alfabetu a-z i cyfr.
 * Wygenerowany Łańcuch umieść w zmiennej randomString
 */

let length = 30;
let randomString = "";
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
if (length < 0) {
  console.log("niewslasciwe dane");
  return;
}
for (let i = 0; i < length; i++) {
  let ranDigit = Math.round(Math.random() * (57 - 48) + 48);
  let ranLetter = Math.round(Math.random() * (122 - 97) + 97);

  switch (Math.round(Math.random() * 1)) {
    case 0:
      randomString += String.fromCharCode(ranDigit);
      break;
    case 1:
      randomString += String.fromCharCode(ranLetter);
      break;
  }
}

console.log(randomString);
