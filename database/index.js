const mysql = require("mysql");
const mysql2 = require("mysql2");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "Persona76fes!",
  database: "db_steven",
  multipleStatements: true,
};

const dbDir = mysql2.createPool(dbConfig);
const db = mysql.createPool(dbConfig);

db.getConnection((err) => {
  if (err) {
    return console.error("error:" + err);
  }
  console.log("Connected sql");
});

module.exports = { db, dbDir };
