const Job = require("../models/jobs.model");

exports.save = async(req,res) => {
    console.log(req.body);
    const job = new Job({
        jobName: req.body.jobName,
        project: req.body.project,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        hours: req.body.hours,
        assignees: req.body.assignees,
        ratePerHour: req.body.ratePerHour,
        description: req.body.description,
        billingStatus: req.body.billingStatus,
        workItem:req.body.workItem
    })
    let response
    try {
        response = await job.save()    
        res.status(200).json({data:response,msg:"Job Added Successfully!"});
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error"
        })
    }
}



exports.list = async (req,res) => {
    let response;
    try {
        response = await Job.find()
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
        response = await Job.findById(req.query.jobId)
        if(!response) {
            return res.status(400).json("Job not found");
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error"
        })
    }
}


exports.update = async(req,res) => {
    const job = {
        jobName: req.body.jobName,
        project: req.body.project,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        hours: req.body.hours,
        assignees: req.body.assignees,
        ratePerHour: req.body.ratePerHour,
        description: req.body.description,
        billingStatus: req.body.billingStatus,
        workItem:req.body.workItem
    }
    let response;
    try {
        response = await Job.findByIdAndUpdate({_id:req.query.jobId},job,{new:true})        
        res.status(200).json({data:response, msg:"Job Updated Successfully!"});
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error"
        })
    }
}


exports.delete = async (req,res) => {
    let response;
    try {
            response = await Job.findByIdAndDelete({_id:req.query.jobId})
            res.status(200).json({data:response,msg:"Job Deleted Successfully!"})
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error"
        })
    }
}





