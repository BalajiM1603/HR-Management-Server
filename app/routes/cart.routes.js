module.exports = (app) => {
    const Cart = require("../controllers/cart.controller");

    app.post('/api/data/cart',Cart.findOne);
    app.get('/user/cart',Cart.list);
    app.post('/user/cart',Cart.remove);
}