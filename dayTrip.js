"use script"

// Need a destination to be randomly selected for trip

let notSatisfied = true;
while(notSatisfied == true){


    let destination = ["Tampa", "Orlando",
    "Miami", "Key West", "Daytona"];
    let myDestination = destination[Math.floor(Math.random() * 4)]; 
    

    let restaurant = ["Burns", "Shell",
    "Black Rock","Ulele","Cena"]; 
    let myRestaurant = restaurant[
        Math.floor(Math.random() * 4)];
        

    let transportation = ["Car","Bike",
    "Scooter","Walk","Uber"]; let myTransportation = transportation[
        Math.floor(Math.random() * 4)];
    
    let entertainment = ["Dancing", "Concert", 
    "Art Gallery", "Beach", "Shopping"];

    let myEntertainment = entertainment[
        Math.floor(Math.random() * 4)];

    alert(`${myDestination}\n${myRestaurant}\n
    ${myTransportation}\n${myEntertainment}`)

    let myTrip = confirm("Is this trip good?");
    console.log(myTrip); // Yes = true, No = False;
    if (myTrip){ // if true
    alert("Let's go Honey!");
    notSatisfied = false;
    }
    else {// if false 
    alert("Building whole new trip")
    }
}