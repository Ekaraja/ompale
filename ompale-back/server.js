// #region IMPORT MODULES
import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import dotenv from 'dotenv';
// #endregion IMPORT

dotenv.config()

const app = express();


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`.magenta.bold))
