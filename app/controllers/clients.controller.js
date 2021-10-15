const { response } = require("express");
const Client = require("../models/clients.model");

exports.save = async(req,res) => {
    const client = new Client({
        clientName: req.body.clientName,
        currency: req.body.currency,
        billingMethod: req.body.billingMethod,
        emailId: req.body.emailId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        mobileNumber: req.body.mobileNumber,
        fax: req.body.fax,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        country: req.body.country,
        industry: req.body.industry,
        companySize: req.body.companySize,
        description: req.body.description
    })
    let response
    try {
        response = await client.save()    
        res.status(200).json({data:response,msg:"Client Added Successfully!"});
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error"
        })
    }
}



exports.list = async (req,res) => {
    let response;
    try {
        response = await Client.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error"
        })
    }
        
    
    
}

exports.findOne = async (req,res) => {
    let response;
    try {
        response = await Client.findById(req.query.clientId)
        if(!response) {
            return res.status(400).json("Client not found");
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error"
        })
    }
}


exports.update = async(req,res) => {
    const client = {
        clientName: req.body.clientName,
        currency: req.body.currency,
        billingMethod: req.body.billingMethod,
        emailId: req.body.emailId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        mobileNumber: req.body.mobileNumber,
        fax: req.body.fax,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        country: req.body.country,
        industry: req.body.industry,
        companySize: req.body.companySize,
        description: req.body.description
    }
    let response;
    try {
        response = await Client.findByIdAndUpdate({_id:req.query.clientId},client,{new:true})        
        res.status(200).json({data:response, msg:"Client Updated Successfully!"});
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error"
        })
    }
}


exports.delete = async (req,res) => {
    let response;
    try {
            response = await Client.findByIdAndDelete({_id:req.query.clientId})
            res.status(200).json({data:response,msg:"Client Deleted Successfully!"})
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error"
        })
    }
}





