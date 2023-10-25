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
        if (amount < 0) {
            throw new Error("Salary cannot be negative");
        }
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
    promote(newPosition, newSalary) {
        this.position = newPosition;
        this.#salary = newSalary;
    }
}

module.exports = {
    Employees,
};
