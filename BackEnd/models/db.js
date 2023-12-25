import { createConnection } from "mysql2";
import dbConfig from '../Config/db.config';

const connection = createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  database: dbConfig.DATABASE,
  password: dbConfig.PASSWORD
});

connection.connect(function(err) {
  if(err) {
    return console.error('Error: ' + err.message);
  } else {
    console.log('\nSuccessful connection to the database');
  }
});

connection.execute("SELECT * FROM fish_database.products", function(err, results) {
  console.log(err);
  console.log(results);
})