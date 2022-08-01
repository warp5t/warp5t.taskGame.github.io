let circleInfoMap = new Map();

// let FullDate_Map_X = new Map();
// let PosBefore_Map_X = new Map();
// let PosAfter_Map_X = new Map();
// let TimeDelta_Map_X = new Map();
// let Distance_Map_X = new Map();
// let CalcSpeed_Map_X = new Map();

let circleInfoSet = new Set();


let FullDate_Set_X = new Set();
let PosBefore_Set_X = new Set();
let PosAfter_Set_X = new Set();
let TimeDelta_Set_X = new Set();
let Distance_Set_X = new Set();
let CalcSpeed_Set_X = new Set();

let trigerInfCirclX = 1;
let trigerInfCirclY = 1;

let arrDataCircle =['fullDateX', 'posBeforeX','posAfterX','timeDeltaX','distanceX','calcSpeedX'];

function controlInfCircle(){
    if(toLeft === false && toRight === false && trigerInfCirclX === 1){
        //console.log('trigerInfCircX: ', trigerInfCirclX);
        calcSpeedX = distanceX/timeDeltaX;
        calcSpeedX = (Math.round(calcSpeedX * 100))/100;
        //arrDataCircle =[ fullDateX, posBeforeX,posAfterX,timeDeltaX,distanceX,calcSpeedX];
        //  circleInfoSet.add(arrDataCircle);
        //  circleInfoMap.set(arrDataCircle);
        addForMap_X();
        trigerInfCirclX = 0;
    }
    else if(toLeft === true && trigerInfCirclX === 0 || toRight === true && trigerInfCirclX === 0){
       // console.log('trigerInfCirclX: ', trigerInfCirclX);
        trigerInfCirclX = 1;
    }
    if(toUp === false && toDown === false && trigerInfCirclY === 1){
       // console.log('trigerInfCircY: ', trigerInfCirclY);
        calcSpeedY = distanceY/timeDeltaY;
        calcSpeedY = (Math.round(calcSpeedY * 100))/100;
        trigerInfCirclY = 0;
    }
    else if(toUp === true && trigerInfCirclY === 0 || toDown === true && trigerInfCirclY === 0){
       // console.log('trigerInfCirclY: ', trigerInfCirclY);
        trigerInfCirclY = 1;
    }
}