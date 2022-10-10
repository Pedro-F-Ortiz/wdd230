let date = new Date();

let full_date = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(date);
let current_date_element = document.querySelector("#date");
current_date_element.innerHTML = date;

let year = date.getFullYear();
document.querySelector(".year").textContent = year;

let currentDate = document.lastModified;
document.querySelector(".time").textContent = currentDate;

// Nav Button js
hamburgerBtn = document.querySelector("#menu-btn");

hamburgerBtn.addEventListener("click", ()=> {
    navLinks = document.querySelectorAll(".links"); 
    navLinks.forEach(link => {
        link.classList.toggle("show-nav");
    })
})
