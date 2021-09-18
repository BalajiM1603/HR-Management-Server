module.exports = (app) => {
    const designation = require("../controllers/designation.controller.js")

    app.post("/api/designation/add",designation.save);
    app.get("/api/designation/list",designation.list);
}