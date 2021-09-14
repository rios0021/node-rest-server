const {response} = require('express')

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
const usersPost = (req, res = response) => {
    const {name, age} = req.body;
    
    res.status(201).json({
        msg: 'post API',
        name,
        age
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