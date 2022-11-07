
// ASYNC AWAIT Fetch

const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json"

async function getProphets(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsonObject = await response.json();
        console.log(jsonObject);
        const prophets = jsonObject["prophets"];
        console.log(prophets[0].lastname);
        prophets.forEach(displayProphets);
    }
}

getProphets(requestURL);

function displayProphets(item) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let image = document.createElement("img")

    h2.textContent = item.name + " " + item.lastname; 
    lastname;
    img.setAttribute("src", item.imageurl);

    card.appendChild(h2);
    card.appendChild(img);
    document.querySelector(".cards").appendChild(card);
}