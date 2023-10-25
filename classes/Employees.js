class Employees {
    #salary;
    #isHired = true;
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
    }
    getSalary() {
        return this.#salary;
    }
    setSalary(amount) {
        this.#salary = amount;
    }
    getStatus() {
        return this.#isHired;
    }
    setStatus(command) {
        command === "hire" ? (this.#isHired = true) : (this.#isHired = false);
    }
}

module.exports = {
    Employees,
};
