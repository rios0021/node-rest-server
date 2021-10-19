const {response, request} = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const usersGet = (req, res = response) => {
    const {q, name = 'No name', apikey} = req.query;
    res.json({
        msg: 'get API controller',
        q,
        name,
        apikey
    });
}
const usersPut = (req, res = response) => {
    
    const {id} = req.params;

    res.json({
        msg: 'put API',
        id
    });
}
const usersPost = async (req, res = response) => {
    const {name, email, password, role} = req.body;
    const user = new User({name, email, password, role});

    // Check if email exists

    // Hash password
    const  salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    // Save in DB

    await user.save();

    res.status(201).json({
        msg: 'post API',
        user
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
}
const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    });
}
module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}