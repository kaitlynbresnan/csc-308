function createPortfolio() {
    const portfolio = new Map();
    return portfolio;
}

function isEmpty(portfolio) {
    if (portfolio.size === 0) {
        return true;
    }
    else {
        return false;
    }
}

function buyStock(portfolio, ticker_symbol, new_shares) {
    for (const key of portfolio.keys()) {
        if (key === ticker_symbol) {
            current_shares = portfolio.get(key);
            portfolio.set(ticker_symbol, current_shares + new_shares);
            return portfolio;
        }
    }
    if (new_shares != 0) {
        portfolio.set(ticker_symbol, new_shares);
        return portfolio;
    }
    return portfolio;
}

function sellStock(portfolio, ticker_symbol, sell_amount) {
    for (const key of portfolio.keys()) {
        if (key === ticker_symbol) {
            current_shares = portfolio.get(key);
            if (current_shares > sell_amount) {
                portfolio.set(ticker_symbol, current_shares - sell_amount);
                return portfolio;
            } else if (current_shares === sell_amount) {
                portfolio.delete(key);
                return portfolio;
            } else {
                throw new Error('Not possible to sell this number of shares.');
            }
        }
    }
    msg = 'stock not found -- unable to sell'
    return msg;
}

function countSymbols(portfolio) {
    count = 0;
    for (const key of portfolio.keys()) {
        count++;
    }
    return count;
}

function amountShares(portfolio, ticker_symbol) {
    for (const key of portfolio.keys()) {
        if (key === ticker_symbol) {
            shares = portfolio.get(key);
            return shares;
        }
    }
    return 0;
}

exports.createPortfolio = createPortfolio;
exports.isEmpty = isEmpty;
exports.buyStock = buyStock;
exports.sellStock = sellStock;
exports.countSymbols = countSymbols;
exports.amountShares = amountShares;