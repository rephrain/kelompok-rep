import mysql from 'mysql';
import bodyParser from "body-parser";
import express from 'express';

const PORT  = 8080;
const app = express();

app.use(express.static('.'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

const pool = mysql.createPool({
    user: 'root',
    password: '',
    database: 'tubes_manpro',
    host: 'localhost',
    connectionLimit: 10,
})

app.get('/', (req, res) => {
    res.sendFile('home.html', {root:'.'})
})

app.get('/home', (req, res) => {
    res.sendFile('home.html', {root:'.'})
})

app.get('/search', (req, res) => {
    const book = req.query.book
    const nama_karakter = req.query.nama_karakter

    console.log(book, nama_karakter)

    const result = []

    if (book === undefined || nama_karakter === undefined) res.render('./search', {
        result : result
    })
    else {
        const result = pool.query("SELECT target, weight FROM (SELECT * FROM search_data WHERE book =" + book + ") a WHERE source LIKE '%" + nama_karakter + "%'", (err, rows, fields) =>{
            res.render('./search', {
                result : rows
            })
        })
    }   
})

app.post('/search', async (req, res) =>{
    let book = req.body.book
    let nama_karakter = req.body.nama_karakter

    console.log(book, nama_karakter)
    res.redirect('/search')
})

app.get('/undirected', (req, res) =>{
    res.sendFile('undirectedGraph.html', {root:'.'});
})

app.get('/dinamis', (req, res) =>{
    res.sendFile('grafikDinamis.html', { root: '.' });
})

app.get('/grafik1', (req, res) => {
    res.sendFile('grafik1.html', { root: '.' });
})

app.get('/grafik2', (req, res) => {
    res.sendFile('grafik2.html', { root: '.' });
})

app.get('/grafik3', (req, res) => {
    res.sendFile('grafik3.html', { root: '.' });
})

app.get('/grafik4', (req, res) => {
    res.sendFile('grafik4.html', { root: '.' });
})

app.get('/grafik5', (req, res) => {
    res.sendFile('grafik5.html', { root: '.' });
})

app.listen(PORT, ()=>{
    console.log("Ready");
});