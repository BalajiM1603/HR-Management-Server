module.exports = (app) => {
    const leaveApply = require('../controllers/leaveApply.controller')
    app.post("/api/leaveapply/add", leaveApply.save);
}