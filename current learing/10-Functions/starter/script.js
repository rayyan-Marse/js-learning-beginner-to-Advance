'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassanger = 1, price = 1999) {
  //ES%
  // numPassanger = numPassanger || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassanger,
    price,
  };
  console.log(booking);
  console.log(bookings.push(booking));
  console.log(bookings);
};

createBooking(123);
createBooking(1234, 5, 1990);

const flightName = 'LH5R';
const rayyan2 = {
  name: 'rayyan',
  passport: 1254994,
};

const checkIn = function (flightNamd, passanger) {
  flightNamd = 'RH202$R';
  passanger.name = 'Mr .' + passanger.name;
  if (passanger.passport === 1254994) {
    alert('check in');
  } else {
    alert('wrong passport number');
  }
};

checkIn(flightName, rayyan2);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLocaleLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transormer = function (str, fn) {
  console.log(`original string is ${str}`);
  console.log(`transformed string ${fn(str)}`);
  console.log(`transformed string ${fn.name}`);
};

transormer('Javascript is the best!', upperFirstWord);
transormer('Javascript is the best!', oneWord);

const high5 = function(){
  console.log('my name is rayyan shaikh');
};

document.body.addEventListener('click',high5);
['rayyan', 'faizan', 'baba', 'ammmi'].forEach(high5);

const grret = function (greets) {
  return function () {
    console.log(`grreting ${greetig} ${name}`);
  };
};

console.log('hello rayyan');

const greetHey = greet('rayyan');
greetHey('rayyan shaikh');
greetHey('faizan shaikh');


