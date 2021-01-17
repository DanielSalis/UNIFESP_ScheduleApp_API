const { request } = require('express');
const express = require('express');
const router = express.Router();

// @route  GET api/hello/helloWorld
// @desc   Send response saying hello
// @acess  Public
router.get('/helloWorld', async(request, response) =>{
    response.json({ Response: "Hello from API"});
});

module.exports = router;