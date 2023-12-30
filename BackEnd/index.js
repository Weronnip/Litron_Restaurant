// imports
import express from "express";
import path from "path";
import "dotenv/config";

// main const
const app = express();
const __dirname = path.resolve();

// .env
const NAME = process.env.NAME_HOST;
const PORT = process.env.PORT || 8000;

// routes
app.get('/', (req, res) => {
    res.send('Hello, world')
})

try {
    app.listen(PORT, () => {
        console.log(`Server starting to do addres: ${NAME + PORT}`)
    })
} catch (error) {
    console.log("Error in the line: ", error);
}