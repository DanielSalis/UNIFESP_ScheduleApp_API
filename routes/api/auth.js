const express = require('express');
const auth = require('../../middlewares/auth');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');


const User = require('../../models/User');

// @route    GET api/auth/getAuth
// @desc     Get user by token
// @access   Private
router.get('/getAuth', auth, async (req, res) => {
    try {
      const user = await User.findByPk(req.user.id, { attributes: { exclude: ['password'] } });
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.sendStatus(500);
    }
  });

// @route    POST api/auth/login
// @desc     Authenticate user & get token
// @access   Public
router.post('/login',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ errors: errors.array() })
        }

        const {name, email, password} = req.body;


        try{

            let user = await User.findOne({where:{email: email}})
            if(!user)
                return res.json({ errors: [{ msg: 'Credenciais Inválidas' }] })

            const passwordMatch = await bcrypt.compare(password, user.password);
            if(!passwordMatch)
                return res.json({ errors: [{ msg: 'Credenciais Inválidas' }] })
            
            const payload = {'user':{'id':user.id}};

            jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'24h'},
                (error,token)=>{
                    if(error)
                        throw error;
                    res.json({token})
                }
            )

        } catch (error) {
            return res.sendStatus(500);
        }
    }
);

module.exports = router;