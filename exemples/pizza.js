// POO : Programmation orientée objet (PHP, JAVA, C#, Ruby etc.)

// une class est une représentation, un modèle d'objet. Elle sert à définir nos futurs objets
class Pizza {

    name;
    base;
    ingredients = [];

    // le constructor est une mÉthode spÉciale qui se lance toute seule À l'instanciation de la classe. A chaque fois qu'on utilisera new, la fonction constructor sera appelÉe.
    constructor(obj) {
        // on va attribuer les valeurs passÉes en paramÈtre aux propriÉtÉs de l'objet
        this.name = obj.name;
        this.base = obj.base;
        this.ingredients = obj.ingredients;
        console.log(this.toString());
    }

    toString() {
        return `Pizza ${this.name} base ${this.base} contenant les ingrédients ${this.ingredients}`;
    }

    // SETTER
    // fonctions permettant de modifier les propriÉtÉs de l'objet en vÉrifiant notamment qu'on ne lui donne pas n'importe quoi
    
    setName(name) {
        // console.log(typeof name);
        if(typeof name === 'string') this.name = name;
        else console.log("Erreur ! Ce n'est pas une chaine de caractere !");
    }

    // GETTER
    getName() {
        return this.name;
    }
    

}

// on va rendre notre class disponible dans l'application
module.exports = Pizza;