import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';


const app = express();
const __dirname = path.resolve();


app.use(express.static(path.resolve(__dirname, '../static')));
app.use(express.static(path.resolve(__dirname, '../static/css')));
app.use(express.static(path.resolve(__dirname, '../static/image')));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../static', 'index.html'))
})

app.get('/products', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../static', 'products.html'))
})

app.get('/cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../static', 'cart.html'))
})

app.get('/checkout', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../static', 'checkout.html'))
})

app.get('/storage', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../static', 'storage.html'))
})

const name_server = 'http://localhost:'
const port = 3000;
app.listen(port, () => {
    console.log(`Server starting: ${name_server + port}`)
})