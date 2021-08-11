const {query} = require('../database/db')

class GenreController {
    async allGenre(req, res) {
        try {
            await query('SELECT * FROM genres ORDER BY id')
                .then(res => {
                    console.log(res.rows);
                })
                .catch(err => {
                    console.log(err);
                })
        } catch (error) {
            res.status(500).json({'message': 'Something wrong!'});
        }
    }
}

module.exports = new GenreController();
