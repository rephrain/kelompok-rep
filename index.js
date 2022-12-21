import mysql from 'mysql';
import bodyParser from "body-parser";

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

app.get('/search')

app.listen(PORT, ()=>{
    console.log("Ready");
});

