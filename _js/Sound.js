// Sound.js

export class Sound {
    constructor() {
        this.soundOn = false;
        this.soundBtn = document.getElementById('soundButton');
        this.soundBtn.addEventListener('click', () => {
            this.toggleSound();
        });
    }

    isSoundOn() {
        return this.soundOn;
    }

    toggleSound() {
        this.soundOn = !this.soundOn;
        this.soundBtn.classList.toggle('active');
    }

}
