const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const { check, validationResult } = require('express-validator');

const  CalendarDays = require('../../models/CalendarDays');

// @route  POST api/calendar/create
// @desc   POST create Calendar
// @acess  Private
router.post('/create',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('period', 'Period is required').not().isEmpty(),
    ], auth, async (req,res)=>{
    try{
        console.log('caiu aqui')
    }catch(error){
        console.log(error)
    }
});


module.exports = router