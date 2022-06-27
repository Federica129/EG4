// Sulla base dell'esercitazione del giorno, creare una pagina che mostri una navbar. Questa deve visualizzare:

//1 Un nome utente, preso da prompt salvi sul localStorage
//2 Lo stesso nome sarà visualizzato all'interno di questa navbar come testo
//3 Gli elementi HTML utilizzati dovranno essere dichiarati via JavaScript
//4 Bisogna fare un controllo (try) sul nome utente stesso, se non presente nel localStorage allora mostri un
//errore in console, e successivamente aggiunto (catch)

const newEl = (el) => document.createElement(el);
const $body = document.body;

const divEl = newEl("div");
const navEl = newEl("nav");
const titleEl = newEl("h4");
const nameTry = newEl("p");
const divEl2 = newEl("div");
const textEl = newEl("p");
const imgEl = newEl("img");
//
divEl2.className = "articolo";
titleEl.textContent = "Nome utente:";
textEl.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis neque earum cum dolorem rem dolorum sequi placeat, illo facere, nostrum ut dolores esse quam delectus at totam eum. Qui, dignissimos?";
imgEl.src = "https://picsum.photos/200/200?5";
//
const userLogIn = prompt("Ciao! Inserisci il tuo nome utente");
nameTry.textContent = userLogIn;

try {
  if (localStorage.getItem("username") !== userLogIn) {
    throw error;
  } else {
    $body.append(divEl, navEl, nameTry, divEl2);
    divEl.append(navEl);
    divEl2.append(imgEl, textEl);
    navEl.append(titleEl, nameTry);
  }
} catch (error) {
  localStorage.setItem("username", userLogIn);
  console.log("Nome utente invalido, prova con Pippo");
  alert("Nome utente invalido, prova con Pippo");
  document.body.append(imgEl);
  imgEl.src = "http://maurizioreale.it/wp-content/uploads/2016/01/errore.png";
}
