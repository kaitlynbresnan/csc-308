const myFunctions = require('./sample-functions.js');


// div tests -- assume no invalid input(s)
test('Testing division whole numbers -- success', () => {
  const target = 3;
  const result = myFunctions.div(30, 10);
  expect(target).toBe(result);
});

test('Testing division decimal -- success', () => {
  const target = 0.5;
  const result = myFunctions.div(10, 20);
  expect(target).toBe(result);
});

test('Divide by 0 -- infinity', () => {
  const result = myFunctions.div(10, 0);
  expect(result).toEqual(Infinity);
});

test('Numerator 0 -- success', () => {
  const target = 0;
  const result = myFunctions.div(0, 10);
  expect(target).toBe(result);
});

test('Divide by 1 -- success', () => {
  const target = 5;
  const result = myFunctions.div(5, 1);
  expect(target).toBe(result);
});


// containsNumbers tests -- assume no invalid input
test('Testing contains numbers -- true', () => {
  const result = myFunctions.containsNumbers('2afdjk2alfd2');
  expect(result).toBeTruthy();
});

test('Testing contains numbers -- false', () => {
  const result = myFunctions.containsNumbers('afdjksalfd');
  expect(result).toBeFalsy();
});

test('Testing empty string -- false', () => {
  const result = myFunctions.containsNumbers('');
  expect(result).toBeFalsy();
});

// demonstration of bug in containsNumbers function
test('Testing space -- false', () => {
  const result = myFunctions.containsNumbers(' ');
  expect(result).toBeFalsy();
});
// tries to return true because space becomes 0