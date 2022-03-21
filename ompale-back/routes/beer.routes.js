import express from 'express';
import { getBeerList, getBeer, addBeer, editBeer, deleteBeer } from '../controllers/beer.controllers.js'


const router = express.Router();

router
    .route('/')
    .get(getBeerList)
    .post(addBeer)

router
    .route('/:id')
    .get(getBeer)
    .patch(editBeer)
    .delete(deleteBeer)


export default router