const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    author: String,
    title: String,
    body: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', blogSchema);