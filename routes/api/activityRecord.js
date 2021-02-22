const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth')

const ActivityRecord = require('../../models/ActivityRecord');
const User = require('../../models/User');



// @route  POST api/activityRecord/create
// @desc   Create Ativity record
// @acess  Private
router.post('/create', auth, async (req,res)=>{
    try{
        let {presence_type_id, user_id,start, end} = req.body;
        await ActivityRecord.create({presence_type_id, user_id,start,end,});
        res.sendStatus(200);
    }catch(error){
        res.json(error);
        console.log(error);
    }
});

// @route  POST api/plantonista/getAll
// @desc   plantonista/getAll
// @acess  Private
router.get('/plantonista/getAll', auth, async (req,res)=>{
    try{
        const plantonistas = await User.findAll({where:{profile_id:3}})
        let activities = []
        for(let i=0; i < plantonistas.length; i++){
            let ac = await ActivityRecord.findAll({where:{user_id:plantonistas[i].id}});
            for(let j=0; j<ac.length; j++){
                activities.push(ac[j].dataValues)
            }
        }
        return res.json(activities);
    }catch(error){
        res.json(error);
        console.log(error);
    }
});


module.exports = router