const db = require('../database/db');

class ChapterController {
    async listChapter(req, res) {
        try {
            const chapter = await db('chapters').orderBy('id', 'DESC');
            res.status(200).json({'data': chapter});
        } catch (error) {
            res.status(500).json({'message': 'Something wrong!'});
        }
    }
    async createChapter(req, res) {
        try {
            const {novel_id, title, chapter, description} = req.body;
            const slug = makeSlug(title)
            const [id] = await db('chapters').insert({novel_id, title, chapter, description, slug, publish: 0}).returning('id');;
            const message = `Berhasil membuat novel dengan id = ${id}`
            res.status(201).json({'s': 1, 'message': message});
        } catch (error) {
            console.log(error);
            res.status(500).json({'message': 'Something wrong!'});
        }
        function makeSlug(name) {
            const slug = name.toLowerCase();
            return slug.replace(/\s+/g, '-')
        }
    }
    async getChapterById(req, res) {
        try {
            const {id} = req.params
            const chapter = await db('chapters').where('novel_id', id).orderBy('id', 'DESC');
            res.status(200).json({'data': chapter});
        } catch (error) {
            res.status(500).json({'message': 'Something wrong!'});
        }
    }
    async getChapterBySlug(req, res) {
        try {
            const {slug} = req.params
            const chapter = await db('chapters').where('slug', slug).first();
            res.status(200).json({'data': chapter});
        } catch (error) {
            console.log(error);
            res.status(500).json({'message': 'Something wrong!'});
        }
    }
    async viewsChapterBySlug(req, res) {
        try {
            const {slug} = req.params
            const chapter = await db('chapters').where('slug', slug).first();
            const all = await db('chapters').where({'novel_id': chapter.novel_id, 'publish': 1 }).orderBy('published_at', 'asc');
            // const all = await db('chapters').select('title', 'chapter', 'slug').where({'novel_id': chapter.novel_id, 'publish': 1 }).orderBy('published_at', 'asc');
            res.status(200).json({'data': chapter, 'all': all});
        } catch (error) {
            console.log(error);
            res.status(500).json({'message': 'Something wrong!'});
        }
    }
    async updateChapterBySlug(req, res) {
        try {
            const {title, chapter, description} = req.body;
            let {slug} = req.params;
            const update = await db('chapters').where('slug', slug).update({title, chapter, description});
            const message = `Berhasil mengupdate chapter dengan id = ${update}`
            res.status(201).json({'s': update,'message': message});
        } catch (error) {
            console.log(error);
            res.status(500).json({'message': 'Something wrong!'});
        }
    }
    async delChapterById(req, res) {
        try {
            const {id} = req.params
            const chapter = await db('chapters').where('id', id).del();
            const message = `Berhasil menghapus chapter dengan id = ${id}`
            res.status(201).json({'s': chapter, 'message': message});
        } catch (error) {
            res.status(500).json({'s': 0, 'message': 'Something wrong!'});
        }
    }
    async publishChapterById(req, res) {
        try {
            const {id} = req.params
            const dt = new Date()
            const update = await db('chapters').where('id', id).update({'published_by': 'fz-dev', 'publish': 1, 'published_at': dt});
            const message = `Berhasil publish chapter dengan id = ${id}`
            res.status(201).json({'s': update, 'message': message});
        } catch (error) {
            console.log(error);
            res.status(500).json({'message': 'Something wrong!'});
        }
    }
}

module.exports = new ChapterController();
