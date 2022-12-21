var express=require('express');
var app=express(); 
var todoControlller=require('./controllers/todoController');
app.set('view engine','ejs');
//For Statinc files
app.use(express.static('./public'));

//Calling Controller
todoControlller(app);

//Listen to Port
app.listen(3000,(res)=>{
    console.log('Listening');
});