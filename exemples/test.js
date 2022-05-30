require('dotenv').config();

const dataMapper = require('../app/datamapper');

// const levels = dataMapper.getAllLevels();
// levels.then(lvls => console.log(lvls))
// .catch(error => console.error(error));


// IIFE Immediately Invoked Function Expression

(async () => {
    try {
        const levels = await dataMapper.getAllLevels();
        console.log(levels);
    } catch(error) {
        console.error(error);
    }
})();
