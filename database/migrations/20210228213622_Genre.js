
exports.up = function(knex) {
    return knex.schema.createTable('genres', table => {
        table.increments('id').primary();
        table.string('name').notNullable().unique();
        table.timestamps(true, true);
        // table.foreign('author').references('userId').inTable('users');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('novels');
};
