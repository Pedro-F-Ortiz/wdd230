
const requestURL = "/Users/el_piqui/Library/CloudStorage/OneDrive-BYU-Idaho/College Classes/2022/3. Fall/wdd230/lesson-9/data.json"

async function getBusiness(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const business = jsObject["business"];
        console.log(business[0].name);
        business.forEach(displayBusiness);
    }
}

getBusiness(requestURL);

function displayBusiness(item) {
    let card = document.createElement('section')
    let l = document.createElement('l')
    let n = document.createElement('n')
    let a = document.createElement('a')
    let p = document.createElement('p')
    let w = document.createElement('w')

    l.setAttribute('src', item.Logo);
    l.setAttribute('alt', item.Logo);
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