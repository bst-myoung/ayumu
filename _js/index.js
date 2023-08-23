import { Ayumu } from './Ayumu.js';
import { GameButton } from './GameButton.js';
import { StepTracker } from './StepTracker.js';

let xPos;
let yPos;
let lastFrameTime = 0;
xPos = 0;
yPos = 0;
lastFrameTime = 0;

const gameButtons = {
    buttonUp      : new GameButton('ArrowUp', 'up'),
    buttonRight   : new GameButton('ArrowRight', 'right'),
    buttonDown    : new GameButton('ArrowDown', 'down'),
    buttonLeft    : new GameButton('ArrowLeft', 'left'),    
}
const ayumu = new Ayumu('#ayumu', xPos, yPos);
const stepTracker = new StepTracker('#steptracker');

function startPage() {        
    requestAnimationFrame(gameClock);
} //startPage

function gameClock(timestamp) {
    
    const dt = timestamp - lastFrameTime;
    
    if(dt > 144) {        
        gameButtons.buttonUp.handleButtonPress(ayumu);
        gameButtons.buttonRight.handleButtonPress(ayumu);
        gameButtons.buttonDown.handleButtonPress(ayumu);
        gameButtons.buttonLeft.handleButtonPress(ayumu);
    
        stepTracker.stepCheck(ayumu);
        ayumu.ayumuWasMovedReset();
    
        lastFrameTime = timestamp;    
    }

    requestAnimationFrame(gameClock);

}

document.addEventListener('DOMContentLoaded', function () {    
    startPage ();
  });