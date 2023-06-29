function liveClock(){
    const liveTime = new Date();
    let hrs = liveTime.getHours();
    let mins = liveTime.getMinutes();
    let secs = liveTime.getSeconds();
    mins = checkTime(mins);
    secs = checkTime(secs);
    document.getElementById('display-clock').textContent= hrs + ":" + mins + ":" + secs;
    setTimeout(startTime, 1000);
}

function checkTime(i){
    if (i <10){
        i = "0" + i;
    }

    return i;
}
