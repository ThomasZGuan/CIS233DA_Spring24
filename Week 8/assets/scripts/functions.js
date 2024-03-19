let gasLevel = 0; 
let tractionState = 0;

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
    if (tractionState == 0){
        tractionState = 1;
        document.getElementById('trac').src = './assets/images/trac1.png';
        document.getElementById('bttn_trac').src = './assets/images/bttn_trac_0.PNG';

    } else {
        tractionState = 0;
        document.getElementById('trac').src = './assets/images/trac0.png';
        document.getElementById('bttn_trac').src = './assets/images/bttn_trac_1.PNG';
    }
}