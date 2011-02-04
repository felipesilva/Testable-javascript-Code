/* Object Literals */
var Hugers = {
    employees: [],
    setEmployee: function(employee) {
        this.employees.push(employee);
    },
    countEmployee: function(data) {
        return this.employees.length;
    }
};