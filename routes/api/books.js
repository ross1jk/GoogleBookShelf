const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Routes to Create/add new book and route to find all"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Route to Delte Books"
router
  .route("/:id")
  .delete(booksController.remove);

module.exports = router;
