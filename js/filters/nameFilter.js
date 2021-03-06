angular.module('listaTelefonica').filter('nameFilter', function () {
    return function (input) {
        var listaDeNomes = input.split(' ');
        var listaDeNomesFormatada = listaDeNomes.map((nome) => {
            if (/(da|de|dos)/.test(nome)) return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        return listaDeNomesFormatada.join(' ');
    };
});
