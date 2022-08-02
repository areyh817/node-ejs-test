var express = require('express')
var app = express()
var bodyparser = require('body-parser')

app.listen(3333, function(){
    console.log('3333번 포트에서 서버 실행 중')
});

app.set('view engine', 'ejs')
app.use(express.static('test'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.get('/', function(req, res){
    res.sendFile(__dirname + "/test/test.html")
})

app.post('/form', function(req, res){
    res.send(req.body)
})

/*app.post('/form_ejs', function(req, res){
    res.render('/views/form.ejs', {'name' : req.body.name})
})*/

app.post('/form_ejs', function(req, res){
    res.render('form.ejs', {'name' : req.body.name})
})