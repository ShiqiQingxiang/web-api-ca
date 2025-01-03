import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const FavouriteSchema = new Schema({
    userId: { type: String, required: true },
    movieId: { type: String, required: true },
    movieTitle: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Favourite', FavouriteSchema);