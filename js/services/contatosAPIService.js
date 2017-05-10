angular.module('listaTelefonica').factory('contatosAPI', function ($http, config) {
    var _getContatos = function () {
        return $http.get(config.baseUrl + '/contatos');
    };

    var _getContato = function (id) {
        return $http.get(config.baseUrl + '/contatos/' + id);
    };

    var _saveContato = function (contato) {
        return $http.post(config.baseUrl + '/contatos', contato);
    };

    var _removeContatos = function (contatosIds) {
        return $http.post(config.baseUrl + '/contatos/remove', contatosIds);
    };

    return {
        getContatos: _getContatos,
        getContato: _getContato,
        saveContato: _saveContato,
        removeContatos: _removeContatos
    };
});
