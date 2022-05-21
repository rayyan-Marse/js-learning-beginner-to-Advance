'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const airline = 'Tap at portugal';
console.log(airline);

const plane = 'A250';
console.log(plane[0]);

console.log('rayyan'[0]);
console.log('faizanShaikh'.length);

console.log(airline.length);
console.log(airline.indexOf('p'));


console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('r'));
console.log(airline.indexOf('portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf('')));
console.log(airline.slice(airline.indexOf('') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMidleSeat = (seat) => {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('you got a seat');
  else console.log('you got lucky');
};

checkMidleSeat('12B');
checkMidleSeat('15C');
checkMidleSeat('12E');


console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

const passanger = 'RaYYan';
const lowerm = passanger.toLocaleLowerCase();
const correctm = lowerm[0].toUpperCase() + lowerm.slice(1);
console.log(correctm);

// when you use trim method it clean white spaces as well as \n that showed in below examples.
const email = 'rayyansssto@gmail.com;';
const loginEmail = 'rayyansssto@gmail.com  \n';

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);


const priceGB = '200,0E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);

const passangreMessage =
  'all the passanger comes to door 23 for boarding .come to door 23';

console.log(passangreMessage.replace('door', 'gate'));
console.log(passangreMessage.replaceAll('door', 'gate'));

const airplane = 'A320B';
console.log(airplane.includes('A320'));
console.log(airplane.includes('R'));
console.log(airplane.startsWith('A32'));

console.log('rayyan+faizan + abdul rehman + tabish + yasa'.split('+'));

console.log('rayyan shaikh'.split(' '));

// padding

const message = 'Go to the gate 23';
console.log(message.padStart('25', '+'));
console.log(message.padEnd('30', '*'));

const creditCard = (number) => {
  const cnumber = String(number);
  console.log(typeof cnumber);
  const scnumber = cnumber.slice(4);
  console.log(scnumber.padStart('10', '*'));
};

creditCard(1231232123);
creditCard(9156321972);

//repeat message

const m2 = 'bad wheather flights will be late';
console.log(m2.repeat('5'));
//repeat message

const m3 = 'bad wheather flights will be late';
console.log(m2.repeat('5'));


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  console.log(rows);

  for (const row of rows) {
    const [first, last] = row.toLocaleLowerCase().trim().split('_');
    const output = `${first}${last.replace(last[0], last[0].toUpperCase())}`;
    console.log(output);
  }
});
