angular.module("plataforma").controller("plataformaCtrl", function ($scope,historicoAPI) {
    $scope.message = "funcionou!";
    $scope.historico = [];

    var carregarHistorico = function () {
        historicoAPI.gethistorico().then(function (response) {
            $scope.historico = response.data;
        }, function (error) {
            $scope.error = [];
            $scope.error = "Não foi possível carregar os dados!";
        });
    };
    $scope.adicionarEmprestimo = function (entrada) {
       

        entrada.usuario =	"Maria";
        entrada.totalDoEmprestimo=	"35000";
        entrada.taxaDeJuros=	"19% a.m.";
        entrada.dataUltimoPagamento=	"20/07/2018";
        entrada.status=	"Em Analise";

        historicoAPI.savehistorico (entrada).then(function (response) {
            delete $scope.historico;
           
        });
    };
    carregarHistorico();
  
});


