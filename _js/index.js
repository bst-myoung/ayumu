import { _Howl as Howl } from "./howler.js";

import { Ayumu }         from './Ayumu.js';
import { AyumuMovement } from './AyumuMovement.js';
import { GameButton }    from './GameButton.js';
import { StepTracker }   from './StepTracker.js';
import { Field }         from './Field.js';
import { SpecialMove }   from './SpecialMove.js';
import { InputBuffer }   from './InputBuffer.js';
import { Sound }         from './Sound.js';


let xPos;
let yPos;
let lastFrameTime = 0;
xPos = 0;
yPos = 0;
lastFrameTime = 0;

const sound = new Sound();
const inputBuffer = new InputBuffer();
const gameButtons = {
    buttonDown    : new GameButton('ArrowDown', 'down'),
    buttonRight   : new GameButton('ArrowRight', 'right'),
    buttonLeft    : new GameButton('ArrowLeft', 'left'),    
    buttonUp      : new GameButton('ArrowUp', 'up'),
    buttonPunch   : new GameButton('f', 'punch'),
    buttonHado    : new GameButton('h', 'hado'),
}
let arrEmoji = ['⬇️','↘️', '➡️', '↙️', '⬅️','↖️', '⬆️', '↗️'];

const specialMoveData = [
    {
      nameEn: 'hadoken',
      nameJp: '波動拳',
      inputsMove: ['down', 'downleft', 'left'],
      inputsAttack: 'punch',
      emoji: ['⬇️', '↙️', '⬅️'],
      sfxUrl: '../sound/hado.wav',      
    },
    {
      nameEn: 'hadoken',
      nameJp: '波動拳',
      inputsMove: ['down', 'downright', 'right'],
      inputsAttack: 'punch',
      emoji: ['⬇️', '↘️', '➡️'],
      sfxUrl: '../sound/hado.wav',
    },
    {
      nameEn: 'shoryuken',
      nameJp: '昇竜拳',
      inputsMove: ['left', 'down', 'downleft'],
      inputsAttack: 'punch',
      emoji: ['⬅️', '⬇️', '↙️'],
      sfxUrl: '../sound/shoryu.wav',
    },
    {
      nameEn: 'shoryuken',
      nameJp: '昇竜拳',
      inputsMove: ['right', 'down', 'downright'],
      inputsAttack: 'punch',
      emoji: ['➡️', '⬇️', '↘️'],
      sfxUrl: '../sound/shoryu.wav',
    },
];

const specialMoves = {};

specialMoveData.forEach((moveData, index) => {
    specialMoves[`spc${index + 1}`] = new SpecialMove(
        moveData.nameEn,
        moveData.nameJp,
        moveData.inputsMove,
        moveData.inputsAttack,
        moveData.emoji,
        moveData.sfxUrl,
    );
});


const ayumu = new Ayumu('#ayumu', xPos, yPos);
const stepTracker = new StepTracker('#steptracker');

function handleAllButtonPresses(ayumu) {
    for(const button of Object.values(gameButtons)) {
        button.handleButtonPress(ayumu, inputBuffer);
    }
}
function checkSpecialMoves(ayumu, sound) {
    for(const special of Object.values(specialMoves)) {
        special.moveListener(inputBuffer.getSimultaneousInputs(), inputBuffer.getBuffer(), sound);
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
        checkSpecialMoves(ayumu, sound);
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