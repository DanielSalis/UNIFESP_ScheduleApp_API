const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth')

const PresenceType = require('../../models/PresenceType');

// @route  POST api/presenceTypes/getAll
// @desc   Get all presence types
// @acess  Private
router.get('/getAll', auth, async (req,res)=>{
    try{
        const presence = await PresenceType.findAll();
        res.json(presence);
    }catch(error){
        res.sendStatus(500);
    }
});

module.exports = router