//DOM
let quoteDiv = document.querySelector('.TopQuote');
let locationDiv = document.querySelector('.location');
let locationDivMore = document.querySelector('.locationMore');
let timeDiv = document.querySelector('.topTimeH1');
let timeDivMore = document.querySelector('.topTimeH1More');
let topTimeP = document.querySelector('.topTimeH4');
let topTimePMore = document.querySelector('.topTimeH4More');
let backPic = document.querySelector('.main-Div');
let greetingDiv = document.querySelector('.topTimeGreeting');
let greetingDivMore = document.querySelector('.topTimeGreetingMore');
let moreLess = document.querySelector("#more-less");
let moreLessMore = document.querySelector("#more-lessMore");
let bottom = document.querySelector(".main-Bottom");
let TopQuote = document.querySelector(".TopQuote");
let mainDiv = document.querySelector(".main-Div");
let topMore = document.querySelector('.main-TopMore')
let topLess = document.querySelector('.main-TopLess')
let greetingLess = document.querySelector('.topTimeGreeting')
let greetingMore = document.querySelector('.topTimeGreetingMore')

//Quote
document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
const quote = document.querySelector(".quote");
const cite = document.querySelector(".cite");

  async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quote.textContent = data.content;
      cite.textContent = `- ${data.author}`;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }


  // call updateQuote once when page loads
  updateQuote();
});

//Location API
document.addEventListener("DOMContentLoaded", () => {
    //Dom elements
    
    async function updateLocation(){
        //Fetch location from location API
        const response = await fetch("https://freegeoip.app/json/");
        const data = await response.json();
        if (response .ok){
            //upate DOM elements
            locationDiv.textContent= `In ${data.city}, ${data.country_code}`;
            locationDivMore.textContent= `In ${data.city}, ${data.country_code}`;
        } else {
            console.log("Error@!")
        }
    }
    // call when page loads
    updateLocation()

});

// clock API
document.addEventListener('DOMContentLoaded', () => {
    //DOM elements
    
    let ba1 = document.querySelector('.bottomA1');
    let ba2 = document.querySelector('.bottomA2');
    let ba3 = document.querySelector('.bottomA3');
    let ba4 = document.querySelector('.bottomA4');
    let bgNight = document.querySelector(".bgNight");
    let bgDay = document.querySelector(".bgDay");

    async function updateTime(){
        const response = await fetch("http://worldtimeapi.org/api/ip");
        const data = await response.json();
        if(response.ok){
          //get hours and minutes for clock
          const now =  new Date();
          let a = now.getHours();
          let b = now.getMinutes();
          let c = data.datetime;
          let d = c.substr(11, 5);
          
          //insert hours, mins, and TZ into html
          timeDiv.textContent = d;
          topTimeP.textContent = ` ${data.abbreviation}`;
          timeDivMore.textContent = d;
          topTimePMore.textContent = ` ${data.abbreviation}`;
          //insert bottom API output
          ba1.textContent =`${data.timezone}`;
          ba2.textContent = `${data.day_of_year}`;
          ba3.textContent = `${data.day_of_week}`;
          ba4.textContent = `${data.week_number}`;
          //update greeting and background based upon time
          if(a >= 5 && a < 12){
            greetingDiv.textContent = "Good morning, it's currently";
            greetingDivMore.textContent = "Good morning, it's currently";
            bgNight.style.display="none"
            bgDay.style.display = "block"
          } else if (a >= 12 && a < 19){
            greetingDiv.textContent ="Good afternoon, it's currently";
            greetingDivMore.textContent ="Good afternoon, it's currently";
            bgNight.style.display="none"
            bgDay.style.display = "block"
            
          } else if (a >= 19 || a < 5){
            greetingDiv.textContent ="Good evening, it's currently";
            greetingDivMore.textContent ="Good evening, it's currently";
            bgDay.style.display="none"
            bgNight.style.display = "block"
            
          }
  
        }
        
    }
    //call when page loaded
    updateTime();
});

document.addEventListener('DOMContentLoaded', toggleMoreLess)

//More-less 
function toggleMoreLess(){
  let status = "less"
  if (this.value == "more"){
    toggleMore();
    console.log("more!")
  } 
  else if ( this.value ==  "less"){
    toggleLess();
    console.log("less!")
  }
}



function toggleMore(){
    bottom.style.display = "block";
    TopQuote.style.display = "none";
    topLess.style.display = "none";
    topMore.style.display = "grid";
    greetingMore.style.display = "block";
    greetingLess.style.display = "none";
    moreLess.value = "more";
    moreLessMore.value = "more";
    
}

function toggleLess(){

  bottom.style.display ="none";
  TopQuote.style.display = "block";
  topMore.style.display = "none";
  topLess.style.display = "grid";
  greetingMore.style.display = "none";
  greetingLess.style.display = "block";
  moreLess.value = "less";
  moreLessMore.value = "less";
}




moreLess.addEventListener('change', toggleMoreLess)
moreLessMore.addEventListener('change', toggleMoreLess)










