const express = require('express');
const router = express.Router();

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
router.post('/create', async(request, response) =>{
  const {name, last_name, email, password, profile_id, schedule_type_id, vacation_type_id, department_id} = request.body;

  try{
      const user = await User.create({ name, last_name, email, password, profile_id, schedule_type_id, vacation_type_id, department_id});
      return response.json(user);
  }
  catch (error){
      console.log(error);
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