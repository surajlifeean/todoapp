var express=require('express')
var app=express()
var todocontroller=require('./controllers/todocontroller');
//set up template engine
app.set('view engine','ejs');
//static files
app.use(express.static('./public'));

app.listen(3000);
todocontroller(app);

console.log('You are listening to port 3000');
