const strings = require('../../strings/strings')

// Import the test framework.
const miniTest = require('../mini-test')
const [test, assertEquals] = [miniTest.test, miniTest.assertEquals]

// Write test cases.
test(() => {
    assertEquals(true, strings.reverse('abcd') === 'dcba')
}, 'reverse test')
