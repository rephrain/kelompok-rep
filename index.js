import mysql from 'mysql';
import bodyParser from "body-parser";
import express from 'express';

const PORT  = 8080;
const app = express();

app.use(express.static('public'));
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
    res.render('home')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/search', (req, res) => {
    const book = req.query.book
    const nama_karakter = req.query.nama_karakter

    console.log(book, nama_karakter)

    const result = [{target:"helo", weight:3}]

    if (book === undefined || nama_karakter === undefined) res.render('./search', {
        result : result
    })
    else {
        const result = pool.query(`SELECT target, weight FROM search_data WHERE source=? AND book=?`, [nama_karakter, book], (err, rows, fields) =>{
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
    res.render('./undirected')
})

app.get('/dinamis', (req, res) =>{
    res.render('./dinamis')
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

