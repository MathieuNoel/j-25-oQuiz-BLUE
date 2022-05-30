class CoreModel {
    _id;

    constructor(obj) {
        // this.id = obj.id;
        // this.setId(obj.id);
        this.id = obj.id;
    }

    // setId(id) {
    //     if(typeof id === 'number') this.id = id;
    //     else console.log("Erreur : l'id doit etre un nombre !");
    // }

    set id(nbId) {
        if(typeof nbId === 'number') this._id = nbId;
        else console.log("Erreur : l'id doit etre un nombre !");
    }
}

module.exports = CoreModel;