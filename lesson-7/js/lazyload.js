const image=document.querySelectorAll('img');

//const io = new IntersectionObserver ( 
    //(entries, io) => {
      //  entries.forEach(entry => {
           // console.log(entries);
        //})
        
   // },
   // {
      //  threshold: [.5]
    //}
//) 

//image.forEach(image => {
   // io.observe(image);
//})
const options = {
    threshold:1,
    rootMargin: "0px 0px 100px 0px"
}
const pimages = document.querySelectorAll('[data-src]');

function preloadImage(img){
    const source =img.getAttribute('data-src');
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

// Local Storage
localStorage.setItem('msg1', 'Hello Permanent');
sessionStorage.setItem('msg2', 'Hi Temporary');

let message = localStorage.getItem('msg1');

let visitDate = localStorage.getItem('visitDate');

console.log(visitDate);

// Time stamp of last visited 
if (!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('diff').textContent ='This is your 1st visit';
}
else {
    setStyles();
}

function setStyles() {
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = new Date('2022-10-31');

    let difference = currDate - prevDate;
        console.log(difference);
        let daysDifference = Math.floor(difference/1000/60/60/24);

    document.getElementById('diff').textContent = daysDifference;

    localStorage.setItem('lastvisit', Date.now());
}
