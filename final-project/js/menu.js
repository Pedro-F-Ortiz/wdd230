// Breakfast/ Lunch menu cards in main

const requestURL = "https://pedro-f-ortiz.github.io/wdd230/final-project/breakfast.json"

async function getBreakfast(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const breakfast = jsObject["breakfast"];
        console.log(breakfast[0].Logo);
        breakfast.forEach(displayBreakfast);
        breakfast.forEach(displayBreakfast);
    }
}

getBreakfast(requestURL);

function displayBreakfast(item) {
    let card = document.createElement("section")
    let d = document.createElement("img")
    let n = document.createElement("h2)")
    let i = document.createElement("p")
    let p = document.createElement("p")

    d.setAttribute("src", item.Dish);
    d.setAttribute("alt", item.Name);
    n.textContent = item.Name;
    i.textContent = item.Ingredients;
    p.textContent = item.Price;

    card.appendChild(d);
    card.appendChild(n);
    card.appendChild(i);
    card.appendChild(p);

    document.querySelector(".cards").appendChild(card);
}



// async function getBusiness(requestURL) {
//     const response = await fetch(requestURL);
//     console.log(response);
//     if (response.ok) {
//         const jsObject = await response.json();
//         console.log(jsObject);
//         const business = jsObject["Lunch"];
//         console.log(business[0].Logo);
//         business.forEach(displayBusiness);
//         business.forEach(displayBusinessTable);
//     }
// }