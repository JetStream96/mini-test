const math = require('../math')
const Adder = math.Adder

// Import the test framework.
const miniTest = require('./mini-test')
const [test, assertEquals] = [miniTest.test, miniTest.assertEquals]

// Write test cases.
test(() => {
    let adder = new Adder(3, 5)
    assertEquals(true, adder.inputsAreValid)
}, 'Valid inputs')

test(() => {
    let adder = new Adder(3, "5")
    assertEquals(false, adder.inputsAreValid)
}, 'Invalid inputs')

test(() => {
    let adder = new Adder(3, 5)
    assertEquals(8, adder.add())
}, 'Add result test')

test(() => {
    let adder = new Adder(3, 5)

    // This test should fail.
    assertEquals(7, adder.add())
}, 'Add result test (should fail)')