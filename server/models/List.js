const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    // add this when you do authentication to connect a list to a user
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('List', ListSchema)