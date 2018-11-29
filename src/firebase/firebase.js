import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((s) => {
//       expenses.push({
//         id: s.key,
//         ...s.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((s) => {
//     expenses.push({
//       id: s.key,
//       ...s.val()
//     });
//   });
//   console.log(expenses);
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// database.ref('expenses').push({
//   description: 'This is expense one',
//   note: 'A very expensive expense',
//   amount: 100,
//   createdAt: '10/10/2018'
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Ruby, Rails'
// });

// const firebaseNotes = {
//   notes: {
//     appdododd: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     adkdkelel: {
//       title: 'This is my second note',
//       body: 'Meh second note is here dude'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note again'
// }];

// database.ref().on('value', (snapshot) => {
//   const { name, job } = snapshot.val();
//   console.log(`${name} is a ${job.title} at ${job.company}`);
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29)
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(31)
// }, 10500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Smash',
//   age: 32,
//   stressLevel: 11,
//   job: {
//     title: 'Telemarketer',
//     company: 'Sunny, Inc.'
//   },
//   location: {
//     city: 'Reedley',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazorn',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').set(null);

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Dauter was removed');
//   }).catch((e) => {
//     console.log('Dauter not removed', e);
//   });