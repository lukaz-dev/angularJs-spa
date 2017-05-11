angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $location, contatosAPI, operadorasAPI) {
    $scope.operadoras = [];

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
        }, function (response) {
            // error
        });
    };

    $scope.adicionarContato = function (contato) {
        contato.data = new Date();
        contatosAPI.saveContato(contato).then(function (response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path('/contatos');
        });
    };

    carregarOperadoras();
});
