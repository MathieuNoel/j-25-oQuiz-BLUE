// const dataMapper = require('./datamapper');
const Level = require('./models/level');

const controller = {
    homePage: async function(req, res) {
        try {
            // je vais recupoerer tous les niveaux pour faire des tests
            // 1. on récupère les levels via le dataMapper
            // const levels = await dataMapper.getAllLevels();
            const levels = await Level.findAll();
            
            // 2.on génère la vue en lui passant en locals les niveaux
            res.render('home', {levels});
        } catch(error) {
            console.error(error);
        }
    },
    contactPage: async function(req, res) {
        // ici on va récupérer le level difficile
        try {
            // const level = await dataMapper.getLevelById(2);
            const level = await Level.findById(3);
            res.render('contact', {level});
        } catch(error) {
            console.error(error);
        }
        
    }
}

module.exports = controller;