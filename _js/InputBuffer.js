//SpecialMove.js

export class InputBuffer {
    constructor(limit = 6, inputs = []) {        
        this.limit = limit;
        this.inputs = inputs;
        this.inputs.length = this.limit;
        this.toAdd = null;
        this.currentInputs = [];
    }

    resetBuffer() {
        this.toAdd = null;
        this.currentInputs = [];
    }

    getSimultaneousInputs() {
        return this.currentInputs;
    }

    printSimultaneousInputs() {
        console.log(this.currentInputs);
    }

    addInput(input) {
        this.currentInputs.push(input);
    }

    checkDiagonal(array) {
        const searchDown = 'down';    
        const searchUp = 'up';
        const searchLeft = 'left';
        const searchRight = 'right';
        const attack = 'punch';
        if(array[0] === searchDown) {
            switch (array[1]) {
                case searchLeft:
                    return searchDown+searchLeft;
                    break;
                case searchRight:
                    return searchDown+searchRight;                
                    break;
                case searchUp:
                    return null;
                    break;
                default: 
                    return searchDown;
                    break;
            }
            return;
        }
        if(array[0] === searchRight) {
            switch(array[1]) {
                case searchDown:
                    return searchDown+searchRight;
                    break;
                case searchUp:
                    return searchUp+searchRight;
                    break;
                case searchLeft:
                    return null;
                    break;
                default:
                    return searchRight;
                    break;                
            }
        }
        if(array[0] === searchLeft) {
            switch(array[1]) {
                case searchDown:
                    return searchDown + searchLeft;
                    break;                    
                case searchUp:
                    return searchUp + searchLeft;
                    break;
                case searchRight:
                    return null;
                    break;
                default:
                    return searchLeft;
                    break;
            }
        }
        if(array[0] === searchUp) {
            switch(array[1]) {
                case searchDown:
                    return null;
                    break;
                case searchLeft:
                    return searchUp+searchLeft;
                    break;
                case searchRight:
                    return searchUp+searchRight;
                    break;
                default:
                    return searchUp;
                    break;
            }
        }
    }

    updateBuffer() {
        const newInputs = [];
        newInputs[0] = this.checkDiagonal(this.getSimultaneousInputs());
        for (let i = 0; i < this.inputs.length - 1; i++) {
            newInputs[i + 1] = this.inputs[i];
        }
        this.inputs = newInputs;
    }

    getBuffer() {
        return this.inputs;
    }

    printBuffer() {
        console.log(this.inputs);
    }

}

