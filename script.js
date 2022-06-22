

/// <reference path="scriptHelper.js" />

// const { addDestinationInfo, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {

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
        let div = document.getElementById("missionTarget");

        console.log(addDestinationInfo(div, newPlanet.name, newPlanet.diameter, newPlanet.star, newPlanet.distance, newPlanet.moons, newPlanet.imageUrl));
    });




    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById('faultyItems');

        formSubmission(form, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
        event.preventDefault();
    });

});




// let form = document.querySelector("form");
// let pilotNameInput = document.querySelector("input[name=pilotName]");
// let copilotNameInput = document.querySelector("input[name=copilotName]");
// let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
// let cargoMassInput = document.querySelector("input[name=cargoMass]");


//     
// });
// let newPlanetName = newPlanet.name;
        // let newPlanetDiameter = newPlanet.diameter;
        // let newPlanetStar = newPlanet.star;
        // let newPlanetDistance = newPlanet.distance;
        // let newPlanetMoons = newPlanet.moons;
        // let newPlanetImageUrl = newPlanet.imageUrl;