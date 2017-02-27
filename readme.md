# mini-test
A minimalist's testing framework.

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
