module.exports = (app) => {
    const sourceOfHire = require("../controllers/sourceOfHire.controller.js")

    app.post("/api/sourceofhire/add",sourceOfHire.save);
    app.get("/api/sourceofhire/list",sourceOfHire.list);
}