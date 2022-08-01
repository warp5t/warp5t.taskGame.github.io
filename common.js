let toRight = false;
let toLeft = false;
let toUp = false;
let toDown = false;

let circleX = 200;
let circleY = 350;
let radCircle = 35;

let speedX = 0.5;
let speedY = 0.5;

let acceleration = 0.1;
let limitSpeed = 5;
let speedChange = 0;

window.addEventListener('keydown', moveX, false);
window.addEventListener('keydown', moveY, false);
window.addEventListener('keydown', switchSpeeding, false);
window.addEventListener('keyup', keyUpBool, false);

let canv = document.getElementById('canvas');
let ctx = canv.getContext('2d');

function draw() {

    ctx.clearRect(0, 0, canv.width, canv.height);

    ctx.beginPath();
    ctx.arc(circleX, circleY, radCircle, 0 * Math.PI, 2 * Math.PI, false);
    ctx.fillStyle = 'rgb(7, 233, 233)';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'red';
    ctx.stroke();

    ctx.font = "15px Tahoma";
    ctx.fillStyle = "green";

    ctx.fillText(`speedChange: ${speedChange}`, 30, 30);
    ctx.fillText(`toLeft:  ${toLeft}`, 30, 50);
    ctx.fillText(`toRight:  ${toRight}`, 30, 70);
    ctx.fillText(`toUp:  ${toUp}`, 30, 90);
    ctx.fillText(`toDown: ${toDown}`, 30, 110);
    ctx.fillText(`inhibitSpeeding: ${inhibitSpeeding}`, 30, 130);
    ctx.fillText(`circleX: ${circleX}`, 30, 150);
    ctx.fillText(`circleY: ${circleY}`, 30, 170);
    ctx.fillText(`posBeforeX : ${posBeforeX} , posAfterX : ${posAfterX}`, 30, 190);
    ctx.fillText(`posBeforeY : ${posBeforeY} , posAfterY : ${posAfterY}`, 30, 210);
    // ctx.fillText(`frame : ${frame}`, 30, 230);
}



function moveX(e) {
    if (e.keyCode === 37) {
        toLeft = true;
        toRight = false;
    } else if (e.keyCode === 39) {
        toRight = true;
        toLeft = false;
    } else return 0;
}

function moveY(e) {
    if (e.keyCode === 38) {
        toUp = true;
        toDown = false;
    } else if (e.keyCode === 40) {
        toDown = true;
        toUp = false;
    } else return 0;
    // console.log('moveY(e)');
}

function checkMove() {
    if (toRight === true) {
        toRigthX();
    } else if (toLeft === true) {
        toLeftX();
    }
    if (toUp === true) {
        toUpY();
    } else if (toDown === true) {
        toDownY();
    }
}

function switchSpeeding(e) {
    if (e.keyCode === 83) {
        inhibitSpeeding = true;
    }
}

function keyUpBool(e) {
    if (e.keyCode === 39) {
        toRight = false;
        circleX = Math.round(circleX);
    } else if (e.keyCode === 37) {
        toLeft = false;
        circleX = Math.round(circleX);
    } else if (e.keyCode === 38) {
        toUp = false;
        circleY = Math.round(circleY);
    } else if (e.keyCode === 40) {
        toDown = false;
        circleY = Math.round(circleY);
    }
    if (e.keyCode === 83) {
        inhibitSpeeding = false;
        // console.log('term 83');
    }
   
}

function toRigthX() {
    circleX = circleX + (speedX + speedChange);
}

function toLeftX() {
    circleX = circleX - (speedX + speedChange);
}

function toUpY() {
    circleY = circleY - (speedY + speedChange);
}

function toDownY() {
    circleY = circleY + (speedY + speedChange);
}

function engine() {

    pushButton();
    checkMove();
    draw();
}

function supportEngine() {
    validSpeeding();
    monitoringCoordinate();
    monitoringTime_Date();
    calcDistance();
    calculateSpeed();
    calcDeltaTime();
    controlInfCircle();
}

setInterval(supportEngine, 80);
setInterval(engine, 20);