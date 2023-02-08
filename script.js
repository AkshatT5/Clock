function displayTime() {
    var date = new Date();
    var y = date.getFullYear();
    var month = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ampm = 'AM';
    if (h ==0) {
        h = 12;
    }
    if (h>12) {
        h = h - 12;
        ampm = 'PM';
    }
    h = (h<10) ? '0'+h:h;
    m = (m<10) ? "0"+m:m;
    s = (s<10)? "0"+s:s;
    var time = y + "/" + month + "/" + d + " " + h + ":" + m + ":" + s+'' + ampm;
    document.getElementById('clockdisplay').innerHTML = time;
    document.getElementById("clockdisplay").textContent = time;
    setTimeout(displayTime, 1000);
}
displayTime();
