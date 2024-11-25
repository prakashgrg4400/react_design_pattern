import { createRequire } from "module";

const require = createRequire(import.meta.url);

const express = require("express");

const app = express();

const cors = require("cors");

// const corsOptions = {
//     origin: "http://localhost:5173",
// };

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(express.json());

let currentUser = {
    name: "Sonu Gurung",
    age: 20,
    country: "India",
    books: ["Chemistry", "Physics"],
};

let users = [
    {
        name: "Prakash Gurung",
        age: 23,
        country: "Nepal",
        books: ["Nepali", "Science"],
    },
    {
        name: "Laxmi Gurung",
        age: 24,
        country: "Nepal",
        books: ["Computer", "Node.js"],
    },
    {
        name: "Sonu Gurung",
        age: 20,
        country: "India",
        books: ["Chemistry", "Physics"],
    },
];

let books = [
    {
        name: "To kill a mocking  bird",
        pages: 281,
        title: "Harper Lee",
        price: 12.99,
    },
    {
        name: "Black Water",
        pages: 281,
        title: "Harper Lee",
        price: 12.99,
    },
    {
        name: "Gautam Buddha",
        pages: 281,
        title: "Harper Lee",
        price: 12.99,
    },
];

// app.get("/current-user", cors(corsOptions), (req, res) => {
app.get("/current-user", (req, res) => {
    res.json(currentUser);
});

app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    res.json(users.find((user) => user.id === id));
});

app.get("/users", (req, res) => res.json(users));

app.post("/users/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    console.log(req.body);
    const { user: editedUser } = req.body;

    users = users.map((user) => (user.id === id ? editedUser : user));

    res.json(users.find((user) => user.id === id));
});

app.get("/books", (req, res) => res.json(books));

app.get("/books/:id", (req, res) => {
    const { id } = req.params;
    res.json(books.find((book) => book.id === id));
});

let port = 9090;
app.listen(port, () => {
    console.log(`Server is listening on Port : ${port}`);
});

// "proxy" : "http://localhost:9090"
