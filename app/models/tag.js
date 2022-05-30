const CoreModel = require("./coreModel");

class Tag extends CoreModel {
    #name;

    constructor(obj) {
        super(obj);
        this.name = obj.name;
    }

    set name(strName) {
        if(typeof strName === 'string') this.#name = strName;
        else console.log("Erreur : Le nom doit etre une chaine !");
    }

    get name() {
        return this.#name;
    }
}

module.exports = Tag;