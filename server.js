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
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/unity', require('./routes/api/unity'));
app.use('/api/department', require('./routes/api/department'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/calendar', require('./routes/api/calendar'));
app.use('/api/calendarDays', require('./routes/api/calendarDays'));
app.use('/api/presenceTypes', require('./routes/api/presenceTypes'));

const PORT = process.env.PORT ? process.env.PORT : 3333;

console.log(`Server running on port ${PORT}`);
app.listen(PORT);