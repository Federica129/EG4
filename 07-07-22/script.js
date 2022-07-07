/**
 * Da utente voglio trovare al caricamento della pagina una barra di testo vuota e un bottone "Aggiungi".
 * Da utente vogliamo che, dopo aver compilato l'input, premere invio e aggiungere un elemento alla lista.L'elemento deve contenere:
Un input di tipo checkbox;
 Uno span con il testo dell'input;
  *Da utente voglio che dopo ogni submit il form si svuoti.
 * Da utente voglio poter segnare alcuni elementi come fatti cliccando sull'input. (CSS :checked)
 *
 * 
 * Bonus track (opzionale)
DONE - Da utente voglio poter vedere l'orario (ora:minuti) in cui è stata aggiunta una task. Ref RIGA 37 AL 38
DONE Da utente voglio vedere dopo il testo in ogni elemento della lista un bottone "Elimina". Ref se si lavora solo sul DOM
DONE Da utente posso cancellare la task corrispettiva cliccando il bottone "Elimina".
Da utente voglio poter aggiornare la pagina senza perdere la lista corrente di task. Ref




Metodo con oggetti (opzionale)
Se si è confidenti di lavorare con oggetti (metodi, get/set, etc...) provare a sviluppare l'esercizo strutturando un oggetto con almeno:

Lista task in proprietà dedicata
Metodo per aggiunta task
Metodo per rimozione task
Metodo per stampare a schermo
 * */

//1

const formEl = document.querySelector(".todo-form");
const ulEl = document.querySelector(".task-list");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  //BOTTONE REMOVE
  //   const newEl = (el) => document.createElement(el);
  //   //   const buttonEl = newEl("Button");
  //   buttonEl.textContent = "Delete";

  const inputEl = document.querySelector("input");
  const newTask = inputEl.value;
  const hours = new Date().getHours(); //Bonus track
  const minuts = new Date().getMinutes();
  const newTaskHTML = `<li><input type="checkbox"/><span>${newTask}</span> - Add task at ${hours}:${minuts} <button class="remove">X</button></li>`;

  ulEl.innerHTML += newTaskHTML; // Per avere più di una task in lista mettendo +=. += a se stesso
  inputEl.value = ""; //Svuotare l'input dopo l'INVIO

  ulEl.addEventListener("click", (event) => {
    if (event.target.className === "remove") {
      event.target.closest("li").remove(); //BONUS TRACK Come cancellare l'inner
    }
  });
});
