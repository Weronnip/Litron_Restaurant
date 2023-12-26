import { createConnection } from 'mysql2';
import { HOST, USER, DATABASE, PASSWORD } from "../Config/db.config.js";

const connection = createConnection({
  host: HOST,
  user: USER,
  database: DATABASE,
  password: PASSWORD
});

connection.connect(function(err) {
  if(err) {
    return console.error('Error: ' + err.message);
  } else {
    console.log('\nSuccessful connection to the database');
  }
});

connection.execute("SELECT * FROM fish_database.products", function(err, results) {
  console.log(err)
  console.log(results);
})