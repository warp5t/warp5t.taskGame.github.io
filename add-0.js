let button = document.getElementById('button');
let inhibitSpeeding = false;



function pushButton() {
    if (inhibitSpeeding === true) {
        button.style.backgroundColor = 'red';
        // ihibitSpeeding = false;
    } else if (inhibitSpeeding === false) {
        button.style.backgroundColor = 'azure';
        // ihibitSpeeding = true;
    }
    // console.log('button', button);
}

function speedingOver() {
    if (speedChange <= limitSpeed) {
        speedChange = speedChange + acceleration;
        // console.log('speedXchange <= limitSpeed');
    } else if (speedChange >= limitSpeed) {
        return 0;
        //console.log('speedXchange >= limitSpeed');
    }
}

function speedingLow() {
    if (speedChange > 0) {
        speedChange = speedChange - acceleration;
    } else if (speedChange <= 0 || speedChange <= 0) {
        if (speedChange < 0) {
            speedChange = 0
        }
        return 0;
    }
    //console.log('speedingLow');
}

function validSpeeding() {
    if (inhibitSpeeding === true) {
        // setInterval(speeding, 1500);
        speedingOver();
    }
    if (inhibitSpeeding === false) {
        speedingLow();
    }
}