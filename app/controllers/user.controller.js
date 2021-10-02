const User = require("../models/user.model");
const bcrypt = require('bcryptjs');


exports.save = async(req,res) => {
    
    const salt = await bcrypt.genSalt(10);
    if(req.body.password) {
        var hashPassword = await bcrypt.hash(req.body.password,salt)
    } else {
        var hashPassword = "*****";
    }
    const user = new User({
        employeeID:req.body.employeeID,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        emailId:req.body.emailId,
        nickName: req.body.nickName,
        password: hashPassword,
        department : req.body.department,
        location: req.body.location,
        designation : req.body.designation,
        sourceofhire : req.body.sourceofhire,
        employmentType : req.body.employmentType,
        employeeStatus : req.body.employeeStatus,
        reportingManager : req.body.reportingManager,
        joinDate : req.body.joinDate,
        seatingLocation : req.body.seatingLocation,
        phoneNumber : req.body.phoneNumber,
        currentExp : req.body.currentExp,
        personalMobileNumber : req.body.personalMobileNumber,
        address : req.body.address,
        aadhaarNumber : req.body.aadhaarNumber,
        panNumber : req.body.panNumber,
        personalEmailID : req.body.personalEmailID,
        dob : req.body.dob,
        age : req.body.age,
        jobDescription : req.body.jobDescription,
        aboutMe : req.body.aboutMe,
        askMeAboutExpertise : req.body.askMeAboutExpertise,
        exitDate : req.body.exitDate,
        gender : req.body.gender,
        maritalStatus : req.body.maritalStatus,
        workExperience: req.body.workExperience,
        educationalDetails: req.body.educationalDetails,
        dependentDetails: req.body.dependentDetails,
    })
    // console.log(user);

    user.save()
    .then(data => {
        console.log(data);
        res.status(200).json({data:data,msg:"User Added Successfully!"});
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}


exports.list = (req,res) => {
    User.find()
    .then(users => {
        res.status(200).json({data:users})
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}


exports.findOne = (req,res) => {
    User.findById(req.query.userId)
    .then(user => {
        if(!user) {
            return res.status(400).json("user not found");
        }
        res.status(200).json({data:user})
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}


exports.update = async(req,res) => {
    const salt = await bcrypt.genSalt(10);
    if(req.body.password) {
        var hashPassword = await bcrypt.hash(req.body.password,salt)
    } else {
        var hashPassword = "";
    }
    
    if(req.body.password) {
        var user = {
            password: hashPassword
        }
    } else {
        var user = {
            employeeID:req.body.employeeID,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            emailId:req.body.emailId,
            nickName: req.body.nickName,
            password: hashPassword,
            department : req.body.department,
            location: req.body.location,
            designation : req.body.designation,
            sourceofhire : req.body.sourceofhire,
            employmentType : req.body.employmentType,
            employeeStatus : req.body.employeeStatus,
            reportingManager : req.body.reportingManager,
            joinDate : req.body.joinDate,
            seatingLocation : req.body.seatingLocation,
            phoneNumber : req.body.phoneNumber,
            currentExp : req.body.currentExp,
            personalMobileNumber : req.body.personalMobileNumber,
            address : req.body.address,
            aadhaarNumber : req.body.aadhaarNumber,
            panNumber : req.body.panNumber,
            personalEmailID : req.body.personalEmailID,
            dob : req.body.dob,
            age : req.body.age,
            jobDescription : req.body.jobDescription,
            aboutMe : req.body.aboutMe,
            askMeAboutExpertise : req.body.askMeAboutExpertise,
            exitDate : req.body.exitDate,
            gender : req.body.gender,
            maritalStatus : req.body.maritalStatus,
            workExperience: req.body.workExperience,
            educationalDetails: req.body.educationalDetails,
            dependentDetails: req.body.dependentDetails,
        }
    }

    User.findByIdAndUpdate({_id:req.query.userId},user,{new:true})
    .then(user => {
        res.status(200).json({data:user, msg:"User Updated Successfully!"});
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}

exports.delete = (req,res) => {
    console.log(req.query.userId);
    User.findByIdAndDelete(req.query.userId)
    .then(data => {
        res.status(200).json({msg:"User Deleted Successfully!"})
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}
