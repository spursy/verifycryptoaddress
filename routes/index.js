const currencies = require('../common/currencies');
const router = require('koa-router')({
  prefix: '/address'
})


router.post('/verify', async (ctx, next) => {
  let body = ctx.request.body;
  if (!body || !body.address || !body.symbol) {
    ctx.body = {code: 404, message: "please input crypto address and crypto symbol."}
  }
  //testnet
  let nettype = body.nettype ? body.nettype : 'prod'
  let isValid = false;
  let currency = currencies.getByNameOrSymbol(body.symbol);
  if (currency && currency.validator) {
    isValid = currency.validator(body.address, body.symbol, nettype)
  }
  ctx.body = {code: 200, status: isValid};
})

router.post('/check', async (ctx, next) => {
  let body = ctx.request.body;
  if (!body || !body.address) {
    ctx.body = {code: 404, message: "please input crypto address."}
  }

  //testnet
  let nettype = body.nettype ? body.nettype : 'prod'
  let fuzzy_list = [];
  let all_currency = currencies.getAllCurrency()
  for (let i = 0; i < all_currency.length; i ++) {
    let currency = all_currency[i];
    if (currency && currency.validator) {
      let isValid = currency.validator(body.address, currency.symbol, nettype)
      if (isValid) {
        fuzzy_list.push(currency.symbol);
      }
    }
  }
  
  ctx.body = {code: 200, fuzzy_list: fuzzy_list};
})

router.get('/', async (ctx, next) => {
  ctx.body = "123";
})



module.exports = router
