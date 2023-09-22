// Wall.js

export class Wall {
    constructor( width = 10, height = 10, posX = 100, posY = 100) {
        this.width = width;
        this.height = height;
        this.x = posX;        
        this.y = posY;
    }

    placeWall() {
        let wall = document.createElement("div");
        wall.style.width = this.width + "px";
        wall.style.height = this.height + "px";
        wall.style.left = this.x + "px";
        wall.style.top = this.y + "px";
        wall.classList.add('wall');
        document.body.appendChild(wall);
    }

}