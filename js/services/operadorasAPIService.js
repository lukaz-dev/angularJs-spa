angular.module('listaTelefonica').service('operadorasAPI', function ($http, configAPI) {
    this.getOperadoras = function () {
        return $http.get(configAPI.baseUrl + '/operadoras');
    }
});
