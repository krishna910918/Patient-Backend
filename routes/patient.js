const express = require('express');
const {getPatients,addPatient,updatePatient,deletePatient} = require('../controllers/patient');

const router = express.Router();

router.get('/',getPatients);

router.post('/',addPatient);

router.put('/:id',updatePatient);

router.delete('/:id',deletePatient);

module.exports = router;