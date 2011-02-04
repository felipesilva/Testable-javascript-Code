module('Evreything works fine!');

test('Test set new employee', function() {
    var _soluction = new namespace.Soluction();
    _soluction.setEmployee({name: 'Felipe Silva'});
    
    equals(_soluction.getEmployees()[0].name, 'Felipe Silva', 'Employee...');
});

test('Test numbers of employees', function() {
    var _soluction = new namespace.Soluction();
    _soluction.setEmployee({name: 'Jose Muanis'});
    
    equals(_soluction.getNumberOfEmployees(), 1, 'Count number of employees...');
});