const express = require("express");
const booksRouter = require("./routes/books");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Mini Library API",
    endpoints: {
      getAllBooks: "GET /books",
      getBookById: "GET /books/:id",
      searchBooks: "GET /books/search?q=term",
      filterBooks: "GET /books?author=name&year=2022",
      addBook: "POST /books",
      updateBook: "PUT /books/:id",
      deleteBook: "DELETE /books/:id",
    },
  });
});

app.use("/books", booksRouter);

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
