// Code your solution in this file!
//return first two drivers
const returnFirstTwoDrivers = (drivers) =>{
    let newDrivers = [...drivers];
    return newDrivers.slice(0,2);
}

//returns last two drivers
const returnLastTwoDrivers = (drivers) =>{
    let newDrivers = [...drivers];
    return newDrivers.slice(-2);
}

// Array containing two elements from previously defined two functions
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

//function that will multiply a fare for a ride accordingly
const createFareMultiplier =(value) =>{
    return function (fare){
        return fare * value;
    }
}

//function accepts a fare as its lone argument and doubles it.
const fareDoubler = createFareMultiplier(2);

//function accepts a fare as its lone argument and triples it.
const fareTripler = createFareMultiplier(3);

// return either the first two drivers or the last two drivers.
function selectDifferentDrivers(drivers,selectingDrivers){
    return selectingDrivers(drivers);
}