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
const getProductHTML = (product) => {
  const { name, price } = product;
  return `<li>${name} - ${price}€</li>`;
};

const shop = {
  name: "Edgemonics",
  _products: [],
  _page: 1, // pagina corrente
  _per_page: 4, // numero di risultati per pagina

  get getProducts() {
    /**
     * Qui dentro dovremmo riuscire a paginare i prodotti.
     * Possiamo procurarci un indice iniziale ed uno finale lavorando con this._page e this._per_page
     * */
    console.log("Stai leggendo i prodotti di ", this.name);
    const endIndex = this._page * this._per_page;
    const startIndex = endIndex - this._per_page; // ... // ...
    const paginatedProducts = this._products.slice(startIndex, endIndex);

    return paginatedProducts;
  },

  set setProducts(newProducts) {
    /**
     * Il consiglio è quello di spostare la parte di renderHTML dentro una funzione indipendente,
     * così da rendere il metodo più snello
     * **/

    this._products = newProducts;

    const productsHTML = this.getProducts.map(getProductHTML).join("");
    document.querySelector(".articoli").innerHTML = `
          <ul>${productsHTML}</ul>
          
      `;
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
  },
};
shop.setProducts = [
  { id: 1, name: "TV", price: 40 },
  { id: 2, name: "PC", price: 30 },
  { id: 3, name: "Smartphone", price: 40 },
  { id: 4, name: "Apple", price: 30 },
  { id: 5, name: "TV", price: 40 },
  { id: 6, name: "PC", price: 30 },
  { id: 7, name: "Smartphone", price: 40 },
  { id: 8, name: "Apple", price: 300 },
];
