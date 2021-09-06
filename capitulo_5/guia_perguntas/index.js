const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get("/:nome/:lang?", (req,res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;
    res.render("index",{
        nome: nome,
        lang: lang,     
        msg: exibirMsg

    })
});

app.listen(8080, ()=>{
    console.log("app rodando");
});