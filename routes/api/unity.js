const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth')

const Unity = require('../../models/Unity');

// @route  POST api/unity/getAll
// @desc   Get all unities
// @acess  Private
router.get('/getAll', auth, async (req,res)=>{
    try{
        const unities = await Unity.findAll();
        res.json(unities);
    }catch(error){
        res.sendStatus(500);
    }
});

module.exports = router