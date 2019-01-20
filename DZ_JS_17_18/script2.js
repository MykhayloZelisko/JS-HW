function showTime() {
    let sec = document.getElementById("sec");
    let min = document.getElementById("min");
    let hour = document.getElementById("hour");
    let date = new Date();
    let secAngle = 6 * date.getSeconds();
    let minAngle = 6 * (date.getMinutes() + 1 / 60 * date.getSeconds());
    let hourAngle = 30 * (date.getHours() + 1 / 60 * date.getMinutes());
    sec.style.transform = `rotate(${secAngle}deg)`;
    min.style.transform = `rotate(${minAngle}deg)`;
    hour.style.transform = `rotate(${hourAngle}deg)`;
}

window.setInterval(showTime, 1000);