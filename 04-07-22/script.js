// Spread:
// 1) scrivere una funzione che unisce le proprietà di due oggetti
// const obj1 = {foo: 'bar'};
// const obj2 = {name: 'Mio nome'};
// // obj1 + obj2 = { foo: 'bar', name: 'Mio nome' }
// 2) Opzionale Miglioriamo la funzione e aggiungiamo una proprietà di nostra scelta. Il tutto deve essere un one-line
// const obj1 = {foo: 'bar'};
// const obj2 = {name: 'Mio nome'};
// // obj1 + obj2 = { foo: 'bar', name: 'Mio nome', altraProp: 'value' };
//1)
(function () {
  const obj1 = { foo: "bar" };
  const obj2 = { name: "Mio nome" };
  const totalObj = { ...obj1, ...obj2 };
  console.log(totalObj);
})();
//2
(function () {
  const obj1 = { foo: "bar" };
  const obj2 = { name: "Mio nome" };
  const objAcaso = { prodotto: "Tv", price: 400 };
  const totalObj = { ...obj1, ...obj2, ...objAcaso };
  console.log(totalObj);
})();

// Destructuring:
// Usiamo il filter per prendere solo le stringe >= 10 caratteri da un array, usando il destructuring per prendere la length
const array = ["Ciao?", "Oggi non ho capito niente sinceramente :)", "test :)"];

const prova = array.filter((e) => {
  return e.length >= 10;
});
console.log(prova);

// Get/Set
// Creiamo un oggetto shop come sotto, in cui avere una prop con get/set e:
// leggere _products nel getter - RIGA 47 OK
// sovrascrivere _products nel setter - RIGA 50
// contestualmente quando usiamo il setter mostriamo tutti i prodotti in innerHTML di body
// shop.products = [{id: 1, name: 'TV', price: 40}, {id: 2, name: 'PC', price: 30}]
// // -> deve mettere dentro il body: <li>TV - 40€</li><li>PC - 30€</li>

const shop = {
  _products: [
    { id: 1, name: "TV", price: 40 },
    { id: 2, name: "PC", price: 30 },
  ],

  get products() {
    return this._products;
  },
  set products(value) {
    // let [id = 0, name = "TV", price = 40] = value.split(" "); ---> PROVA con riga 60
    // this._products[0].id = id + 1;
    // this._products[0].name = name;
    // this._products[0].price = price;
    this._products = [...this._products, value];
  },
};
// shop.products = " Radio 50";
// shop._products = [{ id: 2, name: "PC", price: 30 }];
shop._products[0] = { id: 1, name: "Radio", price: 50 };

console.log(shop._products);

document.body.innerHTML = `<li>${shop.products[0].id}</li>
<li>${shop.products[0].name}</li>
<li>${shop.products[0].price}</li>
<li>${shop.products[1].id}</li>
<li>${shop.products[1].name}</li>
<li>${shop.products[1].price}</li>`;
