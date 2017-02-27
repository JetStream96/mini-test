# mini-test
A minimalist's js testing framework and test runner, all in 38 lines of code.

### Usage
```js
    // Import the test framework.
    const miniTest = require('./mini-test');
    const [test, assertEquals] = [miniTest.test, miniTest.assertEquals];

    // Write test cases.
    test(() => {
        let adder = new Adder(3, 5);
        assertEquals(8, adder.add());
    }, 'Add result test');
```

In command line, go to ```example/tests``` and type

```
    node mini-test
```

All tests ```example/tests``` will run and a summary along with failed tests will show.

### License
Public domain.
