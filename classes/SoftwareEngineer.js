const { Employees } = require("./Employees");

class SoftwareEngineer extends Employees {
    #programmingLanguages = ["JavaScript", "Java", "Python"];
    constructor(name, position, salary) {
        super(name, position, salary);
    }
    getProgrammingLanguages() {
        return this.#programmingLanguages;
    }
    setProgrammingLanguages(language) {
        this.#programmingLanguages.push(language);
    }
}

module.exports = {
    SoftwareEngineer,
};
