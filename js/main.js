const convertToTwelve = document.querySelector('.twelveButton'); //Selector for 12Hr Button
const convertToTwentyFour = document.querySelector('.twenty-fourButton'); //Selector for 24Hr Button
convertToTwelve.addEventListener('click', convertHourDefault);  //Listens for the selection and then displays what is needed when the selection has been made
convertToTwentyFour.addEventListener('click', convertHourToMilitary); //Listens for the selection and then displays what is needed when the selection has been made


// Grabs current Date to display //
  var today = new Date();
  
    var date = today.getMonth()+1+'/'+today.getDate()+'/'+today.getFullYear();

  document.getElementById("date").innerHTML = date;

////////////////

let militaryTime = false;

 function convertHourToMilitary() { //function that allows the button to convert to military time
    if (militaryTime === false) {
        militaryTime = true;
    }
}
function convertHourDefault() { //function that allows the button to convert time back to standard
    if (militaryTime === true) {
        militaryTime = false;
    }

}

setInterval(displayClock, 10); 

function displayClock() { //Displays the time

    let currentTime = new Date();
    let hoursin24 = currentTime.getHours(); //Displays hours
    let minutes = currentTime.getMinutes(); //Displays minutes
    let seconds = currentTime.getSeconds(); //Displays seconds
    let amOrPm = '';

    if (hoursin24 < 12) {
        amOrPm = 'AM'; //Determines if its AM or PM
    }
    else{
        amOrPm = 'PM'; //If not am, then displays PM
    }
  
    if (hoursin24 > 12 & militaryTime === false) {
        hoursin24 = (24 - hoursin24) - 12;
    }

    hoursin12 = Math.abs(hoursin24);
    if (hoursin12 < 10) {
        hoursin12 = '0' + hoursin12; //Shows hours, 0  determines the 2nd value if its before
    }
    if (minutes < 10) {
        minutes = '0' + minutes;  //Shows minutes, 0 determines the 2nd value if its before 10
    }
    if (seconds < 10) {
        seconds = '0' + seconds; //Shows seconds, 0 determines the 2nd value if its before 10
    }

    let timeNow = hoursin12 + ':' + minutes + ':' + seconds + amOrPm; //Format in which time is shown on the webpage
    
    clock.innerHTML = timeNow;
    
}

displayClock();