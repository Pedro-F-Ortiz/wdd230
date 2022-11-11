
const requestURL = "https://pedro-f-ortiz.github.io/wdd230/lesson-9/data.json"

async function getBusiness(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const business = jsObject["business"];
        console.log(business[0].Logo);
        business.forEach(displayBusiness);
    }
}

getBusiness(requestURL);

function displayBusiness(item) {
    let card = document.createElement('section')
    let l = document.createElement('img') 
    let n = document.createElement('h2')
    let a = document.createElement('p')
    let p = document.createElement('p')
    let w = document.createElement('p')

    l.setAttribute('src', item.Logo);
    l.setAttribute('alt', item.Name);
    n.textContent = item.Name;
    a.textContent = item.Address;
    p.textContent = item.Phone;
    w.textContent = item.Web; 

    card.appendChild(l);
    card.appendChild(n);
    card.appendChild(a);
    card.appendChild(p);
    card.appendChild(w);

document.querySelector('.cards').appendChild(card);
}


// Grid/ List buttons

$('button').on('click',function(e) {
    if ($(this).hasClass('grid')) {
        $('#container ul').removeClass('list').addClass('grid');
    }
    else if($(this).hasClass('list')) {
        $('#container ul').removeClass('grid').addClass('list');
    }
});