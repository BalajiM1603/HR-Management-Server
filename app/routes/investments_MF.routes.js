module.exports = (app) => {
    const Investments_MF = require("../controllers/investments_MF.controller");

    app.post("/api/data/investments_MF",Investments_MF.AddInvest);
    app.get("/user/investments/MF", Investments_MF.findOneInvest);
}