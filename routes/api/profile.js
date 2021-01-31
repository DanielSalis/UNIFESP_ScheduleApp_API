const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth')

const Profile = require('../../models/Profile');

// @route  POST api/profile/getAll
// @desc   Get all profiles
// @acess  Private
router.get('/getAll', auth, async (req,res)=>{
    try{
        const unities = await Profile.findAll();
        res.json(unities);
    }catch(error){
        res.sendStatus(500);
    }
});

module.exports = router