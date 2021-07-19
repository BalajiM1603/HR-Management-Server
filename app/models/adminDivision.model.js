const mongoose = require('mongoose');


const division = mongoose.Schema({
    division: Array,
    sector: String
})


module.exports = mongoose.model("Division",division);