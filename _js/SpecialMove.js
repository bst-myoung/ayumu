//SpecialMove.js
import { Ayumu } from './Ayumu.js';
import { GameButton } from './GameButton.js';

export class SpecialMove {
    constructor(name, inputs) {
        this.name = name;
        this.inputs = inputs;
        this.totalInputs = this.inputs.length;
        this.input1OK = false;
        this.input2OK = false;
        this.input3OK = false;
    }
    moveListener(input1, input2, input3) {                
        if(input1.isPressed) {
            this.input1OK = true;
            console.log(this.input1OK);
            return;
        }
        if(this.input1OK) {
            if(input2.isPressed) {
                this.input2OK = true;                
                console.log(this.input2OK);
                return;
            }
            if(this.input2OK) {
                if(input3.isPressed) {        
                    console.log("input3 press is " + input3.isPressed);
                    this.input3OK = true;
                    return;
                }
                return;
            }
            return;
        }
    }
    checkSpecialInputs() {
        if(this.input1OK && this.input2OK && this.input3OK) {
            console.log("HADOOOOKEN!");
        } else {
            console.log("nada");
        }
    }
    
}

