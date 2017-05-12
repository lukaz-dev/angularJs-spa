angular.module("listaTelefonica").controller("editarContatoCtrl", function ($scope, $routeParams, $location, contato, operadoras, contatosAPI) {
    $scope.contato = contato.data;
    $scope.operadoras = operadoras.data;

    $scope.operadoraDefault = $scope.operadoras.find((operadora) => {
        return operadora.id === $scope.contato.operadora.id;
    });

    $scope.salvarContato = function (contato) {
        contato.data = new Date();
        contato.operadora = $scope.operadoraDefault;
        contatosAPI.updateContato(contato).then(function (response) {
            $location.path('/contatos');
        });
    };
});
