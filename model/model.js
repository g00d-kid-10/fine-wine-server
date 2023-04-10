const mongoose = require('mongoose')

var schema = mongoose.Schema({
    Title:{type:String},
    Genre:{type:String},
    Description:{type:String},
    Director:{type:String},
    Actors:{type:String},
    Year:{type:Number},
    Runtime:{type:Number},
    Rating:{type:Number},
    Votes:{type:Number},
    Revenue:{type:Number},
    Metascore:{type:Number},
    plink:{type:String},
    vlink:{type:String}
})

const movieDB = mongoose.model('movieDB', schema)
module.exports = movieDB