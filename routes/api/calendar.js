const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const { check, validationResult } = require('express-validator');

const Calendar = require('../../models/Calendar');
const CalendarDays = require('../../models/CalendarDays')

// @route  POST api/calendar/create
// @desc   POST create Calendar
// @acess  Private
router.post('/create',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('period', 'Period is required').not().isEmpty(),
    ], auth, async (req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let {name, period} = req.body;

        const calendarByPeriod = await Calendar.findOne({where:{period:period}})

        if(calendarByPeriod){
            return res.json({'Message':'Calendário já existe'});
        }

        const calendar = await Calendar.create({ name, period});
        const year = period.split('-')[1]
        const month = period.split('-')[0]

        const numberOfDays = new Date(year, month, 0).getDate();
        const day = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
        for(let i=1; i <= numberOfDays;i++){
            let weekendDay = day[new Date(year, month-1, i).getDay()];
            let shortDate = i > 9 ? `${i}/${month}`: `0${i}/${month}`;
            let fullDate = i > 9 ? `${i}/${month}/${year}`: `0${i}/${month}/${year}`;
            let calendar_id = calendar.dataValues.id;
            await CalendarDays.create({weekendDay,shortDate,fullDate, calendar_id})
        }


        return res.sendStatus(200)
    }catch(error){
        res.sendStatus(500);
    }
});

// @route  GET api/calendar/getAll
// @desc   Get all calendars
// @acess  Private
router.get('/getAll', auth, async (req,res)=>{
    try{
        const calendars = await Calendar.findAll();
        res.json(calendars);
    }catch(error){
        res.sendStatus(500);
    }
});

// @route  GET api/calendar/deleteById
// @desc   deleteById
// @acess  Private
router.post('/deleteById', auth, async (req,res)=>{
    try{
        const calendar = await Calendar.destroy({where:{id:req.body.id}});
        return res.json({'Message': 'Calendário excluido com sucesso!', calendar: calendar});
    }catch(error){
        res.sendStatus(500);
    }
});

module.exports = router