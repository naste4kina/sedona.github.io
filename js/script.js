var link = document.querySelector(".search-hotel-button");
var popup = document.querySelector(".search-form");
var start = popup.querySelector("[name=start-date]");
var finish = popup.querySelector("[name=finish-date]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");
var form = popup.querySelector("form");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-form-show");
  });
popup.addEventListener("submit", function (evt) {
  if (!start.value || !finish.value || !adults.value || !children.value) {
    evt.preventDefault();
    popup.classList.add("search-form-error");
  }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
         if (popup.classList.contains("search-form-show")) {
           popup.classList.remove("search-form-show");
         }
       }
     });
