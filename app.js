const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post('/', (req,res)=>{

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var sign = req.body.sign;
  
 
  if (sign === "+" ){
    res.send((num1 + num2).toString());
  }
  else if(sign ==="-"){
    res.send((num1 - num2).toString());
  }
  else if(sign ==="*"){
    res.send((num1 * num2).toString());
  }
  else if(sign ==="/"){
    res.send((num1 / num2).toString());
  }

});



const port = process.env.PORT || 7000
app.listen(port, ()=> console.log(`listening on port ${port}`));