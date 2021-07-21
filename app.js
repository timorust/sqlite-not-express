const sqlite3 = require("sqlite3").verbose();
const knex = require("knex");

const connectedKnex = knex({
  client: "sqlite3",
  connection: {
    filename: "hw.db"
  }
})

const result = connectedKnex.select().from('COMPANY');
result.then(rows => {
  console.log(rows)
});
