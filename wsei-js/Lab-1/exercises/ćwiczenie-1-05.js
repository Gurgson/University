/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`.
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      75%                    100%
 */
let n = 30;
let m = 300;
let length = 50;
if (n >= m) {
  console.log("n nie jest mniejsze od m");
  return;
}
if (length < 0 || length > 50) {
  console.log("nie poprawana dlugosc progress baru");
  return;
}

let progressBar = "";
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
let per = n / m;
progressBar += "|";
let hash = Math.round(length * per);

for (let i = 0; i < hash; i++) {
  progressBar += "#";
}
for (let i = 0; i < length - hash; i++) progressBar += " ";
progressBar += "|\n0%";
for (let i = 0; i < length - 3; i++) {
  if (i == length / 2 - 3) {
    progressBar += per * 100 + "%";
    i += 3;
  } else {
    progressBar += " ";
  }
}
progressBar += "100%";

console.log(progressBar);
