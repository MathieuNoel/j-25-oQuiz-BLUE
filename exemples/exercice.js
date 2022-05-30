// Consigne : 
// 1. CrÉer une class Promo avec les propriÉtÉs id, name et la mÉthode toString.
// 2. Creer trois instances de la class Promo et les afficher sous forme de chaine de caractere (utiliser la methode toString sur chacune d'elle)

class Promo {
    id;
    name;

    toString() {
        return `Promo n°${this.id} : ${this.name}`;
    }

    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        // console.log(this.toString());
    }
}

const promos = [
    new Promo({
        id: 1,
        name: 'Daguerre'
    }), 
    new Promo({
        id: 1,
        name: 'Daguerre'
    }),
    new Promo({
        id:3,
        name: 'Lulu'
    })
];
// const daguerre = new Promo({
//     id: 1,
//     name: 'Daguerre'
// });

// const lala = new Promo({
//     id: 2,
//     name: 'Lala'
// });

// const lulu = new Promo({
//     id:3,
//     name: 'Lulu'
// });

for(const promo of promos) {
    console.log(promo.toString());
}



