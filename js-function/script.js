'use strict';

function describeCountry(country, population, capitalCity, ) {
    const place = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return place;
}

const toLive1 = describeCountry('Finland', 6, 'Helsink');
const toLive2 = describeCountry('Nigeria', 200, 'Abuja');
const toLive3 = describeCountry('Canada', 38, 'Ottawa');
console.log(toLive1);
console.log(toLive2);
console.log(toLive3);
