# mini-test
A minimalist's js testing framework (only 43 sloc).

### Usage
```js
    // Import the test framework.
	const miniTest = require('./mini-test');
	const [test, assertEquals] = [miniTest.test, miniTest.assertEquals];

	// Write test cases.
	test(() => {
		let adder = new Adder(3, 5);
		assertEquals(8, adder.add());
	});
```

### License
Public domain.
