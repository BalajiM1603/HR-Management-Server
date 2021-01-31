const mongoose = require('mongoose');

const cartMutualFund = mongoose.Schema({
    fundName : {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
    userId: {
        type:String,
        required: true
    }
},{
    timestamps: true
})


module.exports = mongoose.model('CartMF',cartMutualFund); 