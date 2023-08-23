// Ayumu.js

export class Ayumu {
  constructor(stepRate, stepDistance, xPos, yPos) {

    this.stepRate = stepRate;
    this.stepDistance = stepDistance;
    this.xPos = xPos;
    this.yPos = yPos;


      document.querySelectorAll('.ayumu').forEach(ayumu => {
          ayumu.classList.remove('active');
      });
      setTimeout(() => {
          document.querySelector('.ayumu-initial').classList.add('active');
      }, 10);
  }
  ayumuBuild() {
      
  }
  ayumuHandleMove() {
      // document.addEventListener('keydown', (e) => {
      //     ayumuStartAnimMove();
      //     if(e.key === 'ArrowUp') {
      //         ayumuMoveUp();
      //     }
      //     if(e.key === 'ArrowRight') {
      //         ayumuMoveRight();
      //     }
      //     if(e.key === 'ArrowDown') {
      //         ayumuMoveDown();
      //     }
      //     if(e.key === 'ArrowLeft') {
      //         ayumuMoveLeft();
      //     }
      // });
      // document.addEventListener('keyup', (e) => {
      //     ayumuStartAnimIdle();        
      // });
      
      console.log('handle move');
  }
  ayumuStartAnimMove() {
      document.querySelector('.ayumu-idle').classList.remove('active');
      this.ayumuWalkAnimation();
  }
  ayumuWalkAnimation() {
      document.querySelector('#ayumu-move01').classList.add('active');
      document.querySelector('#ayumu-move02').classList.add('active');  
      return;      
  }
  ayumuStartAnimIdle() {
      document.querySelectorAll('.ayumu-move').forEach(ayumu => {        
          ayumu.classList.remove('active');
      });
      document.querySelector('.ayumu-idle').classList.add('active');
  }
  
  ayumuMoveUp() {    
      setTimeout(() => {
          document.querySelector('#ayumu').style.transform = 'translateX(' + xPos + 'px) translateY(' + ayumuUpdateY('up') + 'px)';
      }, this.stepRate)
  }
  ayumuMoveRight() {
      setTimeout(() => {
          document.querySelector('#ayumu').style.transform = 'translateX(' + ayumuUpdateX('right') + 'px) translateY(' + yPos + 'px)';
      }, stepRate)
  }
  ayumuMoveDown() {
      setTimeout(() => {
          document.querySelector('#ayumu').style.transform = 'translateX(' + xPos + 'px) translateY(' + ayumuUpdateY('down') + 'px)';
      }, stepRate)
  }
  ayumuMoveLeft() {
      setTimeout(() => {
          document.querySelector('#ayumu').style.transform = 'translateX(' + ayumuUpdateX('left') + 'px) translateY(' + yPos + 'px)';
      }, stepRate)
  }
  ayumuUpdateX(args) {
      stepTracker.stepTrackerUpdate();
      if(args === 'right') {
          return xPos = xPos + stepDistance;    
      }
      if(args === 'left') {
          return xPos = xPos - stepDistance;    
      }
  }
  ayumuUpdateY(args) {   
      stepTracker.stepTrackerUpdate();
      if(args === 'up') {
          return yPos = yPos - stepDistance;    
      }
      if(args === 'down') {
          return yPos = yPos + stepDistance;    
      }
  }
}