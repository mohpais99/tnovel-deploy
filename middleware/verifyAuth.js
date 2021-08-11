require('dotenv').config()
const jwt = require('jsonwebtoken');

/**
    * Generate Token
    * @param {string} email 
    * @param {int} id 
    * @param {boolean} is_admin 
    * @param {String} fullname 
*/
const generateUserToken = (email, id, is_admin, fullname) => {
    try {
        const token = jwt.sign({
            email, id, is_admin, fullname
        }, process.env.SECRET, { expiresIn: '1d' });
        
        return token;
    } catch (error) {
        res.status(500).json({'message': 'Something wrong!'});
    }
}

module.exports = {
    generateUserToken
}