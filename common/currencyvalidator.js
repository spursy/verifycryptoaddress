const CAValidator = require('wallet-address-validator');
let validator = {
    CheckEOSAddress: function(origin_address) {
        try {
            var pattern = /^[a-z1-5]{12}$/;
            return pattern.test(origin_address);
        } catch (error) {
          throw error;
        }
    },
    CheckUSDTAddress: function(origin_address) {
        try {
            return CAValidator.validate(origin_address, 'btc')
        } catch (error) {
            throw error;
        }
    }
}

module.exports = validator;