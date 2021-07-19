module.exports = (app) => {
    const AdminDivision = require("../controllers/adminDivision.controller");
    app.post("/admin/sector/division/add",AdminDivision.save);
    app.get("/admin/sector/division/list",AdminDivision.list);
    app.get("/admin/sector/division/edit",AdminDivision.findOne);
    app.get("/admin/sector/divisionBySector",AdminDivision.findBySector);
    app.put("/admin/sector/division/update",AdminDivision.update);
    app.delete("/admin/sector/division/delete",AdminDivision.delete);
}

