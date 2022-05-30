const CoreModel = require("./coreModel");

class User extends CoreModel{
    // propriétés
    // id;
    firstname;
    lastname;
    email;
    password;

    // constructor
    constructor(obj) {
        // this.id = obj.id;
        super(obj);
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.email = obj.email;
        this.password = obj.password;
    }
}

module.exports = User;