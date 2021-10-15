const Project = require("../models/projects.model");

exports.save = async(req,res) => {
    const project = new Project({
        projectName: req.body.projectName,
        clientName: req.body.clientName,
        projectCost: req.body.projectCost,
        projectHead: req.body.projectHead,
        projectManager: req.body.projectManager,
        projectUsers: req.body.projectUsers,
        description: req.body.description
    })
    let response
    try {
        response = await project.save()    
        res.status(200).json({data:response,msg:"Project Added Successfully!"});
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error"
        })
    }
}


exports.list = async (req,res) => {
    let response;
    try {
        response = await Project.find()
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
        response = await Project.findById(req.query.projectId)
        if(!response) {
            return res.status(400).json("Project not found");
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error"
        })
    }
}


exports.update = async(req,res) => {
    const project = {
        projectName: req.body.projectName,
        clientName: req.body.clientName,
        projectCost: req.body.projectCost,
        projectHead: req.body.projectHead,
        projectManager: req.body.projectManager,
        projectUsers: req.body.projectUsers,
        description: req.body.description
    }
    let response;
    try {
        response = await Project.findByIdAndUpdate({_id:req.query.projectId},project,{new:true})        
        res.status(200).json({data:response, msg:"Project Updated Successfully!"});
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error"
        })
    }
}


exports.delete = async (req,res) => {
    let response;
    try {
        response = await Project.findByIdAndDelete({_id:req.query.projectId})
        res.status(200).json({data:response,msg:"Project Deleted Successfully!"})
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error"
        })
    }
}

