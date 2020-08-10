let mainNav = document.getElementById('uList');
let navBarToggle = document.querySelector("#checkboxLabel");
let checbox = document.querySelector("#checkbox");

window.addEventListener('scroll', function(e){
  if (window.scrollY >= 100) {
    document.querySelector("nav").style.backgroundColor = "#14161b";
  }
  else {
    document.querySelector("nav").style.backgroundColor = "#0f1014";
  }
});

// Checkbox unchecked when site width is over 767px
setInterval(() => {
  var mq = window.matchMedia( "(max-width: 767px)" );
  if (mq.matches) {}
  else {
    checbox.checked = false
  }
}, 1000);

navBarToggle.addEventListener("click", function() {
  navBarToggle.style.transform = "scale(1.2)";
  setTimeout(function(){
    navBarToggle.style.transform = "scale(1)";
  }, 100)
});

// Give class active when you click on the Burger Menu
navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle('active');
  if (mainNav.classList == "") {
    mainNav.id = "navLeftToRight";
    setTimeout(function(){
      mainNav.id = "uList";
    }, 500);
  }
  else {
    mainNav.id = "uList";
  }
});

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("activeJob");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
      dropdownContent.style.background.color = "#0f1014";
      dropdownContent.style.color = "white";
    } else {
      dropdownContent.style.display = "flex";
    }
  });
}
