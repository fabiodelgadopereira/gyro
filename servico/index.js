var http = require('http');
var router = require('./router');
var port = process.env.PORT || 1337;
var app = router(port)
var configProd = "/servico";
var url = require('url');


var operadoras = [
    { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
    { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
    { nome: "TIM", codigo: 41, categoria: "Celular", preco: 3 },
    { nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1 },
    { nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2 }
];
var contatos = [
    { nome: "Pedro", telefone: "99896575", data: new Date(), operadora: { nome: "Oi", codigo: 14, categoria: "Celular" } },
    { nome: "Ana", telefone: "99456575", data: new Date(), operadora: { nome: "Vivo", codigo: 15, categoria: "Celular" } },
    { nome: "Maria", telefone: "99987575", data: new Date(), operadora: { nome: "TIM", codigo: 41, categoria: "Celular" } }

];

var conta = [
    { nome: "Maria", telefone: "99987575", CPF: "35798647265" }
];

var rating = [
    { nome: "Maria", contrato: "ABC0000000002", inclusao: "20/03/2016", valor: "R$ 5000,00", status: "Nome negativado", tipo: "Exemplo de Atividade", fiador: "SIM" },
    { nome: "Joao", contrato: "ABC0000000003", inclusao: "20/03/2016", valor: "R$ 5000,00", status: "Nome negativado", tipo: "Exemplo de Atividade", fiador: "SIM" }
];
var pagamento = [
    { numeroDoCartao: "7896485321459874", MM: "02", AAAA: "2019", CodSeg: "098", Nome: "Maria A Silva", CPF: "35798647265" }
];
var investimento = [
    { usuario: "Maria", investimento: "1000", taxa: "0,02"}
]

app.interceptor(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.interceptor(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    next();
});

app.get(configProd + '/operadoras', function (req, res) {
    res.write(JSON.stringify(operadoras));
    res.end();
});

app.get(configProd + '/contatos', function (req, res) {
    res.write(JSON.stringify(contatos));
    res.end();
});

app.get(configProd + '/investimento', function (req, res) {
    res.write(JSON.stringify(investimento));
    res.end();
});


app.get(configProd + '/conta', function (req, res) {
    res.write(JSON.stringify(conta));
    res.end();
});

app.get(configProd + '/rating', function (req, res) {

    var q = url.parse(req.url, true).query;
    var txt = q.id;
    var achouIndice = rating.map(function(e) { return e.nome; }).indexOf(txt);

    console.log(txt);
    console.log(achouIndice);
 var saida =  new Array(rating[achouIndice]);
 
    if ('null' === txt) {res.write(JSON.stringify(rating));}
        else if (achouIndice >=0) { 
            res.write(JSON.stringify(saida)); }
        else {res.write(JSON.stringify(null));}
    res.end();
});

app.get(configProd + '/pagamento', function (req, res) {
    res.write(JSON.stringify(pagamento));
    res.end();
});
app.post(configProd + '/contatos', function (req, res) {
    var contato = req.body;
    contatos.push(JSON.parse(contato));
    res.end();
});

app.post(configProd + '/investimento', function (req, res) {
    var entrada = req.body;
    investimento.push(JSON.parse(entrada));
    res.end();
});

app.post(configProd + '/operadoras', function (req, res) {
    res.end();
});

app.post(configProd + '/conta', function (req, res) {
    console.log("log***]*");
    var incluir = req.body;
    conta.push(JSON.parse(incluir));
    res.end();
});

app.post(configProd + '/rating', function (req, res) {
    var incluir = req.body;
    rating.push(JSON.parse(incluir));
    res.end();
});
app.post(configProd + '/pagamento', function (req, res) {
    var incluir = req.body;
    pagamento.push(JSON.parse(incluir));
    res.end();
});





app.options(configProd + '/contatos', function (req, res) {
    res.end();
});




console.log("Server running at http://localhost:%d", port);
