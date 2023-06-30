const liveClock = document.getElementById("display-clock");

//show digital clock
function liveTime(){
    let digitalTime = new Date();
    liveClock.textContent = digitalTime.toLocaleTimeString("en-ZA", 
    {hour12:false});
    setTimeout(liveTime,1000);
}
 liveTime();

 // show digital date
const currentDate = document.getElementById("date");

function liveDate(){
    let rightNow = new Date();
    
    let dayNum = rightNow.getDate();
    let monthNum = rightNow.getMonth() + 1;
    let yearNum = rightNow.getFullYear();


    currentDate.textContent = dayNum + "/" + monthNum + "/" + yearNum;
}

liveDate();




