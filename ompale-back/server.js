// #region IMPORT MODULES
import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import dotenv from 'dotenv';
import beerRoutes from './routes/beer.routes.js'

import {connectDB} from './config/db.js'
// #endregion IMPORT

dotenv.config()
connectDB()

const app = express();


app.use(express.json())



app.get('/', (req, res) => {
    res.send('hello')
})

app.use('/api/beers', beerRoutes)



const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`.magenta.bold))
