const express = require("express");
const server = express();
const axios = require("axios");

server.use(express.json());

server.get("/dadjoke", (req,res) => {
    axios.get("http://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
            "User-Agent": "axios 1.3.4",
        }
    })
    .then(joke => res.status(200).json(joke.data))
    .catch(e => console.log(e.message))
});

server.get("/show/:name", (req,res) => {
    const showName = req.params.name
    axios.get(`http://api.tvmaze.com/search/shows?q=${showName}`)
    .then(show => res.status(200).json(show.data))
    .catch(e => console.log(e.message))
});

server.post("/age", (req,res) => {
    const {name} = req.body
    axios.get(`https://api.agify.io?name=${name}`)
    .then(age => res.status(200).json(age.data))
    .catch(e => console.log(e.message))

})

server.use("*", (req,res) => {
    res.status(404).json({message:"Page Not Found."})
});
module.exports = server;