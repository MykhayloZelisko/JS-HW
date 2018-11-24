let canvasHTML = document.getElementById("myCanvas");
let contextHTML = canvasHTML.getContext("2d");

let radiusClock = canvasHTML.width / 2 - 10;
let xCenterClock = canvasHTML.width / 2;
let yCenterClock = canvasHTML.height / 2;
let radiusNum = radiusClock - 50;

function showClock() {
    contextHTML.strokeRect(0, 0, canvasHTML.width, canvasHTML.height);

    contextHTML.strokeStyle = "#000000";
    contextHTML.lineWidth = 1;
    contextHTML.beginPath();
    contextHTML.arc(xCenterClock, yCenterClock, radiusClock, 0, 2 * Math.PI);
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.stroke();
    contextHTML.closePath();

    let radiusPoint;
    for (let tm = 0; tm < 60; tm++) {
        contextHTML.beginPath();
        if (tm % 5 == 0) {
            radiusPoint = 5;
        } else {
            radiusPoint = 2;
        }
        let xPointM = xCenterClock + radiusNum * Math.cos(-6 * tm * (Math.PI / 180) + Math.PI / 2);
        let yPointM = yCenterClock - radiusNum * Math.sin(-6 * tm * (Math.PI / 180) + Math.PI / 2);
        contextHTML.arc(xPointM, yPointM, radiusPoint, 0, 2 * Math.PI); //
        contextHTML.stroke();
        contextHTML.closePath();
    }

    for (let th = 1; th <= 12; th++) {
        contextHTML.beginPath();
        contextHTML.font = "bold 25px sans-serif";
        let xText = xCenterClock + (radiusNum + 25) * Math.cos(-30 * th * (Math.PI / 180) + Math.PI / 2);
        let yText = yCenterClock - (radiusNum + 25) * Math.sin(-30 * th * (Math.PI / 180) + Math.PI / 2);
        if (th <= 9) {
            contextHTML.strokeText(th, xText - 5, yText + 10);
        } else {
            contextHTML.strokeText(th, xText - 15, yText + 10);
        }
        contextHTML.stroke();
        contextHTML.closePath();
    }
}

function showTime() {
    let lengthSeconds = radiusNum - 10;
    let lengthMinutes = radiusNum - 15;
    let lengthHour = lengthMinutes / 1.5;
    let d = new Date();
    let t_sec = 6 * d.getSeconds();
    let t_min = 6 * (d.getMinutes() + (1 / 60) * d.getSeconds());
    let t_hour = 30 * (d.getHours() + (1 / 60) * d.getMinutes());
    let t_sec1 = t_sec - 6;
    let t_min1 = t_min - 1 / 10;
    let t_hour1 = t_hour - 1 / 120;

    contextHTML.beginPath();
    contextHTML.strokeStyle = "#FFFFFF";
    contextHTML.lineWidth = 3;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + (lengthSeconds + 1) * Math.cos(Math.PI / 2 - t_sec1 * (Math.PI / 180)), yCenterClock - (lengthSeconds + 1) * Math.sin(Math.PI / 2 - t_sec1 * (Math.PI / 180)));
    contextHTML.stroke();
    contextHTML.closePath();

    contextHTML.beginPath();
    contextHTML.strokeStyle = "#FFFFFF";
    contextHTML.lineWidth = 5;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + (lengthMinutes + 1) * Math.cos(Math.PI / 2 - t_min1 * (Math.PI / 180)), yCenterClock - (lengthMinutes + 1) * Math.sin(Math.PI / 2 - t_min1 * (Math.PI / 180)));
    contextHTML.stroke();
    contextHTML.closePath();

    contextHTML.beginPath();
    contextHTML.lineWidth = 7;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + (lengthHour + 1) * Math.cos(Math.PI / 2 - t_hour1 * (Math.PI / 180)), yCenterClock - (lengthHour + 1) * Math.sin(Math.PI / 2 - t_hour1 * (Math.PI / 180)));
    contextHTML.stroke();
    contextHTML.closePath();

    contextHTML.beginPath();
    contextHTML.strokeStyle = "#FF0000";
    contextHTML.lineWidth = 1;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthSeconds * Math.cos(Math.PI / 2 - t_sec * (Math.PI / 180)), yCenterClock - lengthSeconds * Math.sin(Math.PI / 2 - t_sec * (Math.PI / 180)));
    contextHTML.stroke();
    contextHTML.closePath();

    contextHTML.beginPath();
    contextHTML.strokeStyle = "#000000";
    contextHTML.lineWidth = 3;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthMinutes * Math.cos(Math.PI / 2 - t_min * (Math.PI / 180)), yCenterClock - lengthMinutes * Math.sin(Math.PI / 2 - t_min * (Math.PI / 180)));
    contextHTML.stroke();
    contextHTML.closePath();

    contextHTML.beginPath();
    contextHTML.lineWidth = 5;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthHour * Math.cos(Math.PI / 2 - t_hour * (Math.PI / 180)), yCenterClock - lengthHour * Math.sin(Math.PI / 2 - t_hour * (Math.PI / 180)));
    contextHTML.stroke();
    contextHTML.closePath();

    contextHTML.beginPath();
    contextHTML.strokeStyle = "#000000";
    contextHTML.fillStyle = "#ffffff";
    contextHTML.lineWidth = 3;
    contextHTML.arc(xCenterClock, yCenterClock, 5, 0, 2 * Math.PI);
    contextHTML.stroke();
    contextHTML.fill();
    contextHTML.closePath();
}

showClock();
window.setInterval(showTime, 1000);
