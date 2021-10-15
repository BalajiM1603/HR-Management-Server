module.exports = (app) => {
    const leave = require("../controllers/leaveType.controller");
    app.post("/api/leavetype/add", leave.save);
    app.get("/api/leavetype/list", leave.list);
    app.put("/api/leavetype/update", leave.update);
    app.get("/api/leavetype/edit", leave.findOne);
    app.delete("/api/leavetype/delete", leave.delete)
}