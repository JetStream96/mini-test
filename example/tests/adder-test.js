const Math = require('../math');
const Adder = Math.Adder;

// Import the test framework.
const miniTest = require('./mini-test');
const [test, assertEquals] = [miniTest.test, miniTest.assertEquals];

// Write test cases.
test(() => {
    let adder = new Adder(3, 5);
    assertEquals(true, adder.inputsAreValid);
});

test(() => {
    let adder = new Adder(3, "5");
    assertEquals(false, adder.inputsAreValid);
});

test(() => {
    let adder = new Adder(3, 5);
    assertEquals(8, adder.add());
});

test(() => {
    let adder = new Adder(3, 5);
    assertEquals(7, adder.add());
});