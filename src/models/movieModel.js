import mongoose from 'mongoose';

// Defines what data our DB accept
const Schema = mongoose.Schema;

// Document (movie data object) contains what info??
export const MovieSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a movie name' 
    },
    actor: {
        type: String,
    },
    content: {
        type: String,
    },
    genre: {
        type: String,
    },
    year: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

export const UserSchema = new Schema({
    email: {
        type: String,
    },
    watchList: {
        type: [String],
        default: [],
    },
    portfolio: {
        type: Map,
        of: Number,
        default: {},
    }
});