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

// Weekly message
let currentDay = date.getDay()
if (currentDay == 1 || currentDay == 2){
    document.querySelector("#weekly-msg").style.display= "block";
}
else {
    document.querySelector("#weekly-msg").style.display = "none";
} 


// Local Storage
// localStorage.setItem('msg1', 'Hello Permanent');
// sessionStorage.setItem('msg2', 'Hi Temporary');

// let message = localStorage.getItem('msg1');

// let visitDate = localStorage.getItem('visitDate');

// console.log(visitDate);

// // Last visited time stamp
// if (!localStorage.getItem('lastvisit')) {
//     localStorage.setItem('lastvisit', Date.now());
//     document.getElementById('diff').textContent ='This is your 1st visit';
// }
// else {
//     setStyles();
// }

// function setStyles() {
//     let prevDate = localStorage.getItem('lastvisit');
//     let currDate = new Date('2022-10-28');

//     let difference = currDate - prevDate;
//         console.log(difference);
//         let daysDifference = Math.floor(difference/1000/60/60/24);

//     document.getElementById('diff').textContent = daysDifference;

//     localStorage.setItem('lastvisit', Date.now());
// }



let current = Date.now();
let previous = (localStorage.getItem('lastvisit'));

localStorage.setItem('lastvisit', current);

console.log('current', current);
console.log('previous', previous);
let diff = (current - previous);

let lastVisited = document.querySelector('#last-visit');

if (previous !== null) {
    let days = Math.floor(diff/1000/60/60/24);

    lastVisited.innerHTML = days + 'days'
}