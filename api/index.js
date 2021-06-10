'use strict';
const app = require('./app'),
    { port } = require('./config'),
    // initlize database connection
    connection = require('./models/connection').connectToDatabase();



// Start the server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!!!  shutting down ...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});