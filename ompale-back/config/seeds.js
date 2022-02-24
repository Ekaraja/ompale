import dotenv from 'dotenv';
import colors from 'colors';
import mongoose from "mongoose";
import BeerModel from "../models/beer.model.js";
import { beers } from "../data/beers.js";
import { connectDB } from "./db.js";


dotenv.config()
connectDB();


const importData = async () => {

    try {
        await BeerModel.deleteMany();

        const insertBeers = await BeerModel.insertMany(beers)

        console.log(`Beers have been inserted to DB`.green.inverse);
    } catch (error) {
        console.error(`Error : ${error}`.red.inverse)
        process.exit(1)
    }
}

const removeData = async () => {
    try {
        await BeerModel.deleteMany()

        console.log(`Beers have been removed from DB`.red.inverse);
        
    } catch (error) {
        console.error(`Error : ${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    removeData()
}
else {
    importData()
} 