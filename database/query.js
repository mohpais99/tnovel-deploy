const {pool} = require('../database/db');

module.exports = {
    /**
     * DB Query
     * @param {quertText} :string
     * @param {params} :array
     * @returns {data} :object
     */
    query(quertText, params) {
        return new Promise((resolve, reject) => {
            pool.query(quertText, params)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
};