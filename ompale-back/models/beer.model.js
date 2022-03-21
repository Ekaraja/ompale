import mongoose from "mongoose";


const beerSchema = new mongoose.Schema(
    {

        image: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            required: true
        },
        description: String,
        category: String,
        abv: Number,
        ibu: Number,
        degree: Number,
        volume: {
            value: Number,
            unit: String
        },
        countInStock: Number,
        price: Number,
        display: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

const BeerModel = mongoose.model('beer', beerSchema);
export default BeerModel;