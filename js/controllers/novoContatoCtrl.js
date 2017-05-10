angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $location, contatosAPI, operadoras, serialGenerator) {
    $scope.operadoras = operadoras.data;

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContato(contato).then(function (response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path('/contatos');
        });
    };
});
