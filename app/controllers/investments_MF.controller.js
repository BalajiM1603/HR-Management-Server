const Investments = require("../models/investments_MF.model");


exports.AddInvest = (req,res) => {
    try {
        Investments.find({"userId": req.body.userId})
        .then(data => {
            let units = req.body.amount/req.body.nav;
                units = units.toFixed(2);
            if(data.length === 0) {
                const AddInvest = new Investments({
                    userId: req.body.userId,
                    investmentType: req.body.investmentType,
                    mutualFunds: [{
                        fundName: req.body.fundName,
                        nav: req.body.nav,
                        investedValue: req.body.amount,
                        units: units
                    }],
                    totalInvestedValue: req.body.amount
                })
                try {
                    AddInvest.save()
                    .then(data => {
                        res.status(200).json("Fund Started for SIP");
                    })
                } catch(error) {
                    res.status(400).send({
                        message: error.message || "Error"
                    });
                } 
            }
            else {
                let invested = 0;
                let mutualFunds = data[0].mutualFunds;
                
                for(var i=0;i<mutualFunds.length;i++) {
                    invested += Number(mutualFunds[i].investedValue);
                }
                var totalInvested = invested + Number(req.body.amount);
                console.log(totalInvested);
                try {
                    Investments.updateMany(
                        {"userId": req.body.userId},
                        { "$push": { "mutualFunds": { "fundName": req.body.fundName , "nav": req.body.nav, "investedValue": req.body.amount, "units" : units}}},
                        {"totalInvestedValue" : totalInvested }
                    )
                    .then(data => {
                        res.status(200).json("Fund Started for SIP")
                    })
                } catch(error) {
                    res.status(400).send({
                        message: error.message || "Error"
                    })
                }
            }
        })
    } catch(error) {
        res.status(400).send({
            message: error.message || "Error"
        })
    } 
}

exports.findOneInvest = (req,res) => {
    try{
        Investments.findOne({userId:req.query.userId})
        .then(investments => {
            res.status(200).json(investments);
        })
    } catch(error) {
        res.status(400).send({
            message: error.message || "Error"
        });
    }
}