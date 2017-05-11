angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = [];

    var carregarContatos = function () {
        contatosAPI.getContatos().then(function (response) {
            $scope.contatos = response.data;
        }, function (response) {
            $scope.error = "Não foi possível carregar os contatos";
        });
    };

    $scope.apagarContatos = function (contatos) {
        var contatosIds = [];
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
            contatosIds.push(contato.id);
        });
        contatosAPI.removeContatos(contatosIds);
        $scope.verificarContatoSelecionado($scope.contatos);
    };
    $scope.verificarContatoSelecionado = function (contatos) {
        $scope.hasContatoSelecionado = contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarContatos();
});
