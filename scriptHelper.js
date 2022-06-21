const { elementAttributeModified } = require('jsdom/lib/jsdom/living/named-properties-window');

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {

    // let pilotNameInput = document.querySelector("input[name=pilotName]");
    // let copilotNameInput = document.querySelector("input[name=copilotName]");
    // let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    // let cargoMassInput = document.querySelector("input[name=cargoMass]");

    // if (pilotNameInput || copilotNameInput === "") {
    //     return "Empty";
    // } else if (isNan(fuelLevelInput) || isNan(cargoMassInput)) {
    //     return "Not a Number";
    // } else if (typeof (pilotNameInput) || typeof (copilotNameInput) === 'number') {
    //     return "Is a Number";
    // } else {
    //     return false;
    // }
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (typeof (testInput) === 'number') {
        return "Is a Number"
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput() === "Empty") {
        alert("All fields required!")
    } else if (validateInput(pilot) || validateInput(copilot) === "Is a Number") {
        alert("Make sure to enter valid information for each field!")
    } else if (validateInput(fuelLevel) || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!")
    }
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");

    document.getElementById('pilotStatus') = `${pilotNameInput.value} is ready.`;
    document.getElementById('copilotStatus') = `${copilotNameInput.value} is ready.`;
    if (fuelLevelInput < 10000) {
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('fuelStatus') = `${fuelLevelInput} is not enough fuel for the journey.`
        element.setAttribute('launchStatus', "Shuttle not ready for launch").style.color = 'red';
    }
    if (cargoMassInput > 10000) {
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('cargoStatus') = `${cargoMassInput} is too much mass for the shuttle to take off.`
        element.setAttribute('launchStatus', "Shuttle not ready for launch").style.color = 'red';
    }else {
        element.setAttribute('launchStatus', "Shuttle is ready for launch").style.color = 'green';
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
