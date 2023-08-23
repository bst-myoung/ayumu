// GameButton.js
import { Ayumu } from './Ayumu.js';

export class GameButton {
  constructor(element, direction) {
      this.element = element;
      this.direction = direction;
      this.isPressed = false;
      this.isChanged = false;      
      this.listenPress();      
  } 
  listenPress() {
      document.addEventListener('keydown', event => {            
        if (event.key === this.element && !this.isPressed) {            
          this.buttonPress();
        }
      });
      document.addEventListener('keyup', event => {     
        if(event.key === this.element && this.isPressed)       
          this.buttonRelease();
      });
  }
  buttonPress() {  
      this.updatePress();      
      return this.isPressed = true;        
  }
  buttonRelease() {      
      this.updatePress();  
      return this.isPressed = false;
  }    
  updatePress() {        
      if(this.isChanged === true) {
          this.isChanged = false;
          return;
      }
      this.isChanged = true;        
      ///think a little more about how to handle this logic
  }    
  handleButtonPress(ayumu) {
    if(!this.isPressed) {
        return;
    }       
    ayumu.ayumuHandleMove(this.direction);    
  }
} 

