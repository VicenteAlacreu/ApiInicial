const Movie = require('../models/movie.model');

const movieCtrl = {};

//Funcion devuelve todas las peliculas
movieCtrl.getMovies = async  (req, res) => {
    const movies = await Movie.find().then((data) => {res.status(200).json({
        status: true,
        data: data
    }).catch((err) => {res.status(400).json({
        status: false,
        message: err.message
    })
        console.error(err)
    })
    });
}

movieCtrl.getMovie = async (req,res) => {
    const movie = await Movie.findById(req.params.id)
        .then((data) => {
            if (data){
                res.status(200).json({
                    status: true,
                    data
                })
            } else {
                res.status(404).json({
                    status: false,
                    message: 'Movie not found'
                })
            }
        }).catch((err) => {
            res.status(400).json({
                status:false,
                message: err.message
            })
            console.error(err)
        })

}
//Añadir una pelicula
movieCtrl.addMovie = async (req,res) => {
    const myMovie = new Movie(req.body);
    await myMovie.save().then(() => {
        res.status(201).json({
            status: true,
            message: 'Movie created'
        })
    }).catch((err) => {
        res.status(400).json({
            status: false,
            message: err.message
        })
        console.error(err)
    })
}

movieCtrl.updateMovie = async (req,res) => {
    const movie = req.body;
    await Movie.findByIdAndUpdate(
        req.params.id,
        {$set: movie},
        {new: true}
    ).then((data) => {
        if (data){
            res.status(200).json({
                status: true,
                message: 'Movie updated'
            })
        } else {
            res.status(404).json({
                status: false,
                message: 'Movie not found'
            })
        }
    }).catch((err) => {
        res.status(400).json({
            status: false,
            message: err.message
        })
        console.error(err)
    })
}

//Funcion para borrar una movie dado un id
movieCtrl.deleteMovie = async (req,res) => {
    await Movie.findByIdAndDelete(req.params.id).then((data) => {
        if (data) {
            res.status(200).json({
                status: true,
                message: 'Movie deleted'
            })
        } else {
            res.status(404).json({
                status: false,
                message: 'Movie Not Found'
            })
        }
    }).catch((err) => {
        res.status(400).json({
            status: false,
            message: err
        })
        console.error(err)
    })
}

movieCtrl.getGenres = async (req,res) => {
    await Movie.find().distinct('genres').then((data) => {
        res.status(200).json({
            status: true,
            data
        })
    }).catch((err) => {
        res.status(400).json({
            status: false,
            message: err.message
        })
        console.error(err)
    })
}

module.exports = movieCtrl