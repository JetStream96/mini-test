# mini-test
A minimalist's Node.js testing framework and test runner, all in 39 lines of code.

### Usage
```js
    // Import the test framework.
    const miniTest = require('./mini-test')
    const [test, assertEquals] = [miniTest.test, miniTest.assertEquals]

    // Write test cases.
    test(() => {
        let adder = new Adder(3, 5)
        assertEquals(8, adder.add())
    }, 'Add result test')
```

In command line, go to ```example/tests``` and type

```
    node test-runner
```

All tests in ```example/tests``` will run. A summary along with details of failed tests will show:
```
    Test [Add result test (should fail)] failed: Assertion error: expected 7, but is 8.
    (c:\Data\Programming\Projects\mini-test.js\example\tests\adder-test.js)


    4 test(s) passed, 1 test(s) failed.
```

You can also run all tests in a single file. ```node adder-test``` produces the following output:
```    
    Test [Add result test (should fail)] failed: Assertion error: expected 7, but is 8.
```

This repo contains a complete example. In practice, only ```mini-test.js``` and ```test-runner.js``` are required.

### License
Public domain.
