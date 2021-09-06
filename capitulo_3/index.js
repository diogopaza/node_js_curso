const express = require("express"); //importando o express
const app = express(); // iniciando o express e passando para a variavel app

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("servidor inicializado com sucesso")
    }

})

app.get("/", function(req,res){
    res.send("chegou e eu respondi")
})

//parametro não obrigatorio
app.get("/blog/:artigo?", function(req,res){
    nome_artigo = req.params.artigo
    if(nome_artigo){
        res.send("<h2>chegou no blog o novo artigo " + nome_artigo + "</h2>")
    }else{
        res.send("Artigo sem params")
    }    
})

//parametro obrigatorio
app.get("/ola/:nome", function(req,res){
    res.send("<h1>Bem vindo " + req.params.nome + "</h1>")
})

//query params
//parametro obrigatorio
app.get("/canal/youtube", function(req,res){
    canal = req.query["canal"];
    if(canal){
        res.send("<h2>chegou canal " + canal)
    }else{
        res.send("<h2>Nenhum canal</h2>")
    }   
})
