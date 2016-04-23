// inti app
var express = require('express'),
    app = express();

// config data
var config = {
    port: 3030
}

// routes

app.get('/',function(req,res){
    res.send('got your request');
})


// listen for http request

app.listen(config.port,function(){
    console.log('listening on port ' + config.port);
});



