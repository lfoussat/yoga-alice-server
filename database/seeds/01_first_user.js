exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          created_at: new Date(),
          username: 'lfoussat',
          first_name: '',
          last_name: '',
          email: 'louisefoussat@gmail.com',
          password: 'yogatest'
        },
        {
          id: 2,
          created_at: new Date(),
          username: 'aliceO',
          first_name: '',
          last_name: '',
          email: 'alice.ollagnon@gmail.com',
          password:
            '$2b$09$AHDKLV1a.3NZGqhug37lDeKT6fJJvRlpTa32uQaAnWsD1GmdOfqgq'
        }
      ])
    })
}
