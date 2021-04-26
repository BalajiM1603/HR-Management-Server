module.exports = (app) => {
    const Watchlist_MF = require("../controllers/watchlist_mf.controller");

    app.post('/api/data/watchlist/mutual-funds',Watchlist_MF.findOne);
    app.get('/user/watchlist/mutual-funds',Watchlist_MF.list);
    app.post('/user/watchlist/mutual-funds',Watchlist_MF.remove);
    app.get('/api/data/watchlist/mutual-funds/fundId',Watchlist_MF.findOneFund);
}