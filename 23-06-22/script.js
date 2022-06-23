// Timeout
//  Stampiamo dopo 1,5,10 secondi la data corrente in questo formato
//  "Ora : Minuti"
// possono essere 3 timeout diversi oppure bonus:
// usare un array ti timeout [1,5,10].forEach

function timeOut() {
  const ora = new Date().getHours();
  const minuti = new Date().getMinutes();
  const secondi = new Date().getSeconds();
  console.log(`Ora${ora}:${minuti} minuti ${secondi} secondi`);
}
setTimeout(timeOut, 1000);
setTimeout(timeOut, 5000);
setTimeout(timeOut, 10000);

(function () {
  const array = [1, 5, 10];
  const timeOut2 = () => {
    const ora = new Date().getHours();
    const minuti = new Date().getMinutes();
    const secondi = new Date().getSeconds();
    console.log(ora + ":" + minuti + secondi);
  };
  array.forEach((e, i, a) => {
    setTimeout(timeOut2, 1000 * e);
  });
})();

// Interval
// 1) Fare il console.log analogo a quello mostrato su time.is
// DOM
// 1) Prendiamo l'esercizo 1 e lo applichiamo al document.body.innerHTML

function myTimer() {
  console.clear();
  const ora = new Date().getHours();
  const minuti = new Date().getMinutes();
  const secondi = new Date().getSeconds();
  console.log(`Ora${ora}:${minuti}minuti ${secondi}secondi`);

  document.body.innerHTML = `<p>${ora}:${minuti}:${secondi}</p>`;
}

//setInterval(myTimer, 1000);
//clearInterval(myTimer, 5000);

// 2)Interval  dato un array [42, 23, 1, 7, 12, 99] estraiamo ogni secondo, come se
//fosse un tombola, un numero. Cancelliamo l'interval quando avremo pescato tutti i
//numeri possibili. tip: Contiamo quante volte abbiamo fatto parte l'intervallo

(function () {
  const array2 = [42, 23, 1, 7, 12, 99];
  const fn = (e, i, a) => {
    const random = Math.floor(Math.random() * array2.length);
    //if (array2 in [random] === [random]) {
    //   console.log("già uscito");
    // } else {
    console.log(array2[random]);
    //}
  };
  const timerID = setInterval(fn, 1000);
  setTimeout(() => {
    clearInterval(timerID);
  }, 1000 * array2.length);
})();
