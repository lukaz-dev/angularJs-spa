var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 1.10},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1.0},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 0.90},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1.30},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 1.50}
];
var contatos = [
	{id: 1, nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: operadoras[0]},
	{id: 2, nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: operadoras[1]},
	{id: 3, nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: operadoras[2]}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

var nextId = function () {
	var max = 0;
	contatos.map((contato) => {
		return contato.id;
	}).forEach(function (id) {
		max = id > max ? id : max;
	});
	return ++max;
};

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.get('/contatos/:id', function(req, res) {
  contatos.forEach(function (contato) {
  	if (contato.id == req.params.id) {
  		res.json(contato);
  		return;
  	}
  });
  res.status(404).end();
});

app.post('/contatos', function(req, res) {
	var contato = req.body;
	if (!contato.id) {
		contato.id = nextId();
	}
    contatos.push(req.body);
    res.json(true);
});

app.post('/contatos/remove', function(req, res) {
	contatosIds = req.body;
	contatos = contatos.filter((contato) => {
		return !contatosIds.some(function (id) {
			return contato.id === id;
		});
	});
    res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});

app.delete('/contatos/:contato_id', function (req, res) {
	var contato = contatos.find((item) => {
		return item.id === Number.parseInt(req.params.contato_id);
	});
	if (!contato) {
		res.status(404).end();
	} else {
		contatos.splice(contatos.indexOf(contato), 1);
	  	res.json(true);
	}
});
