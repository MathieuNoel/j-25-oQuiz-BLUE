// on a besoin de require la class Animal pour la faire heritÉe
const Animal = require("./animal");
// on fait heriter la class Chat de la classe Animal, ainsi le class Chat possedera les proprietes id et name, ainsi que la methode toString
class Chat extends Animal {
    miauler() {
        console.log("Miaou !");
    }
}

module.exports = Chat;