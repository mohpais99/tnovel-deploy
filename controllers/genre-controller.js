const db = require('../database/db');

class GenreController {
    async allGenre(req, res) {
        try {
            const genre = await db('genres').orderBy('id', 'DESC');
            res.status(200).json({'data': genre});
        } catch (error) {
            res.status(500).json({'message': 'Something wrong!'});
        }
    }

    async createGenre(req, res) {
        try {
            const {name} = req.body;
            const [id] = await db('genres').insert({name}).returning('id');;
            const message = `Berhasil membuat novel dengan id = ${id}`
            res.status(201).json({'s': 1, 'message': message});
        } catch (error) {
            res.status(500).json({'message': 'Something wrong!'});
        }
    }
}

module.exports = new GenreController();
