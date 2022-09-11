// variables from here

var search_btn = document.getElementById
("search-btn");
var search_bar = document.querySelector(".search-bar-container");
var user_btn = document.getElementById
("user-btn");
var loginForm = document.querySelector(".login-form-container");
var closeForm_btn = document.getElementById("close-form");
var burger_btn = document.getElementById("burger");
var menu = document.querySelector(".menu");
var currentIndex = 1;
var intervalId = null;
var home = document.querySelector(".home");
// --------------------------------
// functions from here

window.onscroll = function(){
    search_btn.classList.remove("fa-times");
    search_bar.classList.remove("active");
}

search_btn.addEventListener("click",function(){
    search_btn.classList.toggle("fa-times");
    search_bar.classList.toggle("active");
});

user_btn.addEventListener("click",function(){
    loginForm.classList.add("active");
});

closeForm_btn.addEventListener("click",function(){
    loginForm.classList.remove("active");
});

function menuSelect(){
    menu.classList.toggle("active");
    burger_btn.classList.toggle("fa-times");
}

displaySlides(currentIndex);

function setSlides(num) {
    displaySlides(currentIndex += num);
}

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("slider-content");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}


function temp(){
    setSlides(1);
}
function intervalManager(flag) {
   if(flag)
   intervalId = setInterval(temp,5000);
   else
     clearInterval(intervalId);
}
function temp1(){
    intervalManager(1);
}
function temp0(){
    intervalManager(0);
}
home.addEventListener("mouseout",temp1);
home.addEventListener("mouseover",temp0);
window.onload = intervalManager(1);