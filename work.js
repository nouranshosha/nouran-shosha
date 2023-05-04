let ourSkills = document.querySelector(".our-skills");
let html = document.querySelector(".skills .skill-box .html");
let css = document.querySelector(".skills .skill-box .css");
let js = document.querySelector(".skills .skill-box .js");
let python = document.querySelector(".skills .skill-box .python");
let php = document.querySelector(".skills .skill-box .php");
let mysql = document.querySelector(".skills .skill-box .mysql");

ourSkills.addEventListener("click", ()=>{
    html.classList.add("red");
    css.classList.add("green");
    js.classList.add("blue");
    python.classList.add("pink");
    php.classList.add("yellow");
    mysql.classList.add("brown");
});


AOS.init();