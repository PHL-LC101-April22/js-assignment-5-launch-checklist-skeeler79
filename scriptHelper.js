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
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth:  </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
                 `
    //populates mission target div
}

function validateInput(testInput) {

    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (typeof (testInput) === 'number') {
        return "Is a Number"
    }

}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let array = [pilot, copilot, fuelLevel, cargoLevel]
    if (array.includes('')) {
        alert("All fields required!")
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Make sure to enter valid information for each field!")
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!")
    }
    // let pilotNameInput = document.querySelector("input[name=pilotName]");
    // let copilotNameInput = document.querySelector("input[name=copilotName]");
    // let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    // let cargoMassInput = document.querySelector("input[name=cargoMass]");
    // debugger
    document.getElementById('pilotStatus') = `${pilot} is ready.`;
    document.getElementById('copilotStatus') = `${copilot} is ready.`;
    if (fuelLevel < 10000) {
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('fuelStatus') = `${fuelLevel} is not enough fuel for the journey.`
        element.setAttribute('launchStatus', "Shuttle not ready for launch").style.color = 'red';
    }
    if (cargoLevel > 10000) {
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('cargoStatus') = `${cargoLevel} is too much mass for the shuttle to take off.`
        element.setAttribute('launchStatus', "Shuttle not ready for launch").style.color = 'red';
    } else {
        element.setAttribute('launchStatus', "Shuttle is ready for launch").style.color = 'green';
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
// returns list of all planet objects
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
