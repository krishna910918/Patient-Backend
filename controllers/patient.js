const Patient = require('../models/patient');

exports.getPatients = async(req,res) => {

    try{

        let list = await Patient.find();

        return res.status(200).json({list});

    } catch (error) {
        return res.status(500).json({message : "Something went wrong"})
    }
}

exports.addPatient = async(req,res) => {

    let {name,contact,address,pincode} = req.body;
    try{

        let patient = await Patient.findOne({contact});

        if (  patient ) return res.status(400).json({message : "Patient Already exists"});

        const result = await Patient.create({name,contact,address,pincode});

        return res.status(201).json({result,message:"Patient added successfully"});



    } catch (error) {
        return res.status(500).json(error.message)
    }
}

exports.updatePatient = async(req,res) => {

    let id = req.params.id;
    let {name,contact,address,pincode} = req.body;

    try{

        let patient = await Patient.findById(id);
        if ( ! patient ) return res.status(404).json({message : "Patient Not Found "});

        let result = await Patient.findByIdAndUpdate(id,{name,contact,address,pincode});    

        return res.status(200).json({message : "Updated successfully",result});


    } catch (error) {
        return res.status(500).json(error.message);
    }
}

exports.deletePatient = async(req,res) => {

    let id = req.params.id;

    try{

        let patient = await Patient.findById(id);
        if ( ! patient ) return res.status(404).json({message : "Patient Not Found "});

        await Patient.findByIdAndDelete(id);

        return res.status(200).json({message : "Deleted successfully"})


    } catch (error) {
        return res.status(500).json({message : "Something went wrong"});
    }
}