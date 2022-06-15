const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: String,
    picture: String,
    active: Boolean,
    favorites: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)