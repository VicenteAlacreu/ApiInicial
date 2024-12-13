const express = require('express');
const movieCrtl = require('../controllers/movie.controller');
const router = express.Router();

router.get('/', movieCrtl.getMovies);
router.get('/movie/:id', movieCrtl.getMovie);
router.post('/', movieCrtl.addMovie);
router.patch('/:id', movieCrtl.updateMovie);
router.delete('/:id', movieCrtl.deleteMovie);

router.get('/genres', movieCrtl.getGenres);

module.exports = router;