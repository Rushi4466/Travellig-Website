const express = require("express");
const app = express();
const path = require("path");

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static files
app.use(express.static(path.join(__dirname, "public")));

// destinations
const destinations = [
  {
    name: "Kerala, India",
    image: "/images/kerala.jpg",
    description: "Backwaters, houseboats and greenery."
  },
  {
    name: "Manali, India",
    image: "/images/manali.jpg",
    description: "Snow mountains and adventure."
  },
  {
    name: "Andaman & Nicobar",
    image: "/images/andaman.jpg",
    description: "Clean beaches and coral reefs."
  },
  {
    name: "London, UK",
    image: "/images/london.jpg",
    description: "Historic and modern city."
  },
  {
    name: "Nepal",
    image: "/images/nepal.jpg",
    description: "Himalayas and Mount Everest."
  }
];

// route
app.get("/", (req, res) => {
  res.render("index", { destinations });
});

// server
app.listen(4000, '0.0.0.0', () => {
  console.log("Server running on port 4000");
});
