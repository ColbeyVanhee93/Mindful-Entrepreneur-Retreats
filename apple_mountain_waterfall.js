// Entrepreneur Retreats for Aspiring Entrepreneurs

//1
let retreatsList = [];

//2
function addRetreat(name, location, price) {
    let retreat = {
        name: name,
        location: location,
        price: price
    }
    retreatsList.push(retreat);
}

//3
function removeRetreat(index) {
    retreatsList.splice(index, 1);
}

//4
function displayRetreats() {
    for (let i = 0; i < retreatsList.length; i++) {
        console.log(i + ': ' + retreatsList[i].name + ', ' + retreatsList[i].location + ', ' + '$' + retreatsList[i].price);
    }
}

//5
function getRetreatByName(name) {
    for (let i = 0; i < retreatsList.length; i++) {
        if (retreatsList[i].name === name) {
            return retreatsList[i];
        }
    }
    return null;
}

//6
function getRetreatsByLocation(location) {
    let retreatsByLocation = [];
    for (let i = 0; i < retreatsList.length; i++) {
        if (retreatsList[i].location === location) {
            retreatsByLocation.push(retreatsList[i]);
        }
    }
    return retreatsByLocation;
}

//7
function getRetreatByPrice(price) {
    let retreatByPrice = [];
    for (let i = 0; i < retreatsList.length; i++) {
        if (retreatsList[i].price <= price) {
            retreatByPrice.push(retreatsList[i]);
        }
    }
    return retreatByPrice;
}

//8
function searchRetreats(searchTerm) {
    let searchResult = [];
    for (let i = 0; i < retreatsList.length; i++) {
        if (retreatsList[i].name.includes(searchTerm) || retreatsList[i].location.includes(searchTerm) || String(retreatsList[i].price.includes(searchTerm))) {
            searchResult.push(retreatsList[i]);
        }
    }
    return searchResult;
}

//9
function sortRetreatsByPrice() {
    retreatsList.sort(function(a, b) {
        return a.price - b.price;
    });
}

//10
function sortRetreatsByLocation() {
    retreatsList.sort(function(a, b) {
        let locationA = a.location.toLowerCase();
        let locationB = b.location.toLowerCase();
        if (locationA < locationB) {
            return -1;
        }
        if (locationA > locationB) {
            return 1;
        }
        return 0;
    });
}

//11
function renderRetreats() {
    let retreatsContainer = document.querySelector(".retreats-container");

    for (let i = 0; i < retreatsList.length; i++) {
        let retreatElement = document.createElement("div");
        retreatElement.classList.add("retreat-item");
        retreatElement.innerHTML = `
            <div class="retreat-name">${retreatsList[i].name}</div>
            <div class="retreat-location">${retreatsList[i].location}</div>
            <div class="retreat-price">$ ${retreatsList[i].price}</div>
        `;
        retreatsContainer.appendChild(retreatElement);
    }
}

//12
function initRetreatPage() {
    let retreatsContainer = document.querySelector(".retreats-content");
    retreatsContainer.innerHTML = `
        <div class="retreats-container"></div>
    `;
    renderRetreats();
}

//13
let addRetreatForm = document.querySelector(".add-retreat-form");
addRetreatForm.onsubmit = function(e) {
    e.preventDefault();
    let name = e.target.elements.retreatName.value;
    let location = e.target.elements.retreatLocation.value;
    let price = e.target.elements.retreatPrice.value;
    addRetreat(name, location, price);
    renderRetreats();
}

//14
let removeRetreatForm = document.querySelector(".remove-retreat-form");
removeRetreatForm.onsubmit = function(e) {
    e.preventDefault();
    let index = e.target.elements.retreatIndex.value;
    removeRetreat(index);
    renderRetreats();
}

//15
let searchRetreatForm = document.querySelector(".search-retreat-form");
searchRetreatForm.onsubmit = function(e) {
    e.preventDefault();
    let searchTerm = e.target.elements.searchTerm.value;
    let searchResults = searchRetreats(searchTerm);
    let searchResultsContainer = document.querySelector(".search-results-container");

    searchResultsContainer.innerHTML = ``;
    for (let i = 0; i < searchResults.length; i++) {
        let resultElement = document.createElement("div");
        resultElement.classList.add("retreat-item");
        resultElement.innerHTML = `
            <div class="retreat-name">${searchResults[i].name}</div>
            <div class="retreat-location">${searchResults[i].location}</div>
            <div class="retreat-price">$ ${searchResults[i].price}</div>
        `;
        searchResultsContainer.appendChild(resultElement);
    }
}

//16
let sortPriceButton = document.querySelector(".sort-price-button");
sortPriceButton.onclick = function() {
    sortRetreatsByPrice();
    renderRetreats();
}

//17
let sortLocationButton = document.querySelector(".sort-location-button");
sortLocationButton.onclick = function() {
    sortRetreatsByLocation();
    renderRetreats();
}

//18
let priceFilterButton = document.querySelector(".price-filter-button");
priceFilterButton.onclick = function() {
    let priceFilter = document.querySelector(".price-filter").value;
    let retreatsByPrice = getRetreatByPrice(priceFilter);
    renderRetreatsByPrice(retreatsByPrice);
}

//19
function renderRetreatsByPrice(retreatsByPrice) {
    let retreatsContainer = document.querySelector(".retreats-container");
    retreatsContainer.innerHTML = ``;
    for (let i = 0; i < retreatsByPrice.length; i++) {
        let retreatElement = document.createElement("div");
        retreatElement.classList.add("retreat-item");
        retreatElement.innerHTML = `
            <div class="retreat-name">${retreatsByPrice[i].name}</div>
            <div class="retreat-location">${retreatsByPrice[i].location}</div>
            <div class="retreat-price">$ ${retreatsByPrice[i].price}</div>
        `;
        retreatsContainer.appendChild(retreatElement);
    }
}

//20
let locationFilterButton = document.querySelector(".location-filter-button");
locationFilterButton.onclick = function() {
    let locationFilter = document.querySelector(".location-filter").value;
    let retreatsByLocation = getRetreatsByLocation(locationFilter);
    renderRetreatsByLocation(retreatsByLocation);
}

//21
function renderRetreatsByLocation(retreatsByLocation) {
    let retreatsContainer = document.querySelector(".retreats-container");
    retreatsContainer.innerHTML = ``;
    for (let i = 0; i < retreatsByLocation.length; i++) {
        let retreatElement = document.createElement("div");
        retreatElement.classList.add("retreat-item");
        retreatElement.innerHTML = `
            <div class="retreat-name">${retreatsByLocation[i].name}</div>
            <div class="retreat-location">${retreatsByLocation[i].location}</div>
            <div class="retreat-price">$ ${retreatsByLocation[i].price}</div>
        `;
        retreatsContainer.appendChild(retreatElement);
    }
}

//22
let resetButton = document.querySelector(".reset-button");
resetButton.onclick = function() {
    initRetreatPage();
}

//23
addRetreat("Spanish Entrepreneurs Retreat", "Barcelona, Spain", 3000);
addRetreat("Silicon Valley Entrepreneur Retreat", "San Francisco, CA, USA", 2000);
addRetreat("Johannesburg Entrepreneur Retreat", "Johannesburg, South Africa", 2000);
addRetreat("Women in Entrepreneurship Retreat", "London, England", 1500);
addRetreat("Entrepreneur Bootcamp in the Lake District", "Lake District, England", 1000);
addRetreat("Entrepreneurship in Acadia National Park", "Bar Harbor, Maine, USA", 500);

//24
initRetreatPage();