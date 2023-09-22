// Field.js

import { Wall } from './Wall.js';

export class Field {
  constructor(element) {
      this.element = document.querySelector(element);
      this.clientRect = this.element.getBoundingClientRect();       
  }
  
  postClientRect() {
    console.log(this.clientRect);
  }

  createGeomery() {
    const wallsData = [
      {
        width: 20,
        height: 200,
        posX: 100,
        posY: 100,
      },
      {
        width: 200,
        height: 20,
        posX: 500,
        posY: 800,
      },
      {
        width: 800,
        height: 20,
        posX: 600,
        posY: 300,
      },
    ];
    const walls = {};
    wallsData.forEach((wallData, index) => {
      walls[`wall${index + 1}`] = new Wall(
        wallData.width,
        wallData.height,
        wallData.posX,
        wallData.posY,
      );
    });
    for(const wallKey in walls) {
      if(walls.hasOwnProperty(wallKey)) {
        const wall = walls[wallKey];
        wall.placeWall();
      }
    }
  }

}