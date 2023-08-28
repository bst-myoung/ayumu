import { Ayumu } from './Ayumu.js';
import { GameButton } from './GameButton.js';
import { StepTracker } from './StepTracker.js';
import { Field } from './Field.js';
import { SpecialMove } from './SpecialMove.js';

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
    buttonPunch   : new GameButton('f', 'punch'),
}
const ayumu = new Ayumu('#ayumu', xPos, yPos);
const stepTracker = new StepTracker('#steptracker');
const specialInputListener = new SpecialMove('hadoken', ['down', 'right', 'punch']);

function startPage() {        
    requestAnimationFrame(gameClock);
    const theField = new Field('#field');
    theField.postClientRect();
} //startPage

function gameClock(timestamp) {
    
    const dt = timestamp - lastFrameTime;
    
    if(dt > 144) {        
        gameButtons.buttonUp.handleButtonPress(ayumu);
        gameButtons.buttonRight.handleButtonPress(ayumu);
        gameButtons.buttonDown.handleButtonPress(ayumu);
        gameButtons.buttonLeft.handleButtonPress(ayumu);
    
        specialInputListener.moveListener(gameButtons.buttonDown, gameButtons.buttonRight, gameButtons.buttonPunch);
        specialInputListener.checkSpecialInputs();


        stepTracker.stepCheck(ayumu);
        ayumu.ayumuWasMovedReset();
    
        lastFrameTime = timestamp;    
    }

    requestAnimationFrame(gameClock);

}

document.addEventListener('DOMContentLoaded', function () {    
    startPage ();
  });