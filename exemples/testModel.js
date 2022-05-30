const Level = require('../app/models/level');
const Tag = require('../app/models/tag');
const User = require('../app/models/user');

const facile = new Level({
    id: 1,
    name: 'facile'
});

console.log(facile);

facile.name = 'difficile';
console.log(facile.name);

// const user = new User({
//     id: 1,
//     firstname: 'Loic',
//     lastname: 'berland',
//     email: 'toto@gmail.com',
//     password: 'azerty'
// });

// console.log(user);

const tag = new Tag({
    id: 1,
    name: 'Student'
});

console.log(tag.name);