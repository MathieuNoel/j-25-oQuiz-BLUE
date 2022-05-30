const CoreModel = require("./coreModel");
const clientPG = require('../database');

// Je défini la class Level
class Level extends CoreModel {
    // propriétés
    // id;
    #name;

    // fonction constructor : cette fonction est lancée dès l'instanciation de la class (new Level())
    constructor(obj) {
        // hydrater nos instances (remplir ses propriétés)
        // this.id = obj.id;
        // appelle le constructor parent en lui passant l'obj grace a la fonction super()
        super(obj);
        // this.name = obj.name;
        // on va appeler le setter de name dans le constructor pour vérifier que c'est bien une chaine avant de modifier la propriété !
        // this.setName(obj.name);
        this.name = obj.name;
    }

    // SETTERS / MUTATEURS
    // setName(name) {
    //     if(typeof name === 'string') this.name = name;
    //     else console.log("Erreur : Le nom doit etre une chaine de caractere !");
    // }

    set name(strName) {
        if(typeof strName === 'string') this.#name = strName;
        else console.log("Erreur : Le nom doit etre une chaine de caractere !");
    }

    // GETTERS / ACCESSEURS

    get name() {
        return this.#name;
    }

    // METHODES ACTIVE RECORD

    // méthode pour récupérer tous les levels
    // on la met static pour pouvoir l'appeler directement à partir de la class, pas besoin de faire une instance pour l'utiliser ! (ça n'aurait pas de sens)
    static async findAll() {
        const data = await clientPG.query(`SELECT * FROM level`);
       // on déclare un tableau qui va contenir nos futures instances de Level
       const levels = [];
        for(const line of data.rows) {
            // on créé une instance de Level pour chaque ligne du tableau (niveau récupéré en base)
            const level = new Level(line);
            // on la push dans le tableau d'instances
            levels.push(level);
        }
        // on renvoie le tableau d'instances
        return levels;
    }

    static async findById(id) {
        const data = await clientPG.query(`SELECT * FROM level WHERE id = $1`, [id]);
        // on retourne une instance du niveau récupéré
        return new Level(data.rows[0]);
    }


}

// J'exporte la classe Level pour la rendre disponible dans d'autres fiches
module.exports = Level;