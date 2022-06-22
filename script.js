

/// <reference path="scriptHelper.js" />

// const { addDestinationInfo, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById('faultyItems');

        formSubmission(form, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
    });
});


let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse = myFetch();
listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
}).then(function () {
    console.log(listedPlanets);
    // Below this comment, call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
    let newPlanet = pickPlanet(listedPlanets);
    console.log(newPlanet);
    console.log(addDestinationInfo(newPlanet));
});




// let form = document.querySelector("form");
// let pilotNameInput = document.querySelector("input[name=pilotName]");
// let copilotNameInput = document.querySelector("input[name=copilotName]");
// let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
// let cargoMassInput = document.querySelector("input[name=cargoMass]");

    
//     event.preventDefault();
// });
