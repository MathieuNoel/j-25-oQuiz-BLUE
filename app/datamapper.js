const clientPG = require('./database');
const Level = require('./models/level');

// Un dataMapper est un objet possédant l'ensemble des méthodes permettant de communiquer avec la BDD

const dataMapper = {
    getAllLevels: async function() {
       const data = await clientPG.query(`SELECT * FROM level`);
       // on déclare un tableau qui va contenir nos futures instances de Level
       const levels = [];
        for(const line of data.rows) {
            const level = new Level(line);
            levels.push(level);
        }
        console.log(data.rows);
        console.log(levels);
        // on renvoie le tableau d'instances
        return levels;
    },
    getLevelById: async function(id) {
        const data = await clientPG.query(`SELECT * FROM level WHERE id = $1`, [id]);
        return new Level(data.rows[0]);
    }
}

module.exports = dataMapper;