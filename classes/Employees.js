class Employees {
    #salary;
    #isHired = true;
    static #allEmployees = [];
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
        Employees.#allEmployees.push(this);
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

    static getEmployees() {
        return Employees.#allEmployees;
    }
    static getTotalPayroll() {
        return Employees.#allEmployees.reduce(
            (acc, cur) => acc + cur.#salary,
            0
        );
    }
}

module.exports = {
    Employees,
};
