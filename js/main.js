function startTime() {
    //pulls the current time and converts it to standard am:pm time
    var today = new Date(); //creates time stamps
    var hr = today.getHours(); //retrieves hours from the time stamp
    var min = today.getMinutes(); //retrieves minutes from the time stamp 
    var sec = today.getSeconds(); //retrieves the seconds from the stamp
    ap = (hr < 12) ? "AM" : "PM";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap; //formats the way the time is displayed

    //displays the months and days by name.
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; //Abbreviated the days, so when the current day hits, it shortens it down
    //provides the current day, month, and year.
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate(); // retrieves what day it is
    var curMonth = months[today.getMonth()]; // retrieves the month it is
    var curYear = today.getFullYear(); // retrieves the year it is
    var date = curWeekDay+", "+curMonth+" "+curDay+" "+curYear; // Formats which way the Day, Month, Date, and year shows up.
    document.getElementById("date").innerHTML = date; //index uses this to pull the date to the main page
    
    var time = setTimeout(function(){ startTime() }, 500);
}

    //Add's a zero in front of numbers<10
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}