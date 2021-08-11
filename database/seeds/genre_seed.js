
exports.seed = async function(knex) {
  return knex('genres').del()
    .then(function () {
      return await knex('genres').insert([
        {name: 'Action'},
        {name: 'Adventure'},
        {name: 'Comedy'},
        {name: 'Drama'},
        {name: 'Ecchi'},
        {name: 'Fantasy'},
        {name: 'Harem'},
        {name: 'Horror'},
        {name: 'Isekai'},
        {name: 'Martial Art'},
        {name: 'Mature'},
        {name: 'Mecha'},
        {name: 'Psychological'},
        {name: 'School'},
        {name: 'Slice of Life'},
        {name: 'Supernatural'}
      ]);
  })
};
