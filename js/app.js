console.log('ok')

//recupero elementi dal DOM
const numberDOMElement = document.querySelector('.display-number')
console.dir(numberDOMElement)
const playBtnDOMElement = document.getElementById('play-btn')


playBtnDOMElement.addEventListener('click', function() {
    // genero un array di 5 numeri casuali
    const randomNumberArray = getArrayOfRandomIntBetween(1,100,5)
    console.log(randomNumberArray)
    //stampo a schermo i 5 numeri presenti nell'array
    numberDOMElement.innerHTML = randomNumberArray

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