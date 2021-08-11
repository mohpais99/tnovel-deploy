const {query} = require('../database/db')
const {makeSlug} = require('../helpers/validations')

class GenreController {
    async listNovel(req, res) {
        try {
            await query('SELECT * FROM genres ORDER BY id')
                .then(res => {
                    res.status(200).json({'data': res.rows});
                })
                .catch(err => {
                    res.status(500).json({'data': []});
                })
        } catch (error) {
            console.log(error);
            res.status(500).json({'data': [], 'message': error});
        }
    }
    async createNovel(req, res) {
        const {name, othername, synopsis, author, type, poster, status, genre, language, year} = req.body;
        let queryInsert = `
            INSERT INTO public.novels(
                name, othername, slug, author, synopsis, type, poster, status, created_at, updated_at, language, year, genre)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);`
        try {
            let gnr = []
            for (let i = 0; i < genre.length; i++) {
                const el = genre[i];
                gnr.push(el.name)
            }
            const slug = makeSlug(name)
            // const [id] = await db('novels').insert({name, othername, slug, synopsis, author, type, poster, status, genre: gnr, language, year}).returning('id');;
            await query(queryInsert, [name, othername, slug, synopsis, author, type, poster, status, genre, language, year])
                .then(res => {
                    const message = `Berhasil membuat novel`
                    res.status(201).json({'s': 1, 'message': res});
                })
                .catch(err => {
                    res.status(500).json({'s': 0, 'message': 'Gagal membuat novel'});
                })
        } catch (error) {
            console.log(error)
            res.status(500).json({'message': 'Something wrong!'});
        }
    }
    async getNovelBySlug(req, res) {
        let {slug} = req.params;
        try {
            await query('SELECT * FROM novels WHERE slug= $1', [slug])
                .then(res => {
                    console.log(res);
                    res.status(200).json({'s': 1, 'data': res.rows[0]});
                })
                .catch(err => {
                    res.status(500).json({'s': 0, 'message': 'Gagal membuat novel'});
                })
        } catch (error) {
            console.log(error);
            res.status(500).json({'message': 'Something wrong!'});
        }
    }
}

module.exports = new GenreController();
