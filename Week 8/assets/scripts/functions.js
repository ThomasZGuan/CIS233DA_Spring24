let gasLevel = 0, tractionState = 1, batteryCharge = 0, parkingState = 1, intStatus = 0;
const modeInd = document.getElementById('mode');
const shifter = document.getElementById('bttn_shifter');

showTime();

function getGas() {
    if (gasLevel == 0){
        gasLevel = 1;
        document.getElementById('gas').src = './assets/images/gas1.png';
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_1.PNG';

    } else {
        gasLevel = 0;
        document.getElementById('gas').src = './assets/images/gas0.png';
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_0.PNG';
    }
}

function traction() {
    if (tractionState == 1){
        tractionState = 0;
        document.getElementById('trac').src = './assets/images/trac1.png';
        document.getElementById('bttn_trac').src = './assets/images/bttn_trac_0.PNG';

    } else {
        tractionState = 1;
        document.getElementById('trac').src = './assets/images/trac0.png';
        document.getElementById('bttn_trac').src = './assets/images/bttn_trac_1.PNG';
    }
}

function battery() {
    if (batteryCharge == 0){
        batteryCharge = 1;
        document.getElementById('batt').src = './assets/images/batt1.png';
        document.getElementById('bttn_batt').src = './assets/images/bttn_batt_1.PNG';

    } else {
        batteryCharge = 0;
        document.getElementById('batt').src = './assets/images/batt0.png';
        document.getElementById('bttn_batt').src = './assets/images/bttn_batt_0.PNG';
    }
}

function parking() {
    if (parkingState == 1){
        parkingState = 0;
        document.getElementById('brake').src = './assets/images/p0.png';
        document.getElementById('bttn_park').src = './assets/images/bttn_park_0.PNG';

    } else {
        parkingState = 1;
        document.getElementById('brake').src = './assets/images/p1.png';
        document.getElementById('bttn_park').src = './assets/images/bttn_park_1.PNG';
    }
}

function setMode() {
    console.log ('entered setMode()');
    switch (intStatus) {
        case 0: 
            intStatus = 1;
            modeInd.innerText = 'ECO PRO';
            shifter.style.top = '720px';
            break;
        case 1: 
            intStatus = 2;
            modeInd.innerText = 'COMFORT';
            shifter.style.top = '740px';
            break;
        case 2: 
            intStatus = 3;
            modeInd.innerText = 'SPORT';
            shifter.style.top = '760px';
            break;
        default:
            intStatus = 0;
            modeInd.innerText = 'PARK';
            shifter.style.top = '700px';
            break;            
    }
}

