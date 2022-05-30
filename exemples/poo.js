// on require la class Pizza pour pouvoir l'utiliser dans ce fichier
const Pizza = require('./pizza');

// créer deux objets Pizzas à partir de la class Pizza
// on instancie la classe Pizza et on stock l'objet (l'instance) dans la variable hawaienne
const hawaienne = new Pizza({
    name:'Hawaienne', 
    base: 'Creme fraiche', 
    ingredients: ['ananas', 'lardons']
});

// hawaienne.name = true;
hawaienne.setName('Machin chose');

console.log(hawaienne.getName());

// console.log(hawaienne);

// remplir les propriÉtÉs de l'instance avec des valeurs correctes
/* hawaienne.name = 'Hawaienne';
hawaienne.base = 'Creme fraiche';
hawaienne.ingredients = ['ananas', 'lardons']*/

// on va crÉer une deuxieme pizza
// const regina = new Pizza({
//     name:'Regina',
//     base: 'Sauce tomate',
//     ingredients: ['poivrons', 'champis', 'fromage', 'sauterelles']
// });

// regina.name = "Regina";
// regina.base = 'Sauce tomate';
// regina.ingredients = ['poivrons', 'champis', 'fromage', 'sauterelles'];

