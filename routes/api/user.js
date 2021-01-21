
const express = require('express');
const router = express.Router();

const User = require('../../models/User');


// @route  GET api/users/create
// @desc   Send response saying hello
// @acess  Public
router.post('/create', async(request, response) =>{
    const {name, last_name, email, password} = request.body;

    try{
        const user = await User.create({ name, last_name, email, password});
        return response.json(user);
    }
    catch (error){
        console.log(error);
        return response.sendStatus(500);
    }
    
    
    
});

module.exports = router;