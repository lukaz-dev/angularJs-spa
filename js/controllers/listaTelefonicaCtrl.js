angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, contatosAPI, operadoras) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = contatos.data;
    $scope.operadoras = operadoras.data;

    var init = function () {
        calcularImpostos($scope.contatos);
    };

    var calcularImpostos = function (contatos) {
        contatos.forEach((contato) => {
            contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
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

    var calcularImposto = function (preco) {
        var imposto = 1.2;
        return preco * imposto;
    };

    init();
});
