var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app= express();

app.set('view engine', 'ejs');


app.get('/', function(req,res){
    res.render('../secao/defaut');
});
app.get('/backend', function(req,res){
    res.render('../secao/backend');
});
app.get('/infraestrutura', function(req,res){
    res.render('../secao/infraestrutura');
});
app.listen(3009, function(){
    console.log ("Servidor rodando com Express");
});
