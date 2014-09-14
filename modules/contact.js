(function () {
    var contact = angular.module('contactOS', [ ]);
    

    var serviceOrders = [ {
        client: 'cariri',
        email: 'cariri@teste.com',
        phone: '9999-8888',
        regdate: '2014-08-11',
        problem: 'hardware issues'
    } , {
        client: 'amandas',
        email: 'amanda@teste.com',
        phone: '9999-9999',
        regdate: '2014-08-07',
        problem: 'network connection issues'
    } ];

    contact.controller('orderService', function () {
        this.services = serviceOrders;
    });
})();