// Create a rectangle object with width, height, and methods getArea() and getPerimeter(). Use this to access its properties

const rectangle = {
    width: 10,
    height: 20,
    getArea: function() {
        return this.width * this.height;
    },
    getPerimeter: function() {
        return 2 * (this.width + this.height);
    }
}

console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());