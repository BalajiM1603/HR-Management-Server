const mongoose = require('mongoose');

const investments = mongoose.Schema({
    userId : {
        type: String,
        required:true
    },
    mutualFunds : {
        type: Array,
        required: true
    },
    investmentType: {
        type: String,
        required: true
    },
    totalInvestedValue: {
        type: Number,
        required: true
    }
},{ 
    timestamps: true
})


module.exports = mongoose.model("Investments_MF", investments);