let mainNav = document.getElementById('uList');
let navBarToggle = document.querySelector("#checkboxLabel");
let checbox = document.querySelector("#checkbox");

// Give class active when you click on the Burger Menu
navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle('active');
  if (mainNav.classList == "") {
    mainNav.id = "navLeftToRight";
    mainNav.style=""
    setTimeout(function(){
      mainNav.id = "uList";
    }, 500);
  }
  else {
    mainNav.style="animation: rightToLeft 0.6s ease;";
    mainNav.id = "uList";
  }
});

// Gallery
fetch("http://localhost:4000/assets/", {
  "method": "GET"
})
.then(res => res.json())
.then(assetId => {
  fetch("http://localhost:4000/gallery-photos", {
    "method": "GET"
  })
  .then(res => res.json())
  .then(gallery => {
  assetId.forEach( element=> {

        // Events
    fetch("http://localhost:4000/events", {
      "method": "GET"
    })
    .then(res => res.json())
    .then(events => {
      events.forEach(event => {
        if (event.id == element.id) {
          document.querySelector(".section__event").innerHTML += `
          <img class="event__img" alt="events" src=${element.url}>
          <div class="event__purple">
              <p class="purple__text">${event.eventDate.slice(0, 10)}</p>
              <p class="purple__text">00:00</p>
              <p class="purple__text">${event.location}</p>
          </div>
          `
        } else {

        }
      });
    });

    gallery.forEach(Gasset => {
      if (Gasset.asset == element.id) {
        document.querySelector(".gallery").innerHTML += `
        <figure class="gallery__figure">
        <img class="gallery__img img1" src=${element.url} alt="club table">
        <div class="gallery__triangle-top"></div>
        <div class="gallery__triangle-bottom"></div>
        </figure>
        `}else {
        }
      })
    });
  });
});