const movieName = document.querySelector("#name");
const description = document.querySelector("#description");
const image = document.querySelector("#image");

const form = document.querySelector("form");

// array vacio
const movies = [];

form.onsubmit = function (event) {
  event.preventDefault();

  movies.push({
    name: movieName.value,
    description: description.value,
    image: image.value,
  });

  movieName.value = "";
  description.value = "";
  image.value = "";
};