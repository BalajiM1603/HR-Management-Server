const mongoose = require('mongoose');

const cart = mongoose.Schema({
    funds : {
        type: Array,
        required: true,
    },
    userId: {
        type:String,
        required: true
    }
},{ 
    timestamps: true
})


module.exports = mongoose.model('Cart',cart); 