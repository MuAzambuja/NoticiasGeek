const express = require('express');
/**const mongoose = require('mongoose');**/
var bodyParser = require('body-parser');

const path = require('path');

const app = express();

/**mongoose.connect('mongodb+srv://root:XLLmxgwfIbL1W4wN@cluster0.lwxo0uv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{useNewUrlParser: true, useUnifiedTopology: true}).then(function(){
    console.log("Conectado com sucesso");
}).catch(function(err){
    console.log(err.message);
})**/

app.use(bodyParser.json());             //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({         //to support URL-encoded bodies
    extended: true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
app.use('/public', express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname,'/pages'));

app.get('/',(req,res)=>{
    console.log(req.query);

    if(req.query.busca == null){
        res.render('home', {});
    }else{
        res.send('Voce buscou: '+req.query.busca);
    }

});

app.get('/:slug',(req,res)=>{
    res.send(req.params.slug);
})

app.listen(5000,()=>{
    console.log('Servidor online');
})

