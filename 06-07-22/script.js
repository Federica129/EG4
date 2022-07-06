// Object methods
// Dato un oggetto prodotto come quello dell'esempio calcoliamo il costo della variante con tutti
// gli addon attivi facendo la somma di tutti i values dentro product.addons. Usiamo Object.values per ottenere
// i costi aggiuntivi da sommare al product.price.
const product = {
  id: 1,
  name: "TV",
  price: 40,
  addons: {
    decoder: 10,
    qled: 40,
    stereo: 20,
  },
};
const prova = Object.values(product.addons);
//Con REDUCE
// const prova2 = prova.reduce((acc, e, i, a) => acc + e);
// const valPrice = product.price + prova2;
// console.log(prova);
// console.log(valPrice);
// console.log(prova2);

//Con FOREACH
let fullOptionalPrice = 0;
const total = prova.forEach((e) => {
  fullOptionalPrice += e;
});
console.log(fullOptionalPrice); // 70
const total2 = fullOptionalPrice + product.price;
console.log(total2); // 110
//const fullOptionalPrice = 0; // usiamo Object.values per sommare ed ottenere -> 110

// Get/Set
// 1Implementare una grafica semplice prendendo come spunto [questo shop]
// ( // https://xd.adobe.com/spec/3409f0fd-25f1-4668-428f-d25447f00e7b-4238/screen/d3fb646d-a698-4eea-bb8e-
// 91be0b0ae011/ ). La pagina deve comprendere:

// Lista di prodotti che vengono mostrati. (Possiamo gestire quelli nascosti sia non stampandoli che
//aggiungendo una classe per applicare un display:none);
// Paginazione con 3 bottoni per le pagine: (1,2,3).
// La parte con i filtri possiamo non implementarla al momento

//2 Partendo dal codice in calce:

// Scrivere il codice che permette al click su un bottone della paginazione di cambiare shop.page;
// Implementare il setter per la prop shop.page;
// Implementare renderHTML in modo da usarla quando necessario aggiornare il contenuto della pagina;
// Gestire la paginazione, si consiglia di farlo dentro il getter di shop.products.

const $articoli = document.querySelector(".articoli");
const $qSli = document.querySelectorAll(".articoli li");

const getProductHTML = (product) => {
  const { name, price, id, img } = product;
  return `<li><img src="${img}"> <h4>${name}</h4>\n<p>${price}€</p>
  <button id="${id}" class="buy">Info!</button></li>`;
};

const shop = {
  name: "Edgemonics",
  _products: [],
  _page: 1, // pagina corrente
  _per_page: 6, // numero di risultati per pagina
  _id: 0, // valore

  get getProducts() {
    console.log("Stai leggendo i prodotti di ", this.name);
    const endIndex = this._page * this._per_page; // 1 * 4 = 4 (alla pagina this._page = 1)
    const startIndex = endIndex - this._per_page; // 4 - 4 =0 (alla prima pagina this._page = 1)
    const paginatedProducts = this._products.slice(startIndex, endIndex);
    console.log(startIndex, endIndex);

    return paginatedProducts;
  },

  get getPrice() {
    alert(
      `Prezzo: ${this._products[this._id].price}€, stock: ${
        this._products[this._id].stock
      }`
    );
  },

  set idValue(id) {
    this._id = id;
  },

  set setProducts(newProducts) {
    /**
     * Il consiglio è quello di spostare la parte di renderHTML dentro una funzione indipendente,
     * così da rendere il metodo più snello
     * **/

    this._products = newProducts;
    this.renderHTML();
  },

  //   console.log(shop.setproducts)
  //   shop.setproducts = [
  //     { id: 1, name: "TV", price: 40 },
  //     { id: 2, name: "PC", price: 30 },
  //     { id: 3, name: "Smartphone", price: 40 },
  //     { id: 4, name: "Apple", price: 30 },
  //   ];
  set page(newPage) {
    /**
     * Aggiorniamo la pagina corrente.
     * Sarà che dobbiamo aggiornare il DOM anche qui?
     * */
    this._page = newPage;
    console.log(this._page);
    this.renderHTML();
  },

  renderHTML() {
    /**
     * Aggiorniamo il DOM stampando i risultati a schermo.
     * Avendo ora anche la paginazione, sarebbe il caso di mettere il nostro shop dentro un div specifico div.shop
     * con una struttura del genere
     * <body>
     *  div.shop -> aggiornato ad ogni chiamata della funzione
     *  div.pagination -> questo non si tocca mai
     * </body
     * e gestire la paginazione in modo separato, inserendo gli event listener una sola volta
     * **/
    const productsHTML = this.getProducts.map(getProductHTML).join(""); //join prende l'array e lo converte in stringa
    document.querySelector(".articoli").innerHTML = `
           <ul>${productsHTML}</ul> 
           
       `; //un ciclo map ad ogni oggetto di getProduct crea un l'html in stringa
    //separato in indici, con join diventa un'unica stringa
  },
};
let button = document.querySelectorAll("button");

