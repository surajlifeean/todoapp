var bodyparser=require('body-parser');

var mongoose=require('mongoose');

var data=[{item:"get milk"},{item:"wish her birthday"},{item:"Dont forget to sleep"}];

mongoose.connect('mongodb://suraj:Suraj@1995@ds123171.mlab.com:23171/techieesfoo_testdb');

var urlencodedparser = bodyparser.urlencoded({extended:false});

//create a schema

var todoscheme=new mongoose.Schema({
	item:String
});

//creating model named TODO having the schema as deceleared above

var Todo=mongoose.model('Todo', todoscheme);
var itemOne= Todo({item:"buy flowers"}).save(function(err){

	if(err) throw err;
	console.log('item saved');

});
module.exports=function(app){
	
app.get('/todo',function(req,res){
	res.render('todo',{todos:data});
});

app.post('/todo',urlencodedparser,function(req,res){
	data.push(req.body);
	res.json(data);
});

app.delete('/todo/:item',function(req,res){
	
	data=data.filter(function(todo) {
		return todo.item.replace(/ /g,'-') !== req.params.item;
	});
	
	res.json(data);

});


};