'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.width * this.height;
    }
}
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor)
    {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Text: ${this.text}, color ${this.bgColor}`);
    }
}
const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.showMyProps();
console.log(div.area());

// const rect = new Rectangle(100, 20);
// console.log(rect.area());    