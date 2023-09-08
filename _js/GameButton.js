// GameButton.js

export class GameButton {
  constructor(element, btnFunction) {
    this.element = element;
    this.btnFunction = btnFunction;    
    this.type = null;    
    this.duration = 0;
    this.isPressed = false;
    this.isChanged = false;
    this.assignType();
    this.listenPress();
  }
  assignType() {
    const validDirections = ['up', 'right', 'down', 'left'];
    const validActions = ['punch',];
    if(validDirections.includes(this.btnFunction)) {
      this.type = 'direction';
      return;
    }
    if(validActions.includes(this.btnFunction)) {
      this.type = "action";
      return;
    }    
  }
  listenPress() {
    document.addEventListener('keydown', event => {
      if (event.key === this.element && !this.isPressed) {
        this.buttonPress();        
      }
    });
    document.addEventListener('keyup', event => {
      if (event.key === this.element && this.isPressed)        
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
    if (this.isChanged === true) {
      // console.log(this.btnFunction + " held for " + this.duration);
      this.resetDuration();
      this.isChanged = false;      
      return;
    }
    this.isChanged = true;    
  }

  handleButtonPress(ayumu, inputBuffer) {        
    if (!this.isPressed) {
      return;
    }    
    this.duration++;
    switch (this.type) {
      case 'action':
          if(this.duration === 1) {
            ayumu.ayumuHandleAction(this.btnFunction);
            inputBuffer.addInput(this.btnFunction);
          }
          break;
      case 'direction':
          ayumu.ayumuHandleMove(this.btnFunction);          
          inputBuffer.addInput(this.btnFunction); 
          break;            
      default: break;
    }    
  }

  resetDuration() {
    this.duration = 0;
  }
}

