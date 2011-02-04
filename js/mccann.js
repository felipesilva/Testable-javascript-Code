/* Modular pattern / privacy closure based */
(function(){
    var McCann = function() {
        var employees = [];

        function countEmployees(){
            return employees.length;
        }

        return {
            setEmployee: function(employee) {
                employees.push(employee);
            },
            getEmployees: function(){
                return employees;
            },
            getNumberOfEmployees: function(data) {
                return countEmployees();
            }
        };
    };
})();