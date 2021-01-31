const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth')

const Department = require('../../models/Department');

// @route  POST api/department/getAll
// @desc   Get all departments
// @acess  Private
router.get('/getAll', auth, async (req,res)=>{
    try{
        const unities = await Department.findAll();
        res.json(unities);
    }catch(error){
        res.sendStatus(500);
    }
});

// @route  POST api/department/getAll
// @desc   Get departments by id
// @acess  Private
router.get('/getByUnityId/:id', auth, async (req,res)=>{
    try{
        const unities = await Department.findAll({where:{unity_id:req.params.id}});
        res.json(unities);
    }catch(error){
        res.sendStatus(500);
    }
});

module.exports = router