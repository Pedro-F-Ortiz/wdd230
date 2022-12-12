// Breakfast menu cards in main

const requestURL = "https://pedro-f-ortiz.github.io/wdd230/final-project/data.json"

async function getBreakfast(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const breakfast = jsObject["breakfast"];
        console.log(breakfast[0].name);
        breakfast.forEach(displayBreakfast);
    }
}

getBreakfast(requestURL);

function displayBreakfast(item) {
    let card = document.createElement("section")
    let dish = document.createElement("img")
    let name = document.createElement("h2")
    let ing = document.createElement("p")
    let price = document.createElement("p")

    dish.setAttribute("src", item.Dish);
    dish.setAttribute("alt", item.Name); 
    name.textContent = item.Name;
    ing.textContent = item.Ingredients;
    price.textContent = item.Price;

    card.appendChild(dish);
    card.appendChild(name);
    card.appendChild(ing);
    card.appendChild(price);

    document.querySelector(".breakfast-cards").appendChild(card);
}


async function getLunch(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const lunch = jsObject["lunch"];
        console.log(lunch[0].name);
        lunch.forEach(displayLunch);
    }
}

getLunch(requestURL);

function displayLunch(item) {
    let card = document.createElement("section")
    let dish = document.createElement("img")
    let name = document.createElement("h2")
    let ing = document.createElement("p")
    let price = document.createElement("p")

    dish.setAttribute("src", item.Dish);
    dish.setAttribute("alt", item.Name); 
    name.textContent = item.Name;
    ing.textContent = item.Ingredients;
    price.textContent = item.Price;

    card.appendChild(dish);
    card.appendChild(name);
    card.appendChild(ing);
    card.appendChild(price);

    document.querySelector(".lunch-cards").appendChild(card);
}

// Lunch menu cards from main

// const requestURL = "https://pedro-f-ortiz.github.io/wdd230/final-project/lunch.json"

// async function getLunch(requestURL) {
//     const response = await fetch(requestURL);
//     console.log(response);
//     if (response.ok) {
//         const jsObject = await response.json();
//         console.log(jsObject);
//         const lunch = jsObject["lunch"];
//         console.log(lunch[0].name);
//         lunch.forEach(displayLunch);
//     }
// }

// getLunch(requestURL);

// function displayLunch(item) {
//     let card = document.createElement("section")
//     let dish = document.createElement("img")
//     let name = document.createElement("h2")
//     let ing = document.createElement("p")
//     let price = document.createElement("p")

//     dish.setAttribute("src", item.imageurl);
//     dish.setAttribute("alt", item.Name); 
//     name.textContent = item.Name;
//     ing.textContent = item.Ingredients;
//     price.textContent = item.Price;

//     card.appendChild(dish);
//     card.appendChild(name);
//     card.appendChild(ing);
//     card.appendChild(price);

//     document.querySelector(".lunch-cards").appendChild(card);
// }
