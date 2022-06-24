//Creare un piccolo counter
//Partiamo dal solo body in HTML

//Generiamo da JS due bottoni ed un DIV
//Inseriamo gli elementi a schermo
//Nel div avremo sempre a schermo lo stato del nostro counter ("1" oppure "2" oppure "3", ...)
//Aggiungere al primo bottone la funzionalità di incremento
//Aggiungere al secondo bottone la funzionalità di decremento
//Bonus:

//mettiamo un limite di decremento a 0
//mettiamo un limite di incremento a 10
//Super bonus:

//Rimuovere il codice duplicato

let counterVal = 0;

const $box = document.createElement("div");
document.body.append($box);

const $button1 = document.createElement("button");
const $button2 = document.createElement("button");
$button2.innerHTML = "decremento";
$button1.innerHTML = "incremento";

document.body.append($box, $button1, $button2);

$button1.addEventListener("click", () => {
  if (counterVal < 10) {
    counterVal += 1;
    $box.innerHTML = counterVal;
  }
});

$button2.addEventListener("click", () => {
  if (counterVal > 0) {
    counterVal -= 1;
    $box.innerHTML = counterVal;
  }
});

//style
$box.style.display = "flex";
$box.style.border = "2px solid black";
$box.style.width = "30px";
$box.style.height = "20px";
$box.style.textAlign = "center";
