/* Soluction */
var namespace = namespace || {};

(function(namespace){
    namespace.Soluction = function() {
        this.employees = [];
    };
    
    namespace.Soluction.prototype = {
        _countEmployees: function(){
            return this.employees.length;
        },
        setEmployee: function(employee) {
            this.employees.push(employee);
        },
        getEmployees: function(){
            return this.employees;
        },
        getNumberOfEmployees: function(data) {
            return this._countEmployees();
        }
    }
})(namespace);