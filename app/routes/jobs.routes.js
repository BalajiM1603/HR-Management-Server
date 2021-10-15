module.exports = (app) => {
    const Job = require("../controllers/jobs.controller.js");

    app.get("/api/job/list",Job.list);
    app.post("/api/job/add",Job.save);
    app.get("/api/job/edit",Job.findOne);
    app.put("/api/job/update",Job.update);
    app.delete("/api/job/delete",Job.delete);
}
