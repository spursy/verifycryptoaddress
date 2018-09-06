const CAValidator = require('wallet-address-validator');
const currencyvalidator = require('./currencyvalidator');

var CURRENCIES = [{
    name: 'bitcoin',
    symbol: 'btc',
    validator: CAValidator.validate
},
{
    name: 'bitcoin',
    symbol: 'usdt',
    validator: currencyvalidator.CheckUSDTAddress
},
{
    name: 'bitcoincash',
    symbol: 'bch',
    validator: CAValidator.validate
},{
    name: 'ethereum',
    symbol: 'eth',
    validator: CAValidator.validate
},{
    name: 'ripple',
    symbol: 'xrp',
    validator: CAValidator.validate
}, {
    name: 'eoscoin',
    symbol: 'eos',
    validator: currencyvalidator.CheckEOSAddress
}];


module.exports = {
    getByNameOrSymbol: function (currencyNameOrSymbol) {
        var nameOrSymbol = currencyNameOrSymbol.toLowerCase();
        for (var i = 0; i < CURRENCIES.length; i++) {
            var currency = CURRENCIES[i];
            if(currency.name === nameOrSymbol || currency.symbol === nameOrSymbol) {
                return currency;
            }
        }
        return null;
    },
    getAllCurrency: function () {
        return CURRENCIES;
    }
};
