module('Problems using Object Literals');

test('Test set new employee', function() {
    Hugers.setEmployee({name: 'Felipe Silva'});
    
    equals(Hugers.employees[0].name, 'Felipe Silva', 'Employee...');
});


test('Test ', function() {
    Hugers.setEmployee({name: 'Jose Muanis'});
    
    equals(Hugers.countEmployee(), 1, 'Count number of employees...');
});