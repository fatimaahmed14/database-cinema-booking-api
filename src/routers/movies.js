const express = require("express");
const {
  getMovies,
  createMovie,
  getMovieById,
  updateMovieById,
} = require("../controllers/movies");

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.post("/", createMovie);
router.put("/:id", updateMovieById);

module.exports = router;
