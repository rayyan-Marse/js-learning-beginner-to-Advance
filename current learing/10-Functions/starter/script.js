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


