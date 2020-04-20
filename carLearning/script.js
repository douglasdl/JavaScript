var counter = 0;
var ai_carPos = 0;

var grassH = 100;
var roadH = 300;
var wallH = 100;
var carH = 50;
var sensor1H = 50;
var sensor2H = 50;
var sensor3H = 50;

var grassW = 100; // 100%
var roadW = 300; // 100%
var wallW = 50;
var carW = 100;
var sensor1W = 50;
var sensor2W = 500;
var sensor3W = 50;

// Statistics
var walls = 0;
var avoided = 0;
var crash = 0;


function tick() {
	counter++;
	document.getElementById('stepsDone').value = counter;
	moveWall();	// Move wall to the left
	moveRoad();
	checkColision();
	experience();
}

var tickInterval;

function runSimulation(state) {
	if(state == 1) {	
		// Run the simulation
		if(counter > 100) {
			runSimulation(0);
		} else {
			tickInterval = setInterval("tick();", 20); // Speed
		}
	} else {	
		// Stop the simulation
		clearInterval(tickInterval);
		counter = 0;
		document.getElementById('stepsDone').value = counter;

		// Reset Wall initial position
		document.getElementById('wall').style.left = null;
		document.getElementById('wall').style.right = '0px';

		// Reset ai_car initial position
		document.getElementById('ai_car').style.marginTop = '50px';
		ai_carPos = 0;

		// Reset Road initial position
		document.getElementById('roadImage').style.left = null;
		document.getElementById('roadImage').style.right = '0px';

		// Reset statistics
		walls = 0;
		avoided = 0;
		crash = 0;
	}
}
function moveRoad() {
	var getLane1X = document.getElementById('lane1').offsetLeft;
	var getLane1Y = document.getElementById('lane1').offsetTop;
	var getLane2X = document.getElementById('lane2').offsetLeft;
	var getLane2Y = document.getElementById('lane2').offsetTop;

	if(getLane1X <= -1280) {
		document.getElementById('lane1').style.marginTop = '0px';

		document.getElementById('lane1').style.right = null;
		var fimDo2 = getLane2X + 1280;
		document.getElementById('lane1').style.left = fimDo2 + 'px';
	} else {
		getLane1X -= 20; // Speed
		document.getElementById('lane1').style.left = getLane1X + 'px';
	}

	if(getLane2X <= -1280) {
		document.getElementById('lane2').style.marginTop = '0px';

		document.getElementById('lane2').style.right = null;
		var fimDo1 = getLane1X + 1280;
		document.getElementById('lane2').style.left = fimDo1 + 'px';
	} else {
		getLane2X -= 20; // Speed
		document.getElementById('lane2').style.left = getLane2X + 'px';
	}
}

function moveWall() {
	var getWallX = document.getElementById('wall').offsetLeft;
	var getWallY = document.getElementById('wall').offsetTop;
	//document.getElementById('debugTextArea').innerHTML += "[" + counter + "] Wall PosX: " + getWallX + " | Wall PosY: " + getWallY + "\n";
	//document.getElementById('debugTextArea').scrollTop = document.getElementById('debugTextArea').scrollHeight;
	
	var getAI_carX = document.getElementById('sensor_2').offsetLeft + 500;
	var getAI_carY = document.getElementById('ai_car').offsetTop - 10;

	// Teach AI to obtain as close to 100 as possible.
	var successRate = Math.floor((avoided/(avoided+crash)*100));

	

	document.getElementById('topDebug').innerHTML = "&nbsp;[" + counter + "]<br>&nbsp;Wall (" + getWallX + ", " + getWallY + ")<br>&nbsp;AI (" + getAI_carX + ", " + getAI_carY + ")<br>&nbsp;Walls: " + walls + " Avoided: " + avoided + " Crash: " + crash + " Success Rate: " + successRate + "%";

	if(getWallX <= 0) {
		walls++;
	} else {
		getWallX -= 20; // Speed
		document.getElementById('wall').style.left = getWallX + 'px';
	}
}

function moveCar(direction) {
	// Auto correct
	if(ai_carPos < 50) {
		ai_carPos = 50;
		document.getElementById('sensor_1').style.backgroundColor = 'red';
	} else {
		document.getElementById('sensor_1').style.backgroundColor = 'white';
	}
	if(ai_carPos > 200) {
		ai_carPos = 200;
		document.getElementById('sensor_3').style.backgroundColor = 'red';
	} else {
		document.getElementById('sensor_3').style.backgroundColor = 'white';
	}
	if(direction == 'down') {
		ai_carPos += 10;
	} else {
		ai_carPos -= 10;
	}
	document.getElementById('ai_car').style.marginTop = ai_carPos + "px";
}

