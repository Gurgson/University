/**
 * Napisz skrypt, który na podstawie zmiennych rectWidth i rectHeight stworzy łańcuch rectString zawierający pustą rankę o podanych wymiarach.
 * Ramka ma być zbudowana ze znaków w zmienej rectBorderSymbol.
 * Dodaj kod, który sprawdzi poprawność wszystkich zmiennych:
 * rectWidth i rectHeight - większe od -1 i mniejsze od 81
 * rectBorderSymbol - jeden dowolny znak oprócz znaków białych (spacja, tabulator, nowy wiersz itd.)
 * Dla przykładowych danych wyświetlenie rectString na konsoli powinno dać poniższy efekt:
 * #######
 * #     #
 * #     #
 * #     #
 * #######
 */
let rectWidth = 7;
let rectHeight = 5;
let rectBorderSymbol = "#";
let rectString = "";
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
if (
  rectWidth < -1 ||
  rectHeight < -1 ||
  rectWidth > 81 ||
  rectHeight > 81 ||
  rectBorderSymbol == " " ||
  rectBorderSymbol == "\t" ||
  rectBorderSymbol == "\n"
) {
  console.log("niewlasciwe dane");
  return;
}
for (let i = 0; i < rectWidth; i++) {
  rectString += "#";
}
rectString += "\n";
for (let i = 0; i < rectHeight - 2; i++) {
  rectString += "#";
  for (let j = 0; j < rectWidth - 2; j++) {
    rectString += " ";
  }
  rectString += "#\n";
}

for (let i = 0; i < rectWidth; i++) {
  rectString += "#";
}
rectString += "\n";
console.log(rectString);
