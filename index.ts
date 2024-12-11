const _ = require('lodash');

function exampleFunction() {
  const data = [1, 2, 3, 4];
  const result = _.remove(data, (n) => n % 2 === 0);
  console.log('Resultado:', result);
}

exampleFunction();
