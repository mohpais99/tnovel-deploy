const knex = require('knex');
const knexfile = require('./knexfile');

const db = knex(knexfile[process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : "development"]);
module.exports = db;


// const Pool = require('pg').Pool;

// const pool = new Pool({ 
//     user: process.env.USER, 
//     host: 'localhost', 
//     database: process.env.DB, 
//     password: process.env.PASS, 
//     dialect: 'postgres', 
//     port: 5432 
// });

// module.exports = pool;

// pool.connect()
//     .then((client, release) => {
//         client.query('SELECT NOW()', (err, result) => {
//             if (err) { 
//                 return console.error( 
//                     'Error executing query', err.stack) 
//             } 
//             // console.log(result);
//             console.log("Connected to Database at " + result.rows[0].now +" !")
//             console.log('Database connected!')
//         })
//     })
//     .catch(err => console.log('Error: ' + err))