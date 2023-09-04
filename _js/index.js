import { Ayumu }         from './Ayumu.js';
import { AyumuMovement } from './AyumuMovement.js';
import { GameButton }    from './GameButton.js';
import { StepTracker }   from './StepTracker.js';
import { Field }         from './Field.js';
import { SpecialMove }   from './SpecialMove.js';
import { InputBuffer }   from './InputBuffer.js';

let xPos;
let yPos;
let lastFrameTime = 0;
xPos = 0;
yPos = 0;
lastFrameTime = 0;

const inputBuffer = new InputBuffer();
const gameButtons = {
    buttonDown    : new GameButton('ArrowDown', 'down'),
    buttonRight   : new GameButton('ArrowRight', 'right'),
    buttonLeft    : new GameButton('ArrowLeft', 'left'),    
    buttonUp      : new GameButton('ArrowUp', 'up'),
    buttonPunch   : new GameButton('f', 'punch'),
}
let arrEmoji = ['⬇️','↘️', '➡️', '↙️', '⬅️','↖️', '⬆️', '↗️'];
const specialMoves =  {
    spcLHadoken    : new SpecialMove('hadoken', '波動拳', ['down', 'downleft', 'left'], 'punch', ['⬇️', '↙️', '⬅️']),
    spcRHadoken    : new SpecialMove('hadoken', '波動拳', ['down', 'downright', 'right'], 'punch', ['⬇️', '↘️', '➡️']),
    spcLSRK        : new SpecialMove('shoryuken', '昇竜拳', ['left', 'down', 'downleft'], 'punch', ['⬅️', '⬇️', '↙️']),
    spcRSRK        : new SpecialMove('shoryuken', '昇竜拳', ['right', 'down', 'downright'], 'punch', ['➡️', '⬇️', '↘️'] ),
}


const ayumu = new Ayumu('#ayumu', xPos, yPos);
const stepTracker = new StepTracker('#steptracker');

function handleAllButtonPresses(ayumu) {
    for(const button of Object.values(gameButtons)) {
        button.handleButtonPress(ayumu, inputBuffer);
    }
}
function checkSpecialMoves(ayumu) {
    for(const special of Object.values(specialMoves)) {
        special.moveListener(inputBuffer.getSimultaneousInputs(), inputBuffer.getBuffer());
    }
}

function gameClock(timestamp) {    
    const dt = timestamp - lastFrameTime;    
    if(dt > 72) {        
        inputBuffer.resetBuffer();
        handleAllButtonPresses(ayumu);    
        inputBuffer.updateBuffer();        
        // inputBuffer.printBuffer();
        // inputBuffer.printSimultaneousInputs();
        checkSpecialMoves(ayumu);                
        stepTracker.stepCheck(ayumu);
        ayumu.ayumuWasMovedReset();    
        lastFrameTime = timestamp; 
    }
    requestAnimationFrame(gameClock);
}
function startPage() {        
    const theField = new Field('#field');
    theField.postClientRect();
    requestAnimationFrame(gameClock);
}
document.addEventListener('DOMContentLoaded', function () {    
    startPage();
});