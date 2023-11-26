// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

let toogle = document.querySelector(".toogle");
let body = document.querySelector("body");

toogle.addEventListener("click", function() {
  body.classList.toggle("open");
});
