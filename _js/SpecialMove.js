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
            const inputChecklist = [];
            const alreadyChecked = [];
            let i = 0;            
            buffer.forEach((input) => { 
                if(!alreadyChecked.includes(input)) {
                    //最後のひ必須movementから☑
                    if(this.inputsMove.lastIndexOf(input) != -1) {
                        inputChecklist[i] = this.inputsMove.lastIndexOf(input);
                        i++;
                        alreadyChecked.push(input);
                    }
                }
            });
            if(!this.checkOrder(inputChecklist, i)) {
                return;
            }  
            this.executeMove();
        }
    }
    
    checkOrder(inputChecklist, orderCount) {
        let i = orderCount;
        if(inputChecklist.length === this.inputsMove.length) {
            for(let n = 0; n < inputChecklist.length; n++) {
                if(inputChecklist[n] != i - 1) {
                    return false; //入力順番を確保
                }
                i--;
            }
            return true;
        }
        return false;
    }

    executeMove() {
        console.log(this.nameEn + "!!");
    }

}

