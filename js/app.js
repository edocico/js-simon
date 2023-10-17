console.log('ok')

//recupero elementi dal DOM
const numberDOMElement = document.querySelector('.display-number')
console.dir(numberDOMElement)
const playBtnDOMElement = document.getElementById('play-btn')
const timerDOMElement = document.querySelector('.timer')

let timer = 0
userNumberArray = []
rispArray = []

playBtnDOMElement.addEventListener('click', function() {
    // genero un array di 5 numeri casuali
    const randomNumberArray = getArrayOfRandomIntBetween(1,100,5)
    console.log(randomNumberArray)
    //stampo a schermo i 5 numeri presenti nell'array
    numberDOMElement.innerHTML = randomNumberArray
    // dopo 5 secondi faccio scomparire i numeri
    setTimeout(function() {
        numberDOMElement.classList.add('d-none')
        alert('ora i numeri scompaiono prova a ricordarli')
    }, 5000)
    // dopo 30 secondi chiedo con 5 prompt all'utente i numeri che ha visto prima 
    setTimeout(function() {
        for(let i = 0; i < 5; i++) {
            let risposta = parseInt(prompt('inserisci uno per uno i numeri che hai visto prima'))
            // se il numero della risposta è presente nell'array dei numeri generati lo pusho in un altro array
            if (userNumberArray.includes(risposta)) {
                rispArray.push(risposta)
            }
        }
    }, 30000)
    // in base alla lunghezza dell'array so quanti numeri l'utente ha indovinato
    console.log(rispArray.length)

})





// funzione generazione array di numeri casuali
function getArrayOfRandomIntBetween(min,max,number) {
    const randomArray = []
    while (randomArray.length < number) {
      const n = getRandomIntInclusive(min,max) 
    if (randomArray.includes(n) === false) {   
      randomArray.push(n)
    }
    }
    return randomArray
}

//funzione generazione numeri casuali
function getRandomIntInclusive(min,max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min)
}