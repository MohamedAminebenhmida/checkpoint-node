var generator = require('generate-password');

var password = generator.generate({
	length: 10,
});

console.log(password);