module.exports = (app) => {
    const employmentType = require("../controllers/employmentType.controller.js")

    app.post("/api/employmentType/add",employmentType.save);
    app.get("/api/employmentType/list",employmentType.list);
}