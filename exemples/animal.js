// on crÉÉ une classe ANimal qui sera hÉritÉe par d'autres classques ensuite...
// toutes nos classes qui heriteront de celle-ci possederont les memes proprietes et methodes (id, name et toString) !
class Animal {
    id;
    name;

    toString() {
        return `${this.id} ${this.name}`;
    }
}

module.exports = Animal;