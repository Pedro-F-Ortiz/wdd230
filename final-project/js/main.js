// Date stamp for header

let date = new Date();

let full_date = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(date);
let current_date_element = document.querySelector("#date");
current_date_element.innerHTML = date;

// Copy right date for footer

let year = date.getFullYear();
document.querySelector(".year").textContent = year;

