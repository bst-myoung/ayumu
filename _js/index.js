// import LottieAnimations from './LottieAnimations.js';
import { Ayumu } from './Ayumu.js';
import { GameButton } from './GameButton.js';

let xPos;
let yPos;
let stepCounter;
let stepRate;
let stepDistance;
let gameCounter = 0;
xPos = 0;
yPos = 0;
stepCounter = 0;
stepRate = 10;
stepDistance = 25;


const gameButtons = {
    buttonUp      : new GameButton('ArrowUp', 'up'),
    buttonRight   : new GameButton('ArrowRight', 'right'),
    buttonDown    : new GameButton('ArrowDown', 'down'),
    buttonLeft    : new GameButton('ArrowLeft', 'left'),    
}
const ayumu = new Ayumu();
ayumu.ayumuMoveUp();

function startPage() {        
    requestAnimationFrame(gameClock);
} //startPage

function gameClock() {

    gameButtons.buttonUp.handleButtonPress();
    gameButtons.buttonRight.handleButtonPress();
    gameButtons.buttonDown.handleButtonPress();
    gameButtons.buttonLeft.handleButtonPress();

    requestAnimationFrame(gameClock);    
}








class StepTracker {
    constructor(element) {
        this.element = element;
        this.stepTrackerBuild(this.element);    
    }
    stepTrackerBuild(elem) {
        document.querySelector(elem).innerHTML = stepCounter;
    }
    stepTrackerUpdate() {
        stepCounter++;
        document.querySelector('#steptracker').innerHTML = stepCounter;
    }
}
const stepTracker = new StepTracker('#steptracker');




document.addEventListener('DOMContentLoaded', function () {    
    startPage ();      
  });