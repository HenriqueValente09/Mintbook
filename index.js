const express = require("express")
const path = require('path')
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const mintRoutes = require('./routes/mintRoutes')
const authRoutes = require('./routes/authRoutes')
const bodyParser = require('body-parser');

dotenv.config()
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect('mongodb://127.0.0.1:27017/social', ()=> {
    console.log('conectado');
});

console.log(process.env.MONGO_URL);

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.use('/api/user', mintRoutes);
app.use('/api/auth', authRoutes);

app.use(bodyParser.json)


app.listen(3000, () => {
    console.log('Hello world!');
})