// button.forEach((button) => {
//   button.addEventListener("click", () => {
//     shop.page = button.getAttribute("id"); //prende l'attributo id, il valore. gli assegno il valore a shop.page newpages
//   });
// });

shop.setProducts = [
  {
    id: 0,
    img: "https://picsum.photos/100/150",
    name: "TV",
    price: 40,
    stock: 3,
  },
  {
    id: 1,
    img: "https://picsum.photos/100/150",
    name: "PC",
    price: 30,
    stock: 7,
  },
  {
    id: 2,
    img: "https://picsum.photos/100/150",
    name: "Smartphone",
    price: 40,
    stock: 9,
  },
  {
    id: 3,
    img: "https://picsum.photos/100/150",
    name: "Apple",
    price: 30,
    stock: 79,
  },
  {
    id: 4,
    img: "https://picsum.photos/100/150",
    name: "TV",
    price: 40,
    stock: 79,
  },
  {
    id: 5,
    img: "https://picsum.photos/100/150",
    name: "PC",
    price: 30,
    stock: 29,
  },
  {
    id: 6,
    img: "https://picsum.photos/100/150",
    name: "Smartphone",
    price: 40,
    stock: 19,
  },
  {
    id: 7,
    img: "https://picsum.photos/100/150",
    name: "Apple",
    price: 300,
    stock: 6,
  },
  {
    id: 8,
    img: "https://picsum.photos/100/150",
    name: "TV",
    price: 40,
    stock: 79,
  },
  {
    id: 9,
    img: "https://picsum.photos/100/150",
    name: "PC",
    price: 30,
    stock: 29,
  },
  {
    id: 10,
    img: "https://picsum.photos/100/150",
    name: "Smartphone",
    price: 40,
    stock: 19,
  },
  {
    id: 11,
    img: "https://picsum.photos/100/150",
    name: "Apple",
    price: 300,
    stock: 6,
  },
];
// 1Implementare lo shop dell'esercizio di ieri;
// 2Applicare l'Event Delegation sulla paginazione inserendo un solo
//  event lister per i 3 bottoni;
// 3Applicare l'Event Delegation sulla lista per lanciare al click di ogni
// prodotto un alert con stock e prezzo.

//2
const $tasti = document.querySelector(".tasti");
const $buttons = document.querySelectorAll(".tasti button");

$tasti.addEventListener("click", function (event) {
  console.log("click su pagination");

  if (event.target.tagName === "BUTTON") {
    //event.preventDefault();
    console.log("stai cliccando su un button");
    const buttonEl = event.target;
    const newPage = Number(buttonEl.id);

    shop.page = newPage;
  }
});

//3

$articoli.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    shop.idValue = event.target.id; // è uguale al valore.. che si trasferisce al set idValue.. idValue = al secondo boxLI es, quindi id 1, e con l'alert specifico che voglio gli id di stock e price.
    shop.getPrice;

    //Con questo code prende i valori SOLO DELLA PRIMA PAGINA, quando cambi ERROR
    // const $id = event.target.id;

    // // alert(`Stock rimasti: ${("stock")}`);
    // console.log(
    //   `Stai cliccando stock:${shop.getProducts[$id].stock}\n prezzo:${shop.getProducts[$id].price}`
    // );
  } else {
    console.log("ora stai cliccando FUORI li");
  }
});
