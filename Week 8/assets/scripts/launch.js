let sputter = new Audio('./assets/media/sputter.mp3'); 
let launch = new Audio('./assets/media/launch.mp3');
const errMsg = document.getElementById('msg');
let launchControl = 1;

function tryLaunch() {
    if (gasLevel == 0){
        errMsg.innerText = 'You need gas';
        launchControl = 0;
    } 
    
    if (batteryCharge == 0) {
        errMsg.innerText = 'Battery is not charged';
        launchControl = 0;
    }
    
    if (parkingState == 1) {
        errMsg.innerText = 'Parking brake is on';
        launchControl = 0;
    }

    if (tractionState == 1) {
        errMsg.innerText = 'Turn off traction control';
        launchControl = 0;
    }

    if (intStatus != 3) {
        errMsg.innerText = 'You are not in sport mode';
        launchControl = 0;
    } 
    
    if (launchControl == 0) {
        sputter.play();
        launchControl = 1;
    } else {
        launch.play();
        errMsg.innerText = ' ';

    }
}











function tryLunch() {
    if (gasLevel == 1 && batteryCharge == 1 && parkingState == 0 && tractionState == 0 && intStatus == 3){
		launch.play();
    } else {
		sputter.play();
    }
}

