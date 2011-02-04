module('Modular pattern / privacy closure based problems');

test('Test set new employee', function() {
    var _lowe = new Lowe(); 
    _lowe.setEmployee({name: 'Felipe Silva'});
    
    equals(_lowe.getEmployees()[0].name, 'Felipe Silva', 'Employee...');
});

test('Test numbers of employees', function() {
    var _lowe = new Lowe();
    _lowe.setEmployee({name: 'Jose Muanis'});
    
    equals(_lowe.getNumberOfEmployees(), 1, 'Count number of employees...');
});