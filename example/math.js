exports.Adder = class Adder {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        return this.x + this.y;
    }

    get inputsAreValid() {
        return typeof(this.x) === 'number' && typeof(this.y) === 'number';
    }
}