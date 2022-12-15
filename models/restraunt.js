import mongoose from 'mongoose';

const resSchema = mongoose.Schema({
    Name: String,
    Description: String,
    Latitude:mongoose.Types.Decimal128,
    Longitude:mongoose.Types.Decimal128,
    AverageRating:mongoose.Types.Decimal128,
    NumberOfRatings:Number
})

const Res = mongoose.model('Restraunts',resSchema);

export default Res;