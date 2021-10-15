module.exports = (app) => {
    const project = require("../controllers/projects.controller.js")

    app.get("/api/project/list",project.list);
    app.post("/api/project/add",project.save);
    app.get("/api/project/edit",project.findOne);
    app.put("/api/project/update",project.update);
    app.delete("/api/project/delete",project.delete);
}