const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const cache = [];

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));




app.get("/mSearch/:input", (req, res) => {
    var input = req.params.input;
    axios.get(`http://www.omdbapi.com/?s=${input}&apikey=8730e0e`)
        .then(response => {
            axios.all(response.data.Search.map((film, index) => {
                return axios.get(`http://www.omdbapi.com/?s=${film.imbdID}&apikey=8730e0e`)
                    .then(response2 => {
                        return response2.data
                    })
            })).then(fullDetails => {
                res.send(fullDetails)
            })
        })
        .catch(err => res.status(500).send("bad"))
});









module.exports = app;
