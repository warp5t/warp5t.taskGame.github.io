let testButton = document.getElementById('testButton');

let averageSpeed;

function checkLogConsole() {
    console.log('--------------------- CHECK-LOG-CONSOLE -----------------------');
    console.log('------------------- coordinate X ----------------');
    console.log('fullDateX: ', fullDateX);
    console.log('posBeforeX (from): ', posBeforeX);
    console.log('posAfterX (to): ', posAfterX);
    console.log('timeDeltaX (duration): ', timeDeltaX, 'ms');
    console.log("distanceX: ", distanceX, 'px');
    console.log('calcSpeedX (speed): ', calcSpeedX, 'px/ms');
    console.log('------------------- coordinate Y ----------------');
    console.log('fullDateY: ', fullDateY);
    console.log('posBeforeY (from): ', posBeforeY);
    console.log('posAfterY (to): ', posAfterY);
    console.log('timeDeltaY (duration): ', timeDeltaY, 'ms');
    console.log("distanceY: ", distanceY, 'px');
    console.log('calcSpeedY (speed): ', calcSpeedY, 'px/ms');
    console.log('-----------------------------------------');
    console.log(circleInfoSet);
    console.log(circleInfoMap);


}

let FullDate_Map_X = new Map();
let PosBefore_Map_X = new Map();
let PosAfter_Map_X = new Map();
let TimeDelta_Map_X = new Map();
let Distance_Map_X = new Map();
let CalcSpeed_Map_X = new Map();


let count_X = 0;
let count_Y = 0;

function addForMap_X() {

    count_X++;

    FullDate_Map_X.set('FullDateX_' + count_X, fullDateX);
    PosBefore_Map_X.set('PosBeforeX_' + count_X, posBeforeX);
    PosAfter_Map_X.set('PosAfterX_' + count_X, posAfterX);
    TimeDelta_Map_X.set('TimeDeltaX_' + count_X, timeDeltaX);
    Distance_Map_X.set('DistanceX_' + count_X, distanceX);
    CalcSpeed_Map_X.set('CalcSpeedX_' + count_X, calcSpeedX);

    //console.log('cout_X: ',cout_X);

}

function checkMapConsole() {

    if(TimeDelta_Map_X.size > 10){
       TimeDelta_Map_X.clear();
       console.log('TimeDelta_Map_X ------ method clear');
    }

    let bigerVal;
    let lessValue;

    let value_0, value_1;

    for (let i = 0; count_X >= i; i++) {
        console.log('----------------------------------');

        value_0 = TimeDelta_Map_X.get(`TimeDeltaX_${i}`);
        value_1 = TimeDelta_Map_X.get(`TimeDeltaX_${i + 1}`);

        // if (value_0 > value_1 && typeof value_0 === typeof 111 && typeof value_1 === typeof 111) {
        //     bigerVal = value_0;
        //     lessValue = value_1
        // } else if (value_0 <= value_1 && typeof value_0 === typeof 111 && typeof value_0 === typeof 111) {
        //     bigerVal = value_1;
        //     //lessValue = value_0;
        // }
        
        // данную сортировку хотел использовать для внесения в Set коллекцию максимального и минимального значения 
        //  Set удобен тем что не запишет повторных значений

        if(typeof value_0 !== "number" || String(value_0) === 'NaN'){
            console.log(i);
            TimeDelta_Map_X.delete(`TimeDeltaX_${i}`);
            console.log(TimeDelta_Map_X.has(`TimeDeltaX_${i}`));
            console.log( `TimeDelta${i}  method has and delete` );
        }
         
    }
    // console.log('bigerVal; ', bigerVal);
    // console.log('lessValue; ', lessValue);

    console.log(FullDate_Map_X);
    console.log(PosBefore_Map_X);
    console.log(PosAfter_Map_X);
    console.log(TimeDelta_Map_X);
    console.log(Distance_Map_X);
    console.log(CalcSpeed_Map_X);
    console.log('======================================');
}



//console.log(cout_X + 'string');