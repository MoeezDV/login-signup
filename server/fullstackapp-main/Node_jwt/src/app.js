const express = require('express');

const SignupRouter = require('./routes/signup');
const loginRouter = require("./routes/login")
const bodyParser = require('body-parser')
const cors = require('cors');
const dotenv = require('dotenv');
const CrateAdminAccount = require('./scripts/admin');
const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(bodyParser.json());
app.use(cors());

CrateAdminAccount();

app.use('/user', SignupRouter);
app.use("/auth" , loginRouter)


app.listen(PORT, () => {   
     console.log(`Server is running on port ${PORT}`)})
