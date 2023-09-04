const {movieDB, tvshowDB} = require('../model/model')


//APIs FOR GETTING MOVIES
exports.findMovies = async (req, res) => {
    try {
        const movie = await movieDB.find()
        res.send(movie)
    } catch(err) {
        res.status(500).send({message: err.message || "Error occured while retriving movie information"})
    }
}

//APIs FOR GETTING TVSHOWS
exports.findTVShows = async (req, res) => {
    try {
        const movie = await tvshowDB.find()
        res.send(movie)
    } catch(err) {
        res.status(500).send({message: err.message || "Error occured while retriving movie information"})
    }
}

//APIs FOR INSERTING MOVIE DATA
exports.insertMovie = async (req, res) => {
    try {
        data = new movieDB({
                    Title: req.body.Title,
                    Genre: req.body.Genre,
                    Description: req.body.Description,
                    Director: req.body.Director,
                    Actors: req.body.Actors,
                    Year: req.body.Year,
                    Runtime: req.body.Runtime,
                    Rating: req.body.Rating,
                    Votes: req.body.Votes,
                    Revenue: req.body.Revenue,
                    Metascore: req.body.Metascore,
                    plink: req.body.plink,
                    vlink: req.body.vlink
                }
            )
            const result = await data.save()
            res.send(result)
    } catch (err) {
        console.log(err)
    }
}

//APIs FOR INSERTING TVSHOW DATA
exports.insertTVShow = async (req, res) => {
    try {
        data = new tvshowDB({
                    Title: req.body.Title,
                    Genre: req.body.Genre,
                    Description: req.body.Description,
                    Director: req.body.Director,
                    Actors: req.body.Actors,
                    Year: req.body.Year,
                    Runtime: req.body.Runtime,
                    Rating: req.body.Rating,
                    Votes: req.body.Votes,
                    plink: req.body.plink,
                    vlink: req.body.vlink
                }
            )
            const result = await data.save()
            res.send(result)
    } catch (err) {
        console.log(err)
    }
}