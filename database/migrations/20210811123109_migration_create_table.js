
exports.up = function(knex) {
    return knex.schema
    .createTable('novels', table => {
        table.increments().primary();
        table.string('title').notNullable().unique();
        table.string('othername');
        table.string('slug');
        table.string('author').notNullable();
        table.text('synopsis').notNullable();
        table.string('type').notNullable();
        table.string('poster');
        table.enu('status', ['Ongoing', 'Completed']);
        table.timestamps(true, true);
    })
    .createTable('novels', table => {
        table.increments().primary();
        table.string('title').notNullable().unique();
        table.string('othername');
        table.string('slug');
        table.string('author').notNullable();
        table.text('synopsis').notNullable();
        table.string('type').notNullable();
        table.string('poster');
        table.enu('status', ['Ongoing', 'Completed']);
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    
};
