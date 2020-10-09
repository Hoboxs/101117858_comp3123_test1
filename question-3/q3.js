const express = require('express');
const fs = require("fs");

const app = express();

let writeData = (data) => {
    data += "\n"
    for(let num = 0; num < 10; num++){
        fs.appendFile(`Logs/log${num}.txt`, data, function (err) {
        if (err) throw err;
        console.log(`log${num}.txt`)
        });
    }
  }


let logger = (req, res, next) => {
    let data  = `log`
    writeData(data)
    next()
  }


var deletelogs = function(path) {
    if( fs.existsSync(path) ) {
      fs.readdirSync(path).forEach(function(file,index){
        var curPath = path + "/" + file;
        if(fs.lstatSync(curPath).isDirectory()) { 
          deleteFolderRecursive(curPath);
        } else { 
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  };

deletelogs("/Logs");
app.use(logger);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));