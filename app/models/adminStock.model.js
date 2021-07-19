const mongoose = require('mongoose')

const adminStockSchema = mongoose.Schema({
    stockName :String,
    marketCap :Number,
    peRatio :Number,
    pbRatio:Number,
    industryPE:Number,
    divYield:Number,
    bookValue:Number,
    epsTTM:Number,
    roe:Number,
    aboutCompany:String,
    organization:String,
    foundedYear:Number,
    managingDirector:String,
    promotorsShare: String,
    foreignInstitutions: String,
    retails: String,
    mutualFunds: String,
    domesticInstitutions: String,
    brandImg:String,
    sector:String,
    division:String,
    address:String,
    phone:String,
    launchDate:String,
    email:String,
    website:String
},
{
    timestamps: true
})

module.exports = mongoose.model('AdminStock',adminStockSchema)