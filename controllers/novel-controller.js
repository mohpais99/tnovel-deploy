const db = require('../database/db');

class NovelController {
    async createNovel(req, res) {
        try {
            const {name, othername, synopsis, author, type, poster, status, genre, language, year} = req.body;
            let gnr = []
            for (let i = 0; i < genre.length; i++) {
                const el = genre[i];
                gnr.push(el.name)
            }
            const slug = makeSlug(name)
            const [id] = await db('novels').insert({name, othername, slug, synopsis, author, type, poster, status, genre: gnr, language, year}).returning('id');;
            const message = `Berhasil membuat novel dengan id = ${id}`
            res.status(201).json({'s': 1, 'message': message});
        } catch (error) {
            console.log(error)
            res.status(500).json({'message': 'Something wrong!'});
        }
        function makeSlug(name) {
            const slug = name.toLowerCase();
            return slug.replace(/\s+/g, '-')
        }
    }
    async listNovel(req, res) {
        try {
            const novels = await db('novels').orderBy('id', 'DESC');
            res.status(200).json({'data': novels});
        } catch (error) {
            res.status(500).json({'message': 'Something wrong!'});
        }
    }
    async getNovelBySlug(req, res) {
        try {
            let {slug} = req.params;
            const [novels] = await db('novels').where('slug', slug)
            res.status(200).json({'data': novels});
        } catch (error) {
            console.log(error);
            res.status(500).json({'message': 'Something wrong!'});
        }
    }
    async getNovelAndChapterBySlug(req, res) {
        try {
            let {slug} = req.params;
            const [novels] = await db('novels').where('slug', slug)
            const chapter = await db('chapters').where({'novel_id': novels.id, 'publish': 1}).orderBy('published_at', 'desc')
            res.status(200).json({'novel': novels, 'chapter':chapter});
        } catch (error) {
            console.log(error);
            res.status(500).json({'message': 'Something wrong!'});
        }
    }
    async updateNovelBySlug(req, res) {
        try {
            const {name, othername, synopsis, author, type, poster, status, genre, language, year} = req.body;
            let {slug} = req.params;
            const update = await db('novels').where('slug', slug).update({name, othername, slug, synopsis, author, type, poster, status, genre, language, year});
            res.status(201).json({'s': update, 'message': 'Berhasil update!'});
        } catch (error) {
            res.status(500).json({'message': 'Something wrong!'});
        }
    }
}

module.exports = new NovelController();
