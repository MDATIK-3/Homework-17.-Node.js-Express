const books = [
  { id: 1, title: "Node.js for Beginners", author: "John Doe", year: 2022 },
  { id: 2, title: "Express in Action", author: "Evan Hahn", year: 2020 },
  { id: 3, title: "JavaScript: The Good Parts", author: "Douglas Crockford", year: 2008 },
  { id: 4, title: "Learning Node.js Development", author: "Andrew Mead", year: 2018 },
  { id: 5, title: "Web Development with Node and Express", author: "Ethan Brown", year: 2019 },
  { id: 6, title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 },
  { id: 7, title: "You Don't Know JS: Scope & Closures", author: "Kyle Simpson", year: 2014 },
  { id: 8, title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { id: 9, title: "The Pragmatic Programmer", author: "Andrew Hunt and David Thomas", year: 1999 },
  { id: 10, title: "Node.js Design Patterns", author: "Mario Casciaro and Luciano Mammino", year: 2020 },
  { id: 11, title: "Secrets of the JavaScript Ninja", author: "John Resig and Bear Bibeault", year: 2012 },
  { id: 12, title: "Effective JavaScript", author: "David Herman", year: 2012 },
  { id: 13, title: "Programming TypeScript", author: "Boris Cherny", year: 2019 },
  { id: 14, title: "React: Up & Running", author: "Stoyan Stefanov", year: 2016 },
  { id: 15, title: "HTML and CSS: Design and Build Websites", author: "Jon Duckett", year: 2011 },
  { id: 16, title: "JavaScript and JQuery: Interactive Front-End Web Development", author: "Jon Duckett", year: 2014 },
  { id: 17, title: "High Performance Browser Networking", author: "Ilya Grigorik", year: 2013 },
  { id: 18, title: "Working Effectively with Legacy Code", author: "Michael Feathers", year: 2004 },
  { id: 19, title: "Head First Design Patterns", author: "Eric Freeman and Elisabeth Robson", year: 2004 },
  { id: 20, title: "Cracking the Coding Interview", author: "Gayle Laakmann McDowell", year: 2015 },
  { id: 21, title: "Introduction to Algorithms", author: "Thomas H. Cormen", year: 2009 },
  { id: 22, title: "Design Patterns: Elements of Reusable Object-Oriented Software", author: "Erich Gamma, Richard Helm, Ralph Johnson", year: 1994 },
  { id: 23, title: "Refactoring: Improving the Design of Existing Code", author: "Martin Fowler", year: 1999 },
  { id: 24, title: "Code Complete", author: "Steve McConnell", year: 2004 },
  { id: 25, title: "The Mythical Man-Month", author: "Frederick P. Brooks Jr.", year: 1975 }
];

let nextId = 26;

function getNextId() {
  return nextId++;
}

module.exports = { books, getNextId };