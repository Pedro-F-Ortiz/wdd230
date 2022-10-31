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



Lazy Images
const image=document.querySelectorAll('img');

const options = {
    threshold: 1,
    rootMargin: "0px 0px 100px 0px"
}
const pimages = document.querySelectorAll("[data-src]");

function preloadImage(img){
    const source =img.getAttribute("data-src");
    if (!source) {
        return;
    }
    img.src= source;
}

const io = new IntersectionObserver ( 
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                preloadImage(entry.target);
                io.unobserve(entry.target)
            }
        });
    }, options);

    pimages.forEach(image => {
        io.observe(image);
        })


Last visited time stamp
if (!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('diff').textContent ='This is your 1st visit';
}
else {
    setStyles();
}

function setStyles() {
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = new Date('2022-10-27');

    let difference = currDate - prevDate;
        console.log(difference);
        let daysDifference = Math.floor(difference/1000/60/60/24);

    document.getElementById('diff').textContent = daysDifference;

    localStorage.setItem('lastvisit', Date.now());
}

