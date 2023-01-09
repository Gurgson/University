/**
 * Napisz skrypt zamieniający wartość zmiennej decimalNumber  na liczbę rzemską w zakresie od 1 do 10.
 * Wynik zapisz do zmienej romanNumber.
 * Jeśli decimalNumber nie mieści sie w zakresie to umieść w romanNumber komunikat: Decimal number is out of range!
 * Jeśli decimalNumber jest równe undefined lub null to umieść w romanNumber komunikat: Decimal number is undefined or null!
 */
let decimalNumber = 2;
let romanNumber = "IV";
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
if (decimalNumber < 1 || decimalNumber > 10) {
  romanNumber = " Decimal number is out of range!";
} else if (!decimalNumber) {
  romanNumber = "Decimal number is undefined or null!";
} else {
  let tab = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  romanNumber = tab[decimalNumber - 1];
}
console.log(romanNumber);
