function header(exercise) {
    console.log("-----------------------", exercise, "-----------------------");
}
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
header("esercizio 1")

function area(l1,l2) {
    areaRettangolo= l1*l2
    return areaRettangolo
}

area(2,5)
console.log("l'area del rettangolo è", areaRettangolo);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
header("esercizio2")

function crazySum(num1,num2) {
    
    if (num1===num2) {
        tot= (num1+num2)*3
    }else{
        tot= num1+num2
    }
    return tot
}

crazySum(4,4)

console.log("il totale dei 2 numeri è", tot );
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
header("esercizio 3")


function crazyDiff(num) {
    if (num>19) {
        tot = (num - 19)*3
    }else{
        tot = 19 - num
    }
    return tot
}

crazyDiff(20)
console.log("il totale è",tot);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
header("eservizio4")

function boundary(n) {
    switch (true) {
        case n>20 && n<=100:
        return result="true"
        case n===400:
        return result="true"
        default:
        return result="false"
    }
}

boundary(40)
console.log("il numero è compreso tra 20 e 100 o è uguale a 400?", result);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
header("esercizio5")

function epify(string) {
    if (string!=="EPICODE") {
        return result= "EPICODE "+ string
    }else{
        return result= string
    }
}

epify("EPICODE")

console.log(result);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
header("esercizio6")

function check3and7(newnum) {
    if (newnum%3===0 && newnum%7===0) {
        return result= "il numero è sia multiplo di 3 che ti 7"
    }else{
        return result= "il numero non è multiplo di 3 e di 7"
    }
}

check3and7(20)
console.log(result);



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
header("esercizio7")

function reverseString(string) {
    result= string.split("")
    reverse = result.reverse()
    join = result.join("")
    return join
    
}

reverseString("ciao")

console.log(join);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
header("esercizio8")

function upperFirst(string) {
    words = string.slice(" ")
    console.log(words);
    capitalize = words.charAt(0).toUpperCase()
    console.log(capitalize);
    return capitalize
}

upperFirst("ciao da me che sono io")
console.log(capitalize);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
header("esercizio9")

function cutString(string) {
    result = string.split("")
    result.shift()
    result.pop()
    result = result.join("")
    return result
}

cutString("ciao")

console.log(result);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
header("esercizio10")

function giveMeRandom(n) {
    a = []
    for (let i = 0; i < n; i++) {
        a.push(Math.floor(Math.random()*11))
    }
    return a
}

giveMeRandom(5)

console.log(a);
/* SCRIVI QUI LA TUA RISPOSTA */
