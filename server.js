require('dotenv').config();
require('./database/index');
const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json({extend: false}));


//Routes
//Pasta routes ~> Pasta api ~> arquivo hello
app.use('/api/hello', require('./routes/api/hello'));
app.use('/api/user', require('./routes/api/user'))

const PORT = process.env.PORT ? process.env.PORT : 3333;

console.log(`Server running on port ${PORT}`);
app.listen(PORT);