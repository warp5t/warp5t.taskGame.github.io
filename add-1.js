//let infoCircle = new Map();

let posBeforeX, posAfterX;
let posBeforeY, posAfterY;

let m_secBeforeX, m_secAfterX;
let m_secBeforeY, m_secAfterY;

let fullDateX, fullDateY;

let distanceX, distanceY;

let timeDeltaX, timeDeltaY;

let calcSpeedX, calcSpeedY;

let termX = 1;
let termY = 1;

function monitoringCoordinate() {
    if (toLeft === false && toRight === false) {
        posAfterX = circleX;
    } else {
        posBeforeX = posAfterX;
    }
    if (toUp === false && toDown === false) {
        posAfterY = circleY;
    } else {
        posBeforeY = posAfterY;
    }
}

function monitoringTime_Date() {
    if (termX === 1 && toLeft === true || termX === 1 && toRight === true) {
        m_secBeforeX = Date.now();
        fullDateX = new Date();
        termX = 2;
        // console.log('termX === 1');
        // console.log('m_secBeforeX: ', m_secBeforeX);
    } else if (termX === 2 && toLeft === false && toRight === false) {
        m_secAfterX = Date.now();
        termX = 1;
        // console.log('termX === 2');
        // console.log('m_secAfterX: ', m_secAfterX);
    }
    if (termY === 1 && toUp === true || termY === 1 && toDown === true) {
        m_secBeforeY = Date.now();
        fullDateY = new Date();
        termY = 2;
        // console.log('termY === 1');
        // console.log('m_secBeforeY: ', m_secBeforeY);
    } else if (termY === 2 && toUp === false && toDown === false) {
        m_secAfterY = Date.now();
        termY = 1;
        // console.log('termY === 2');
        // console.log('m_secAfterY: ', m_secAfterY);
    }
}

function calcDistance() {
    if (toLeft === false && toRight === false) {
        distanceX = posAfterX - posBeforeX;
        distanceY = posAfterY - posBeforeY;
        distanceX = (Math.sqrt(distanceX * distanceX));
        distanceY = (Math.sqrt(distanceY * distanceY));
    }
}

function calculateSpeed() {
    if ( toLeft === false && toRight === false){
        calcSpeedX = distanceX/timeDeltaX;
        calcSpeedX = (Math.round(calcSpeedX * 100))/100; 
      //  console.log("calcSpeedX: ",calcSpeedX);
    }
    if(toUp === false && toRight === false){
        calcSpeedY = distanceY/timeDeltaY;
        calcSpeedY = (Math.round(calcSpeedY * 100))/100; 
     //   console.log("calcSpeedY: ",calcSpeedY);
    }
}

function calcDeltaTime(){
    if(toLeft === false && toRight === false){
        timeDeltaX = m_secAfterX - m_secBeforeX;
    }
    if(toUp === false && toRight === false){
        timeDeltaY = m_secAfterY - m_secBeforeY;
    }  
}
