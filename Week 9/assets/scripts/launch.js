const errMsg = document.getElementById('msg');
let launchControl = 1;

function tryLaunch() {
    if (intStatus != 3) {
        errMsg.innerText = 'You are not in sport mode';
        launchControl = 0;
    } 

    if (tractionState == 1) {
        errMsg.innerText = 'Turn off traction control';
        launchControl = 0;
    }
    	
    if (parkingState == 1) {
        errMsg.innerText = 'Parking brake is on';
        launchControl = 0;
    }

    if (batteryCharge == 0) {
        errMsg.innerText = 'Battery is not charged';
        launchControl = 0;
    }
    	
    if (gasLevel == 0){
        errMsg.innerText = 'You need gas';
        launchControl = 0;
    } 
    
    if (launchControl == 0) {
        launchControl = 1;
		document.getElementById('launch').src = './assets/images/lca0.PNG';
		new Audio('./assets/media/sputter.mp3').play();
    } else {
        errMsg.innerText = ' ';
        document.getElementById('launch').src = './assets/images/lca1.PNG';
		new Audio('./assets/media/launch.mp3').play();
    }
}


