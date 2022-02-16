const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const mintRoutes = require('./routes/mintRoutes')

dotenv.config()


mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
    console.log('Connected');
});

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.use('/api/user', mintRoutes);


app.listen(3000, () => {
    console.log('Hello world!');
})