const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');

const  CalendarDays = require('../../models/CalendarDays');

// @route  GET api/calendarDays/getByCalendarId
// @desc   GET calendar days by calendar id
// @acess  Private
router.get('/getByCalendarId/:id', auth, async (req,res)=>{
    try{
        const days = await CalendarDays.findAll({where:{calendar_id:req.params.id}})
        res.json(days)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
});


module.exports = router