(function () {
    var mina = angular.module('Joalheria', []);
    var joias = [{
        nome: 'anel de diamante',
        preco: '12000',
        disponivel: true
}, {
        nome: 'aliança',
        preco: '200',
        disponivel: false
}, {
        nome: 'relógio',
        preco: '20',
        disponivel: true
}];
    mina.controller('ControleJoalheria', function () {
        this.produtos = joias;
    });
})();