angular.module('listaTelefonica').config(function ($routeProvider) {
    $routeProvider.when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtrl"
    });
    $routeProvider.when("/novoContato", {
        templateUrl: "view/novoContato.html",
        controller: "novoContatoCtrl"
    });
    $routeProvider.when("/detalhesContato/:id", {
        templateUrl: "view/detalhesContato.html",
        controller: "detalhesContatoCtrl",
        resolve: {
            contato: function (contatosAPI, $route) {
                return contatosAPI.getContato($route.current.params.id);
            }
        }
    });
    $routeProvider.when("/error", {
        templateUrl: "view/error.html"
    });
    $routeProvider.otherwise({redirectTo: "/contatos"});
});
