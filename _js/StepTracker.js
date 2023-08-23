// StepTracker.js
import { GameButton } from './GameButton.js';
import { Ayumu } from './Ayumu.js';

export class StepTracker {
  constructor(element) {
      this.element = document.querySelector(element);
      this.stepCounter = 0;
      this.stepTrackerBuild(this.element);    
  }
  stepCheck(ayumu) {
    if(ayumu.ayumuWasMoved()) {
      this.stepTrackerUpdate();   
      ayumu.ayumuBeginAnim(); 
      return;  
    }
    ayumu.ayumuStopAnim();
  }
  stepTrackerBuild(elem) {
      elem.innerHTML = this.stepCounter;
  }  
  stepTrackerUpdate() {
      this.stepCounter++;
      this.element.innerHTML = this.stepCounter;      
  }
}