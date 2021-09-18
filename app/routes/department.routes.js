module.exports = (app) => {
    const department = require("../controllers/department.controller.js")

    app.post("/api/department/add",department.save);
    app.get("/api/department/list",department.list);
}