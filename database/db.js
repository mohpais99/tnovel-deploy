require('dotenv').config()

const {Pool} = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

const developmentConfig = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
const productionConfig = process.env.DATABASE_URL

const pool = new Pool({
    connectionString: isProduction ? productionConfig : developmentConfig,
    ssl: { rejectUnauthorized: false },
})

module.exports = {
    query(quertText, params) {
        return new Promise((resolve, reject) => {
            pool.query(quertText, params, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}

// const developmentConfig = {
//     user:     process.env.DB_USER,
//     password: process.env.DB_PASS,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
// }

// const productionConfig = {
//     connectionStringuser: process.env.DATABASE_URL,
// }

// const pool = new Pool(developmentConfig)

// const pool = new Pool({ 
//     user: process.env.DB_USER, 
//     database: process.env.DB_NAME, 
//     password: process.env.DB_PASS, 
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