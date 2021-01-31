module.exports = (app) => {
    const cartMutualFund = require("../controllers/cartMutualFund.controller");

    app.post('/api/data/cartMutualFund',cartMutualFund.save);
    app.get('/user/cart',cartMutualFund.list);
}