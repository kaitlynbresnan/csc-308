const stockFunctions = require('./stock-portfolio.js');

// 2.1
test('Testing portfolio creation -- success', () => {
    const result = stockFunctions.createPortfolio();
    expect(result).toEqual(new Map);
});


// 2.1/2.2
test('Testing if empty -- True', () => {
    portfolio = stockFunctions.createPortfolio();
    const result = stockFunctions.isEmpty(portfolio);
    expect(result).toBeTruthy();
});

// 2.2
test('Testing if empty -- False', () => {
    portfolio = stockFunctions.createPortfolio();
    stockFunctions.buyStock(portfolio, 'GOOGL', 5);
    const result = stockFunctions.isEmpty(portfolio);
    expect(result).toBeFalsy();
});


// 2.3
test('Testing new stock purchase -- success', () => {
    portfolio = stockFunctions.createPortfolio();
    stockFunctions.buyStock(portfolio, 'GOOGL', 5);
    const target = new Map([['GOOGL', 5]]);
    expect(target).toEqual(portfolio);
});

test('Testing different stock purchase -- success', () => {
    portfolio = stockFunctions.createPortfolio();
    stockFunctions.buyStock(portfolio, 'GOOGL', 5);
    stockFunctions.buyStock(portfolio, 'AAPL', 8);
    const target = new Map([['GOOGL', 5], ['AAPL', 8]]);
    expect(target).toEqual(portfolio);
});

test('Testing existing stock purchase -- success', () => {
    portfolio = stockFunctions.createPortfolio();
    stockFunctions.buyStock(portfolio, 'GOOGL', 5);
    stockFunctions.buyStock(portfolio, 'AAPL', 8);
    stockFunctions.buyStock(portfolio, 'GOOGL', 10);
    const target = new Map([['GOOGL', 15], ['AAPL', 8]]);
    expect(target).toEqual(portfolio);
});


// 2.4
test('Testing sale of existing stock -- success', () => {
    portfolio = stockFunctions.createPortfolio();
    stockFunctions.buyStock(portfolio, 'GOOGL', 5);
    stockFunctions.sellStock(portfolio, 'GOOGL', 3);
    const target = new Map([['GOOGL', 2]]);
    expect(target).toEqual(portfolio);
});

test('Testing sale of nonexistent stock -- fail', () => {
    portfolio = stockFunctions.createPortfolio();
    stockFunctions.buyStock(portfolio, 'GOOGL', 5);
    test = stockFunctions.sellStock(portfolio, 'AAPL', 3);
    const target = 'stock not found -- unable to sell';
    expect(target).toBe(test);
});


// 2.5
test('Count number of symbols -- success', () => {
    portfolio = stockFunctions.createPortfolio();
    stockFunctions.buyStock(portfolio, 'GOOGL', 5);
    stockFunctions.buyStock(portfolio, 'AAPL', 6);
    const target = stockFunctions.countSymbols(portfolio);
    expect(target).toBe(2);
});


// 2.6
test("Testing 'buying' 0 shares -- no add symbol", () => {
    portfolio = stockFunctions.createPortfolio();
    stockFunctions.buyStock(portfolio, 'GOOGL', 5);
    stockFunctions.buyStock(portfolio, 'AAPL', 0);
    const target = new Map([['GOOGL', 5]]);
    expect(target).toEqual(portfolio);
});

test('Test selling all shares -- remove symbol', () => {
    portfolio = stockFunctions.createPortfolio();
    stockFunctions.buyStock(portfolio, 'GOOGL', 5);
    stockFunctions.buyStock(portfolio, 'AAPL', 7);
    stockFunctions.sellStock(portfolio, 'GOOGL', 5);
        const target = new Map([['AAPL', 7]]);
    expect(target).toEqual(portfolio);
});


// 2.7
test('Testing amount of shares (exists) -- success', () => {
    portfolio = stockFunctions.createPortfolio();
    stockFunctions.buyStock(portfolio, 'GOOGL', 5);
    stockFunctions.buyStock(portfolio, 'AAPL', 6);
    const target = stockFunctions.amountShares(portfolio, 'GOOGL');
    expect(target).toBe(5);
});

test('Testing amount of shares (nonexistent) -- success', () => {
    portfolio = stockFunctions.createPortfolio();
    stockFunctions.buyStock(portfolio, 'GOOGL', 5);
    const target = stockFunctions.amountShares(portfolio, 'AAPL');
    expect(target).toBe(0);
});


// 2.8
test('Testing sale of too many shares -- error', () => {
    portfolio = stockFunctions.createPortfolio();
    stockFunctions.buyStock(portfolio, 'GOOGL', 5);
    expect(() => {stockFunctions.sellStock(portfolio, 'GOOGL', 6);}).toThrow('Not possible to sell this number of shares.');
});


// Reflection
/*
While I have written tests before, using TDD in this assignment was a new experience for me.
I was able to follow the test-first approach, and it was fairly straight forward, but not necessarily a method that came completely naturally to me.
Overall, after trying out TDD I think there are lots of pros from this method that are valuable.
Mainly, it's a great way to stay organized, and not get as easily overwhelmed since the task is broken down into pieces.
However, one aspect that I struggled with was fully writing my tests before having any code.
I think a method that would work better for me would be one that is similar to TDD but varies a bit in the order.
For example, writing the goal/header of the test case, then implementing in code, then fully writing the test and testing (as opposed to completely writing the test first), and finally refactoring just as in TDD.
*/