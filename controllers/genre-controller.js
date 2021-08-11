const {query} = require('../database/db')

class GenreController {
    async allGenre(req, res) {
        try {
            await query('SELECT * FROM genres ORDER BY id')
                .then(res => {
                    res.status(200).json({'data': res.rows});
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({'message': err});
                })
        } catch (error) {
            res.status(500).json({'message': error});
        }
    }
    async createGenre(req, res) {
        const {name} = req.body;
        try {
            await query(`INSERT INTO genres(name) VALUES ($1);`, [name])
                .then(res => {
                    // const message = `Berhasil membuat novel dengan id = ${id}`
                    res.status(200).json({'data': res.rowCount, 'message': res});
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({'message': err});
                })
        } catch (error) {
            res.status(500).json({'message': error});
        }
    }
    async getGenreById(req, res) {
        let {id} = req.params;
        try {
            await query('SELECT * FROM genres WHERE id=$1', [id])
                .then(res => {
                    console.log(res.rows);
                    res.status(200).json({'data': res.rows, 'message': res});
                })
                .catch(err => {
                    console.log(err);
                })
        } catch (error) {
            res.status(500).json({'message': error});
        }
    }
}

module.exports = new GenreController();
