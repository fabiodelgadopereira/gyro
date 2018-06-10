var http = require('http');
var router = require('./router');
var port = process.env.PORT || 1337;
var app = router(port)
var configProd = "/servico";
var url = require('url');

var oferta = [
    { nome: "Maria", investimento: "2000", porcentagem: "2,0", periodo: "1 mês" }
];


var conta = [
    { nome: "Maria", email: "maria@uol.com.br", cnpj: "35798647265", senha:"pass" }
];


var investidor = [
    { usuario: "Maria", cpf:"3333", email:"mail", telefone:"44444", senha:"passs" }
];
var historico = [
    { usuario: "Maria", valorDoEmprestimo: "25000", prazoDoEmprestimo: "36 meses", totalDoEmprestimo:"35000", taxaDeJuros:"19% a.m.", dataPrimeiroPagamento:"23/06/2018", dataUltimoPagamento:"20/07/2018", status:"Confirmado" },
    { usuario: "Maria", valorDoEmprestimo: "32000", prazoDoEmprestimo: "36 meses", totalDoEmprestimo:"42000", taxaDeJuros:"19% a.m.", dataPrimeiroPagamento:"13/06/2016", dataUltimoPagamento:"10/07/2016", status:"Cancelado" }
];

app.interceptor(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.interceptor(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    next();
});



app.get(configProd + '/investidor', function (req, res) {
    res.write(JSON.stringify(investidor));
    res.end();
});


app.get(configProd + '/conta', function (req, res) {
    res.write(JSON.stringify(conta));
    res.end();
});

app.get(configProd + '/historico', function (req, res) {
    res.write(JSON.stringify(historico));
    res.end();
});
app.post(configProd + '/historico', function (req, res) {
    var entrada = req.body;
    historico.push(JSON.parse(entrada));
    res.end();
});
app.get(configProd + '/oferta', function (req, res) {
    res.write(JSON.stringify(oferta));
    res.end();
});
app.post(configProd + '/oferta', function (req, res) {
    var entrada = req.body;
    oferta.push(JSON.parse(entrada));
    res.end();
});



app.post(configProd + '/investidor', function (req, res) {
    var entrada = req.body;
    investidor.push(JSON.parse(entrada));
    res.end();
});



app.post(configProd + '/conta', function (req, res) {
    console.log("log***]*");
    var incluir = req.body;
    conta.push(JSON.parse(incluir));
    res.end();
});









console.log("Server running at http://localhost:%d", port);
