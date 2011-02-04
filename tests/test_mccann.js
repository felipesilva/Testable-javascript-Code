module('Modular pattern / privacy closure based problems');

test('Test set new employee', function() {
    var _mccann = new McCann();
    _mccann.setEmployee({name: 'Felipe Silva'});
    
    equals(_mccann.getEmployees()[0].name, 'Felipe Silva', 'Employee...');
});

test('Test numbers of employees', function() {
    var _mccann = new McCann();
    _mccann.setEmployee({name: 'Jose Muanis'});
    
    equals(_mccann.getNumberOfEmployees(), 1, 'Count number of employees...');
});