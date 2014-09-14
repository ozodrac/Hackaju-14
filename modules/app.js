(function () {
    var app = angular.module("AppHackaju", []);
 
app.controller("ProductStore", ['$scope','$http', function($scope, $http)
        {    
            $http.get('json/products.json').success (function(data){
                $scope.produtos = data;
        });
 
        }]
);

})();

/*(function () {
    var app = angular.module('feirinha', []);

    var gems = ";

    app.controller('StoreController', function () {
        this.products = gems;
    });

})();


(function () {
    var alerta = angular.module('alerta' , [] );
    
    alerta.controller('ControleAlerta',function(){
        alert('Gangstar');
    });
})();*/