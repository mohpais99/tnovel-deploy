require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit')
const indexRouter = require('./routes/index');
const path = require('path');
const app = express()

if (process.env.NODE_ENV === 'production11') {
    app.use(express.static(path.join(__dirname, "client/build")));
}
const isProduction = process.env.NODE_ENV === 'production';

const origin = {
    origin: isProduction ? 'https://tnovel.herokuapp.com' : '*',
}
app.use(cors(origin))

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // 5 requests,
})
app.use(limiter)

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route api config
app.use('/v1', indexRouter);
// handle page not found
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "client/build/index.html"))
// });

module.exports = app;

