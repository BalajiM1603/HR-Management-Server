module.exports = (app) => {
    const client = require("../controllers/clients.controller.js")

    app.get("/api/client/list",client.list);
    app.post("/api/client/add",client.save);
    app.get("/api/client/edit",client.findOne);
    app.put("/api/client/update",client.update);
    app.delete("/api/client/delete",client.delete);
}