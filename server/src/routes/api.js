const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Post = require('../../models/Post');

// get all posts
router.get('/posts', (req, res) => {
    Post.find({})
        .then(posts => res.send(posts))
        .catch(err => console.log(err))
});

// get one post
router.get('/posts/:id', (req, res) => {
    Post.findById({
            _id: req.params.id
        })
        .then(post => res.send(post))
        .catch(err => console.log(err))
});

// add post
router.post('/posts', (req, res) => {
    Post.create(req.body)
        .then(post => res.send(post))
        .catch(err => console.log(err))
});

// update post
router.put('/posts/:id', (req, res) => {
    Post.findByIdAndUpdate({
            _id: req.params.id
        }, req.body)
        .then(post => res.send(post))
        .catch(err => console.log(err))
});

// delete post
router.delete('/posts/:id', (req, res) => {
    Post.findByIdAndRemove({
            _id: req.params.id
        })
        .then(post => res.send(post))
        .catch(err => console.log(err))
});

module.exports = router;