// --- Esercizi 21-06

// Scriviamo una funzione che passata al map, dato un array di nomi torna una lista di "indice + Nome"
// es:
// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['1 - Luca', '2 - Gabriele']

//Scriviamo una funzione che passata al map, converta ogni elemento al propri indice inverso. es:

//const names = ['Luca', 'Gabriele', 'Richard', 'Roberta'];
//namesToList(names) // -> [3, 2, 1, 0];

// Scriviamo una funzione che passata al map, dato un array ne torni uno al contrario
// es:
// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['Gabriele', 'Luca'];

//ESERCIZIO 1
(function () {
  const names = ["Roberta", "Luca", "Gabriele", "Anna", "Paolo"];

  const indexAndNames = names.map((e, i, array) => i + "-" + e);

  console.log(indexAndNames);
})();

//ESERCIZIO 2
(function () {
  const names = ["Roberta", "Luca", "Gabriele", "Anna", "Paolo"];

  const reverseIndex = names.map(
    (element, index, array) => array.length - 1 - index
  );

  console.log(reverseIndex);
})();

//ESERCIZIO 3
(function () {
  const names = ["Roberta", "Luca", "Gabriele", "Anna", "Paolo"];

  const reverselist = names.map(
    (element, index, array) => names[array.length - 1 - index]
  );

  console.log(reverselist);
})();

//const array = [1, 2, 3, 4, 5];
const array = "ciao";
(function () {
  // Qui possiamo ridichiarare perch'è abbiamo una closure
  console.log('dentro, ma prima di nuovo "array"', array);

  //const array = [1, 2, 3, 4, 5];
  console.log("dentro", array);

  const fn = function () {
    console.log();
  };
})();

//console.log("dopo", array); da errore
