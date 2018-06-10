app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: "<h1>Main</h1><p>Click on the links to change this content</p>"
        })
        .when("/NovaSolicitacao", {
            templateUrl: "view/NovaSolicitacao.html"
        })
        .when("/solicitacoes", {
            templateUrl: "view/solicitacoes.html"
        })

});