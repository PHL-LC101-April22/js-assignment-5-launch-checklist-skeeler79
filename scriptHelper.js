/// <reference path="script.js" />


const { elementAttributeModified } = require('jsdom/lib/jsdom/living/named-properties-window');

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let div = document.getElementById("missionTarget");
    div.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}  </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
                 `;
    //populates mission target div
}


function validateInput(testInput) {

    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number"
    }

}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let array = [pilot, copilot, fuelLevel, cargoLevel]
    let launchInfo = document.getElementById('launchStatus');
    
    if (array.includes('')) {
        alert("All fields required!")
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Make sure to enter valid information for each field!")
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!")
    
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        document.getElementById('pilotStatus').innerHTML = `${pilot} is ready.`;
        document.getElementById('copilotStatus').innerHTML = `${copilot} is ready.`;
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('fuelStatus').innerHTML = `${fuelLevel}L is not enough fuel for the journey.`
        document.getElementById('cargoStatus').innerHTML = `${cargoLevel}kg is too much mass for the shuttle to take off.`
        launchInfo.innerHTML = "Shuttle is not ready for launch";
        launchInfo.style.color = 'red';

    }else if (fuelLevel < 10000) {
        document.getElementById('pilotStatus').innerHTML = `${pilot} is ready.`;
        document.getElementById('copilotStatus').innerHTML = `${copilot} is ready.`;
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('fuelStatus').innerHTML = `${fuelLevel}L is not enough fuel for the journey.`
        launchInfo.innerHTML = "Shuttle is not ready for launch";
        launchInfo.style.color = 'red';

    }else if (cargoLevel > 10000) {
        document.getElementById('pilotStatus').innerHTML = `${pilot} is ready.`;
        document.getElementById('copilotStatus').innerHTML = `${copilot} is ready.`;
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('cargoStatus').innerHTML = `${cargoLevel}kg is too much mass for the shuttle to take off.`
        launchInfo.innerHTML = "Shuttle is not ready for launch";
        launchInfo.style.color = 'red';

    } else {
        launchInfo.innerHTML = "Shuttle is ready for launch";
        launchInfo.style.color = 'green';
    }
}




// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {

//         return response.json();
//     }).then(function (json) {
//         result = json;
//     });
//     return planetsReturned;
//     // returns list of all planet objects
// }

async function myFetch() {
    const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    const json = await response.json()
    console.log(json)
    return json
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length)
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
