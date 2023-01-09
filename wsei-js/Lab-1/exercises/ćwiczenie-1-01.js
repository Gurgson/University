/**
 * Napisz skrypt, który oblicza promień koła na podstawie pola powierzchni w zmiennej area
 * Wynik zapisz do zmiennej łańuchowej radius z dwoma miejscami po przecinku.
 */
let area = -1;
let radius = "";
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
radius = Math.sqrt(area / Math.PI, 2).toFixed(2);
if (area < 0) {
  console.log("niewlasciwe dane");
  return;
}
console.log(radius);
