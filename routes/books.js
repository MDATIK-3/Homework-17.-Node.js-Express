const express = require("express");
const router = express.Router();
const { books, getNextId } = require("../data/books");

router.get("/search", (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }

  const results = books.filter((book) =>
    book.title.toLowerCase().includes(q.toLowerCase())
  );

  res.json(results);
});

router.get("/", (req, res) => {
  const { author, year } = req.query;
  let filtered = books;

  if (author) {
    filtered = filtered.filter((book) =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (year) {
    filtered = filtered.filter((book) => book.year === parseInt(year));
  }

  res.json(filtered);
});

router.get("/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.json(book);
});

router.post("/", (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res
      .status(400)
      .json({ error: "Fields 'title', 'author', and 'year' are required" });
  }

  const newBook = {
    id: getNextId(),
    title,
    author,
    year: parseInt(year),
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

router.put("/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  const { title, author, year } = req.body;

  if (title) book.title = title;
  if (author) book.author = author;
  if (year) book.year = parseInt(year);

  res.json(book);
});

router.delete("/:id", (req, res) => {
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  const deleted = books.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;
