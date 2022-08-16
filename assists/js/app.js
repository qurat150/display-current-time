function bgImage() {
    var hours = new Date().getHours()
    if (hours >= 6 && hours < 12) {
        document.body.classList.add("morning-image")
    } else if (hours >= 12 && hours < 16) {
        document.body.classList.add("afternoon-image")
    } else if (hours >= 16 && hours < 19) {
        document.body.classList.add("evening-image")
    } else {
        document.body.classList.add("night-image")
    }
    var beforeMidday = "AM"
    if (hours > 12) {
        hours = hours - 12
        beforeMidday = "PM" //afterMidday
    }
    console.log(hours);
    setInterval(function () {
        var getMins = new Date().getMinutes();
        var getSecs = new Date().getSeconds();

        var displayTime = document.getElementById("displayTime").innerHTML = "The current Time is " + hours + " : " + getMins + " : " + getSecs + " " + beforeMidday
    }, 1000)
    console.log(displayTime);
}
