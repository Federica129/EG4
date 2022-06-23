/// ---- Esercizi 22-06

// per tutti gli esercizi avremo:
//const array = [1, 2, 3, 4, 5, 6, 7, 8];

// forEach
// 1)fare console.log() di ogni elemento di array
// 2)fare un console.log() di ogni elemento, dopo un set timeout di (elemento * index)
// risultato: dopo 0s: console.log(1)
//            dopo 1s: console.log(2)
//            dopo 2s: console.log(3)

// filter
// 1)tenere dentro l'array solo i numeri pari
// risultato: [2,4,6,8]

// 2)tenere solo i numeri in comune con questo array:
// [10, 1, 2, 5, 6]
// utility: Array.includes oppure Array.indexOf
// risultato: [1,2,5,6]

//foreach 1)
(function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  elementsArray = (element, index, array) => {
    console.log(element);
  };
  const elementList = array.forEach(elementsArray);
  elementList;
  console.clear(); //oppure
  const prova = array.forEach((e, i, a) => {
    console.log(e);
  });
  prova;
})();

//(function () {
//Questo è quello che accade dietro al forEach 1
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// for (i = 0; i < array.length; i++) {
//   const item = array[i];
//  item;
//  console.log(item);
// }
//})();

//2)
(function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  array.forEach((e, i, a) => {
    setTimeout(() => {
      console.log(e);
    }, 1000 * i);
  });
})();
//filter 1)
(function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const numberPari = array.filter((e, i, a) => {
    return e % 2 === 0;
  });

  console.log(numberPari);
})();
console.clear();
(function () {
  //Questo è quello che accade dietro al filter 1
  //errore settimeout
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  let timer = 0;
  for (i = 0; i < array.length; i++) {
    setTimeout(() => {
      console.log(array[i]);
    }, timer);
    timer = timer + 1000;
  }
})();
console.clear();

(function creaArray(data) {
  //Questo è quello che accade dietro al filter 1
  //stampa 231318 array n°89
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  let numeriPari = [];
  const numeriDispari = [];
  for (let i = 1; i <= array.length; i++) {
    //const item = array[i];
    if (i % 2 === 0) {
      numeriPari.push(data[i]);
      //numeriPari = i;
      //console.log(numeriPari);
    } else {
      numeriDispari.push(data[i]);
    }
    return { numeriPari, numeriDispari };
    //console.log(item);
  }
})();
//2)
(function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const array2 = [10, 1, 2, 5, 6];
  //sameNumber = (e, i, a) => array2.includes(e);
  sameNumber = (e, i, a) => array2.indexOf(e) > -1;

  console.log(array.filter(sameNumber));
})();

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = [10, 1, 2, 5, 6];
