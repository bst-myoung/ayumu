class LottieAnimations {
    // static urlJSON = "./_assets/anims/";    
    static urlJSON = "https://nowaa.aws.designserver.space/welcome/assets/themes/nowaa/_assets/anims/";
    constructor(element) {
      this._isVisible = false;
      this.options = null;
      this.element = element;
      this.lottieObject = null;     
      this.isPlaying = false;             
      if(this.element) {
        this.intersectionObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {              
              this._isVisible = true;              
                setTimeout(() => {
                  this.animPlay();          
                }, "200")              
            } else {
              this._isVisible = false;                             
              this.animPause();       
            }
          }); //forEach
        }); // this.intersectionObserver
        this.intersectionObserver.observe(this.element);         


        this.element.addEventListener('click', () => {
          if(this.animIsPlaying()) {
            this.animPause()
          } else {
            this.animPlay();
          }
        });
      }



    } //constructor    
    handleFetch(fileJSON) {
      fetch(LottieAnimations.urlJSON + fileJSON)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load ' + fileJSON + ' JSON data');
        }
        return response.json();
      })
      .then(dataJSON => {
        this.options = {
          container: this.element,
          renderer: 'svg',
          loop: true,
          autoplay: false,
          animationData: dataJSON
        };
        this.lottieObject = bodymovin.loadAnimation(this.options);
      })
      .catch(error => {
        console.error('JSONデータの読み込みに失敗しました:', error);
      })
    }


    animIsPlaying() {
      return this.isPlaying === true;
    }

    animPlay() {
      this.lottieObject.play(); //bodymovinオブジェクト関数を呼び出す
      this.element.style.filter = 'brightness(1)';            
      this.element.style.opacity = '1';       
      this.isPlaying = true;
    }
    animPause() {
      // this.lottieObject.pause();//bodymovinオブジェクト関数を呼び出す
      this.element.style.filter = 'brightness(0.8)';
      this.element.style.opacity = '0.7';       
      this.isPlaying = false;
    }

  } // class LottieAnimations

  export default LottieAnimations;