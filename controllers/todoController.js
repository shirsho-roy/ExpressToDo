var data=[];
var bodyParser=require('body-parser');
var encodedParser=bodyParser.urlencoded({extended:false});
module.exports=function(app){
  app.get('/todo',(req,res)=>{
      res.render('todo.ejs',{todos:data});
  });
  app.post('/todo',encodedParser,(req,res)=>{
      data.push(req.body);
      res.redirect('/todo');
      res.json(data);
  });
  app.delete('/todo',(req,res)=>{
      data.filter((todo)=>{
        return todo.item.trim().replace(/ /g, "") !== req.params.item;
      });
      res.redirect('/todo');
      res.json(data);
  });
}