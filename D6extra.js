function header(exercise) {
  console.log("-----------------------", exercise, "-----------------------");
}
// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
header("esercizio1");

function checkArray(array) {
  tot = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      tot += array[i];
      console.log(array[i], "è maggiore di 5");
    } else {
      console.log(array[i], "non è maggiore di 5");
    }
  }
  return tot;
}

const a = [];
for (let i = 0; i < 5; i++) {
  const element = Math.floor(Math.random() * 11);
  a.push(element);
}
console.log(a);

checkArray(a);
console.log(" il totale dei numeri maggiori di 5 è ", tot);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
header("esercizio2");

const shoppingCart = [
  {
    price: "20€",
    name: "iceCream",
    id: "08856",
    quantity: "20",
  },
  {
    price: "10€",
    name: "pasta",
    id: "08847",
    quantity: "50",
  },
  {
    price: "30€",
    name: "meat",
    id: "04556",
    quantity: "100",
  },
  {
    price: "5€",
    name: "fruit",
    id: "08589",
    quantity: "100",
  },
];

const shoppingCartTotal = (array) => {
  tot = 0;
  for (let i = 0; i < array.length; i++) {
    const element = parseInt(array[i].quantity);
    tot += element;
  }
  return tot;
};

console.log(shoppingCartTotal(shoppingCart));
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

header("esercizio3");

const addToShoppingCart = (array) => {
  array.push({
    price: "25€",
    name: "bread",
    id: "02549",
    quantity: "60",
  });

  tot = 0;
  for (let i = 0; i < array.length; i++) {
    const element = parseInt(array[i].quantity);
    tot += element;
  }
  return tot;
};

console.log(addToShoppingCart(shoppingCart));
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
header("esercizio4");

const maxShoppingCart = (array) => {
  max = 0;
  for (let i = 0; i < array.length; i++) {
    const element = parseInt(array[i].price);
    if (element > max) {
      max = element;
    }
  }
  return max;
};

console.log("il prezzo più alto è ", maxShoppingCart(shoppingCart) + "€");
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

header("esercizio5");

const latestShoppingCart = (array) => {
  return array[array.length - 1];
};

console.log(latestShoppingCart(shoppingCart));
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
header("esercizio6");

const loopUntil = (x) => {
  counter = 0;
  while (counter < 3) {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber > x) {
      counter++;
    } else {
      counter = 0;
    }
    console.log(randomNumber);
  }
};

loopUntil(6);
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
header("esercizio7");

const newArray = [
  {
    name: "banane",
    price: 10,
  },
  {
    name: "ananas",
    price: 20,
  },
  {
    name: "arance",
    price: "40",
  },
  {
    name: "kiwi",
    price: 30,
  },
];

const average = (array) => {
  sum = 0;
  counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i].price === "number") {
      sum += array[i].price;
      counter++;
    }
  }
  return sum / counter;
};

console.log("la media totale è ", average(newArray));
/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
header("esercizio8");

const arrayOfStrings = ["Carlo", "Marina", "Alberto", "Elia"];

const longest = (array) => {
  max = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i].split("");
    if (element.length > max.length) {
      max = element;
    }
  }
  return max.join("");
};

console.log("la stringa più lunga è ", longest(arrayOfStrings));
/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
header("esercizio9");

const spam = (emailContent) => {
  emailContent.toUpperCase();
  emailContent.split(" ");
  if (emailContent.includes("spam") || emailContent.includes("scam")) {
    console.log("la mail contiene spam e scam");
    return emailContent;
  } else {
    console.log("la mail non contiene spam o scam");
  }
};

spam("ho inviato una mail con spar");

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
header("esercizio10");

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
