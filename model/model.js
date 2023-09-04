const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({
    Title:{type:String, required:true },
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

const TVShowSchema = mongoose.Schema({
    Title:{type:String, required:true },
    Genre:{type:String},
    Description:{type:String},
    Director:{type:String},
    Actors:{type:String},
    Year:{type:Number},
    Runtime:{type:Number},
    Rating:{type:Number},
    Votes:{type:Number},
    plink:{type:String},
    vlink:{type:String}
})

const movieDB = mongoose.model('movieDB', MovieSchema)
const tvshowDB = mongoose.model('tvshowDB', TVShowSchema)
module.exports = {movieDB, tvshowDB}