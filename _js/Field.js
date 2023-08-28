// Field.js

export class Field {
  constructor(element) {
      this.element = document.querySelector(element);
      this.clientRect = this.element.getBoundingClientRect();       
  }
  postClientRect() {
    console.log(this.clientRect);
  }
}