//DOM
let quoteDiv = document.querySelector('.TopQuote');
let locationDiv = document.querySelector('.location');
let timeDiv = document.querySelector('.topTimeH1');
let topTimeP = document.querySelector('.topTimeH4');
let backPic = document.querySelector('.main-Div');
let greetingDiv = document.querySelector('.topTimeGreeting');
let moreLess = document.querySelector("#more-less");
let bottom = document.querySelector(".main-Bottom");
let TopQuote = document.querySelector(".TopQuote");

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
          //insert bottom API output
          ba1.textContent =`${data.timezone}`;
          ba2.textContent = `${data.day_of_year}`;
          ba3.textContent = `${data.day_of_week}`;
          ba4.textContent = `${data.week_number}`;
          //update greeting and background based upon time
          if(a >= 5 && a < 12){
            greetingDiv.textContent = "Good morning";
            bgDay.style.display = "block";
            bgNight.style.display = "none";
          } else if (a >= 12 && a < 19){
            greetingDiv.textContent ="Good afternoon";
            bgDay.style.display = "block";
            bgNight.style.display = "none";
          } else if (a >= 19 || a < 5){
            greetingDiv.textContent ="Good evening";
            bgNight.style.display = "block";
            bgDay.style.display = "none";
            // document.body.style.background = url('/assets/desktop/bg-image-nighttime.jpg');
          }
  
        }
        
    }
    //call when page loaded
    updateTime();
});

//More-less 
function toggleMoreLess(){
  let status = "more"
  if (moreLess.value == "more"){
    bottom.style.display = "block";
    TopQuote.style.display = "none"
    status = "more";
    console.log(status);
  } else if ( moreLess.value ==  "less" ){
    bottom.style.display ="none";
    TopQuote.style.display = "block"
    status = "less";
    console.log(status)
  }
}

moreLess.addEventListener('change', toggleMoreLess)

