function on_page_load() {
    var interval = setInterval(set_time, 1000);
}

let secondsSince = 0;
function set_time() {
    secondsSince += 1;


    // Display seconds
    if (secondsSince == 1) {
        document.getElementById("time").innerHTML = secondsSince.toString() + " Second";
    } else {
        document.getElementById("time").innerHTML = secondsSince.toString() + " Seconds";
    }
    console.log(secondsSince);

    // Display Minutes
    if (secondsSince >= 60) {
        rem = secondsSince % 60;
        minutes = (secondsSince - rem) / 60
        if (minutes == 0) {
            document.getElementById("minutes").innerHTML = minutes.toString() + " Minute";
        } else {
            document.getElementById("minutes").innerHTML = minutes.toString() + " Minutes";
        }
    }

    // Messages cus why not
    if (secondsSince >= 60) {
        document.getElementById("min").innerHTML = "It has been a minute";
    }
    if (secondsSince >= 3600) {
        document.getElementById("hour").innerHTML = "It has been an hour, why are you still here?";
    }
    if (secondsSince >= 7200) {
        document.getElementById("2hour").innerHTML = "It has been 2 hours of your life you boring person.";
    }
}