function checkColision() {
	var getWallX = document.getElementById('wall').offsetLeft;
	var getWallY = document.getElementById('wall').offsetTop + 100; // 100 is the wall height

	var getAI_carX = document.getElementById('sensor_2').offsetLeft + 500;
	var getAI_carY = document.getElementById('ai_car').offsetTop - 0;


	// if(getWallX < getAI_carX && getAI_carY < getWallY) {
	

	if(getWallX < getAI_carX && getAI_carY >= getWallY - 100 && getAI_carY < getWallY || getWallX < getAI_carX && getWallY - 100 > getAI_carY && getWallY - 100 < getAI_carY + 50) {
		//document.getElementById('debugTextArea').innerHTML += "[WARNING!] Object ahead! \n";
		//document.getElementById('debugTextArea').scrollTop = document.getElementById('debugTextArea').scrollHeight;
		//moveCar('down');
		document.getElementById('sensor_2').style.backgroundColor = 'red';

		if(getWallX < 100) {
			crash ++;
		}

	} else {
		document.getElementById('sensor_2').style.backgroundColor = 'white';
		if(getWallX < 100) {
			avoided ++;
		}
	}
}

var lastWallCount = 0;
var lastAvoided = 0;
var lastCrash = 0;
var tryZone = 0;

function experience() {
	var aiZone;
	var wallZone;
	
	// Get AI and Wall zones
	var getWallY = document.getElementById('wall').offsetTop;
	var getAI_carY = document.getElementById('ai_car').offsetTop - 10;

	var getWallCenter = (getWallY - grassH) + (wallH / 2); // 100 is the size of the grass; 50 is the half of the wall height 
	

	if(getWallCenter <= (roadH / 2)) {
		// Zone 0
		document.getElementById('t_wall_zone').innerHTML = "0";
		wallZone = "0";
	} else {
		// Zone 1
		document.getElementById('t_wall_zone').innerHTML = "1";
		wallZone = "1";
	}

	var getAI_carCenter = (getAI_carY - grassH) + (carH / 2);
	if(getAI_carCenter <= roadH/2) {
		// Zone 0
		document.getElementById('t_ai_zone').innerHTML = "0";
		aiZone = "0";
	} else {
		// Zone 1
		document.getElementById('t_ai_zone').innerHTML = "1";
		aiZone = "1";
	}

	// Trying Action
	document.getElementById('t_trying').innerHTML = tryZone;

	// Move AI Car
	if(tryZone == 0) {
		moveCar("up");
	} else {
		moveCar("down");
	}

	// Read from experience "database"
	var buildvar = aiZone + wallZone + tryZone;
	var experienceDB = document.getElementById('succ_'+buildvar).innerHTML;

	var buildvarOther;
	var experienceDBOther;

	// Read from 'DB' and decide
	if(tryZone == 0) {
		buildvarOther = aiZone + wallZone + 1;
		experienceDBOther = document.getElementById('succ_'+buildvarOther).innerHTML;
		if(parseInt(experienceDBOther) > parseInt(experienceDB)+parseInt(10)) {
			buildvar = buildvarOther;
			experienceDB = document.getElementById('succ_'+buildvar).innerHTML;
			tryZone = 1;
		}
	}
	if(tryZone == 1) {
		buildvarOther = aiZone + wallZone + 0;
		experienceDBOther = document.getElementById('succ_'+buildvarOther).innerHTML;
		if(parseInt(experienceDBOther) > parseInt(experienceDB)+parseInt(10)) {
			buildvar = buildvarOther;
			experienceDB = document.getElementById('succ_'+buildvar).innerHTML;
			tryZone = 0;
		}
	}



	// Update DB only when wall is left most
	if(lastWallCount != walls) {
		// Do update
		if(lastAvoided != avoided) {
			experienceDB = parseInt(experienceDB) + parseInt(1);
			document.getElementById('succ_'+buildvar).innerHTML = experienceDB;
			lastAvoided = avoided;
		}

		if(lastCrash != crash) {
			experienceDB = parseInt(experienceDB) - parseInt(1);
			document.getElementById('succ_'+buildvar).innerHTML = experienceDB;
			lastCrash = crash;
		}
		
		lastWallCount = walls;
		tryZone = Math.floor(Math.random() * 2); // Random between 0 and 1

		// Rondomize all position
		var randomWallYPos = Math.floor(Math.random() * (200 + 1) + 0);
		document.getElementById('wall').style.marginTop = randomWallYPos + 'px';

		document.getElementById('wall').style.left = null;
		document.getElementById('wall').style.right = '0px';
	}
}