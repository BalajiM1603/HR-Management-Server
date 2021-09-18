module.exports = (app) => {
    const location = require("../controllers/location.controller.js")

    app.post("/api/location/add",location.save);
    app.get("/api/location/list",location.list);
}