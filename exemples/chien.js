const Animal = require("./animal");

class Chien extends Animal {
    aboyer() {
        console.log("Ouaf !");
    }
}

module.exports = Chien;