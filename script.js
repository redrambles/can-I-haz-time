var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var napTime = lunchTime + 2; // 2PM
var partyTime = 17; // 5PM
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var isPartyTime = false;
var timeEvent = document.getElementById("timeEvent");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
var lolcat = document.getElementById("lolcat");

var updateClock = function() {

    if (time == partyTime){
        messageText = "IZ PARTEE TIME!!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    } else if (time == napTime) {
        messageText = "IZ NAP TIME...";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    } else if (time == lunchTime) {
        messageText = "IZ NOM NOM NOM TIME!!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    } else if (time == wakeupTime) {
        messageText = "IZ TIME TO GETTUP.";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    } else if (time < noon) {
        messageText = "Good morning!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    } else if (time > evening) {
        messageText = "Good Evening!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    } else {
        messageText = "Good afternoon!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    }
    timeEvent.innerHTML = messageText; 
    lolcat.src = image;
    showCurrentTime();
};
    // Clock

    var showCurrentTime = function()
    {
        // display the string on the webpage
        var clock = document.getElementById('clock');
    
        var currentTime = new Date();
    
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";
    
        // Set hours 
        if (hours >= noon) 
        { 
            meridian = "PM"; 
        }  
        if (hours > noon) 
        { 
            hours = hours - 12; 
        }
        // Set Minutes
        if (minutes < 10)
        {
            minutes = "0" + minutes;
        }
        // Set Seconds
        if (seconds < 10)
        {
            seconds = "0" + seconds;
        }
        // put together the string that displays the time
        var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
    
        clock.innerText = clockTime;
    };

updateClock();
// one second
var oneSecond = 1000;
// Get the updateClock function to behave like a clock, by updating it every second
setInterval(updateClock, oneSecond);

var partyEvent = function() {
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      // text in the button should read "Party Over"
      // color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      // text in the button should read "PARTY TIME!"
      // color of the button should be "#222" (bonus!)
   }
};
partyTimeButton.addEventListener('click', partyEvent);


// Map the value of the selectors to their corresponding times (napTime, lunchTime, wakeupTime)
var wakeUpEvent = function(){
    wakeupTime = wakeUpTimeSelector.value;
};
var lunchEvent = function(){
    lunchTime = lunchTimeSelector.value;
};
var napEvent = function(){
    napTime = napTimeSelector.value;
};
// Monitor the selectors for any changes and map the new values
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
