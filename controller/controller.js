const movieDB = require('../model/model')


//APIs FOR GET REQUEST

exports.find = async (req, res) => {
    try {
        const movie = await movieDB.find()
        res.send(movie)
    } catch(err) {
        res.status(500).send({message: err.message || "Error occured while retriving movie information"})
    }
}

//APIs FOR POST REQUEST

exports.insert = async (req, res) => {
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