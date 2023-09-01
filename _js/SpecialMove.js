//SpecialMove.js

export class SpecialMove {
    constructor(nameEn = "specialMove", nameJp = 'スペシャル', inputsMove = [], inputAtk = '') {
        this.nameEn     = nameEn;
        this.nameJp     = nameJp;
        this.inputsMove = inputsMove;
        this.inputAtk   = inputAtk;
    }

    moveListener(currentInputs, buffer) {        
        if(currentInputs.includes(this.inputAtk)) {
            
        }
    }

}

