import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';


const app = express();
const __dirname = path.resolve();


app.use(express.static(path.resolve(__dirname, '../FrontEnd')));
app.use(express.static(path.resolve(__dirname, '../FrontEnd/css')));
app.use(express.static(path.resolve(__dirname, '../FrontEnd/image')));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../FrontEnd', 'index.html'))
})

app.get('/products', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../FrontEnd/Page', 'products.html'))
})

app.get('/cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../FrontEnd/Page', 'cart.html'))
})

app.get('/checkout', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../FrontEnd/Page', 'checkout.html'))
})

app.get('/storage', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../FrontEnd/Page', 'storage.html'))
})

const name_server = 'http://localhost:'
const port = 3000;
app.listen(port, () => {
    console.log(`Server starting: ${name_server + port}`)
})