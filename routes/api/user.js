const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route  POST api/users/getById/:id
// @desc   Get User By Id
// @acess  Public
router.get('/getById/:id', async(request,response)=>{
  try{
    const id = parseInt(request.params.id);
    const users = await User.findByPk(id)
    return response.json(users)
  }  
  catch(error){
    return response.sendStatus(500);
  }
});

// @route  POST api/users/getById/:id
// @desc   Get user by id
// @acess  Public
router.get('/getAll', async(request,response)=>{
  try{
    const users = await User.findAll();
    return response.json(users)
  }  
  catch(error){
    return response.sendStatus(500);
  }
});

// @route  POST api/users/create
// @desc   Create User
// @acess  Public
router.post('/create',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    check('profile_id', 'Please enter with a profile id').not().isEmpty()
  ], 

  async(request, response) =>{
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
    }

    let {name, last_name, email, password, profile_id, schedule_type_id, vacation_type_id, department_id} = request.body;

    const UserByEmail = await User.findOne({
      where:{
        email:email
      }
    })

    if(UserByEmail){
      return response.json({'Message':'Usuário já existe'});
    };
       
    try{
      const salt = await bcrypt.genSalt(5);
      const encryptedpassword = await bcrypt.hash(password, salt);
      password = encryptedpassword

      const user = await User.create({ name, last_name, email, password, profile_id, schedule_type_id, vacation_type_id, department_id});
      const payload = {
        'user':{
          id: user.id
        }
      }

      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1 days' }, (err, token) => {
        if (err) {
          throw err;
        }
        return response.status(200).json({ token });
      });
    }
    catch (error){
        console.log(error.message);
        return response.sendStatus(500);
    }
});

// @route  POST api/users/deleteById
// @desc   Delete User
// @acess  Public
router.post('/deleteById', async(request, response) =>{
  const {id} = request.body;

  try{
      const user = await User.destroy({
        where:{
          id:id
        }
      })
      return response.json({'Message': 'Usuário excluido com sucesso!',user: user});
  }
  catch (error){
      console.log(error);
      return response.sendStatus(500);
  }
});

module.exports = router;