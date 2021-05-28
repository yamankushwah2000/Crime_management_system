const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true}
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
    })

    const criminalsRouter = require('./routes/criminals');
    const usersRouter = require('./routes/users');
    const crimetypeRouter = require('./routes/crimetypes');
    const officerRouter = require('./routes/officers');
    const complaintRouter = require('./routes/complaints');

    app.use('/criminals', criminalsRouter);
    app.use('/users', usersRouter);
    app.use('/crimetypes', crimetypeRouter);
    app.use('/officers', officerRouter);
    app.use('/complaints',complaintRouter)
        
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});