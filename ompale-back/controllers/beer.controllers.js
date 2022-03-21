import BeerModel from '../models/beer.model.js'


// =========================================== //
// ============== GET ALL BEERS ============== //
// =========================================== //

// public => GET /api/beers

const getBeerList = async (req, res) => {

    try {

        const beers = await BeerModel.find()
        res.status(200).json({
            status: 'succes',
            results: beers.length,
            data: beers
        })

    } catch (error) {
        console.error(error)
    }
}



// =========================================== //
// ============== GET ONE BEER =============== //
// =========================================== //

// public => GET /api/beers/:id

const getBeer = async (req, res) => {

    try {

        const beer = await BeerModel.findById(req.params.id)
        res.status(200).json({
            status:'success',
            data : beer
        })
        
    } catch (error) {
        console.error(error)
    }
}



// =========================================== //
// ============== ADD NEW BEER =============== //
// =========================================== //

// admin => POST /api/beers/:id

const addBeer = async (req, res) => {

    const newBeer = { ...req.body }

    try {

        await BeerModel.create(newBeer);
        res.status(201).json({
            status: 'succes',
            data: newBeer
        })
    }

     catch (error) {
        console.error(error)
    }
}



// =========================================== //
// ================ EDIT BEER ================ //
// =========================================== //

// admin => PATCH /api/beers/:id

const editBeer = async(req, res) => {

    const beer = {...req.body}

    try {

        await BeerModel.findByIdAndUpdate(req.params.id, beer, {new: true})
        res.status(200).json({
            status: 'succes',
            data: beer
        })

    } catch (error) {
        console.error(error)
    }
}



// =========================================== //
// =============== DELETE BEER =============== //
// =========================================== //

// admin => DELETE /api/beers/:id

const deleteBeer = async (req, res) => {

    try {

        await BeerModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'succes',
            message: 'Data has been removed'
        })
        
    } catch (error) {
        console.error(error) 
    }
}

export { getBeerList, getBeer, addBeer, editBeer, deleteBeer }