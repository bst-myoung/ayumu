// Ayumu.js

import { StepTracker } from './StepTracker.js';


export class Ayumu {
  constructor(elem, xPos, yPos) {
    this.elem = document.querySelector(elem);
    this.stepRate = 100;
    this.stepDistance = 33;
    this.xPos = xPos;
    this.yPos = yPos;
    this.wasMoved = false;    
    document.querySelectorAll('.ayumu').forEach(ayumu => {
        ayumu.classList.remove('active');
    });
    setTimeout(() => {
        document.querySelector('.ayumu-initial').classList.add('active');
    }, 10);
  }  
  ayumuWasMoved() {        
    return this.wasMoved;    
  }  
  ayumuWasMovedReset() {
    this.wasMoved = false;
  }

  ayumuBuild() {
      
  }
  ayumuHandleMove(direction) {
    switch (direction) {
      case 'up':        
      this.ayumuMoveUp();      
      break;
      case 'right':
      this.ayumuMoveRight();
      break;
      case 'down':
      this.ayumuMoveDown();        
      break;
      case 'left':
      this.ayumuMoveLeft();
      break;
      default:        
      break;
    }    
    this.ayumuBeginAnim();
    this.wasMoved = true;    
  }
  ayumuBeginAnim() {
    document.querySelector('.ayumu-idle').classList.remove('active');
    this.ayumuWalkAnim();
  }
  ayumuWalkAnim() {
      document.querySelector('#ayumu-move01').classList.add('active');
      document.querySelector('#ayumu-move02').classList.add('active');
  }
  ayumuStopAnim() {
    document.querySelector('#ayumu-move01').classList.remove('active');
    document.querySelector('#ayumu-move02').classList.remove('active');
    document.querySelector('.ayumu-idle').classList.add('active');
  }
  ayumuMoveUp() {             
    this.elem.style.transform = 'translateX(' + this.xPos +'px) translateY(' + this.ayumuUpdateY('up') + 'px)';                
  }
  ayumuMoveRight() {
    this.elem.style.transform = 'translateX(' + this.ayumuUpdateX('right') + 'px) translateY(' + this.yPos + 'px)';
  }
  ayumuMoveDown() {          
    this.elem.style.transform = 'translateX(' + this.xPos +'px) translateY(' + this.ayumuUpdateY('down') + 'px)';
  }
  ayumuMoveLeft() {
    this.elem.style.transform = 'translateX(' + this.ayumuUpdateX('left') + 'px) translateY(' + this.yPos + 'px)';
  }
  ayumuUpdateX(args) {
      // stepTracker.stepTrackerUpdate();
      if(args === 'right') {;
          return this.xPos = this.xPos + this.stepDistance;    
      }
      if(args === 'left') {
          return this.xPos = this.xPos - this.stepDistance;    
      }
  }
  ayumuUpdateY(args) {   
      // // stepTracker.stepTrackerUpdate();
      if(args === 'up') {                
          return this.yPos = this.yPos - this.stepDistance;    
      }
      if(args === 'down') {        
          return this.yPos = this.yPos + this.stepDistance;    
      }      
  }
}