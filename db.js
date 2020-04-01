const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./worrkshopev.db');


db.serialize(function(){

    db.run(`
      CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
      );
  `)

   


  /* db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
    if (err) {
         return console.log(err)
       } else {
         return console.log("DELETEI")
       }
   })*/



});

module.exports = db;