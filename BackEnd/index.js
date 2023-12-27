import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

// import {connection} from "./models/db.js"

const app = express();
const __dirname = path.resolve();


app.use(express.static(path.resolve(__dirname, '../FrontEnd')));
app.use(express.static(path.resolve(__dirname, '../FrontEnd/css')));
app.use(express.static(path.resolve(__dirname, '../FrontEnd/image')));

app.set('view engine', 'ejs')
app.use(bodyParser.json());
app.use(express.json())


app.get('/', (req, res) => {
    res.render(path.resolve(__dirname, '../FrontEnd', 'index.ejs'))
})

app.get('/products', (req, res) => {
    res.render(path.resolve(__dirname, '../FrontEnd/Page', 'products.ejs'))
})

app.get('/cart', (req, res) => {
    res.render(path.resolve(__dirname, '../FrontEnd/Page', 'cart.ejs'))
})

app.get('/checkout', (req, res) => {
    res.render(path.resolve(__dirname, '../FrontEnd/Page', 'checkout.ejs'))
})

app.get('/storage', (req, res) => {
    res.render(path.resolve(__dirname, '../FrontEnd/Page', 'storage.ejs'))
})

app.get('/storage/panel/create', (req, res) => {
    res.render(path.resolve(__dirname, '../FrontEnd/Page/Panel', 'create.ejs'))
})

const name_server = 'http://localhost:'
const port = 3000;
app.listen(port, () => {
    console.log(`Server starting: ${name_server + port}`)
})