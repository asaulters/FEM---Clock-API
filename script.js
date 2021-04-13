//DOM
let quoteDiv = document.querySelector('.main-TopQuote');




let quote;
function pullQuote(){
    loadJSON()
}



let quoteAPI =  'https://programming-quotes-api.herokuapp.com/';
// let quoteRequest = 


fetch('https://programming-quotes-api.herokuapp.com/')
    .then(response => {
        console.log(response);
        
    })
    .then(data => console.log(data))