const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cors =  require('cors');

const foodRoutes = require('./routes/foodRoutes');
const globalErrHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const app = express();

// Allow Cross-Origin requests
const corsOptions = {
    credentials: true,
    methods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'token', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization',
    ],
    origin: (origin, cb) => {
        cb(null, true);
        return;
    },
};
app.use(cors(corsOptions));

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API 
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});

app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({
    limit: '1000kb'
}));

// Data sanitization against Nosql query injection
app.use(mongoSanitize());

// Routes
app.use('/api/v1/food', foodRoutes);

// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;