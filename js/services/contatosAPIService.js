angular.module('listaTelefonica').factory('contatosAPI', function ($http, configAPI) {
    var _getContatos = function () {
        return $http.get(configAPI.baseUrl + '/contatos');
    };

    var _getContato = function (id) {
        return $http.get(configAPI.baseUrl + '/contatos/' + id);
    };

    var _saveContato = function (contato) {
        return $http.post(configAPI.baseUrl + '/contatos', contato);
    };

    var _removeContatos = function (contatosIds) {
        contatosIds.forEach((id) => {
            $http.delete(configAPI.baseUrl + '/contatos/' + id);
        });
    };

    return {
        getContatos: _getContatos,
        getContato: _getContato,
        saveContato: _saveContato,
        removeContatos: _removeContatos
    };
});
