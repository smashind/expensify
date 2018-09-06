// Object destructuring

// const person = {
//   name: 'Smash',
//   age: 31,
//   location: {
//     city: 'Reedley',
//     temp: 92
//   }
// };

// const { name: firstName = 'Anon', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: newName } = person.location;
// if (city && newName) {
//   console.log(`It's ${newName} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self published'} = book.publisher;

// console.log(publisherName);

// const address = ['2204 N Sunny Lane','Reedley','California','93654'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [drink, , mediumPrice] = item;
console.log(`A medium ${drink} costs ${mediumPrice}`);