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


var deletelogs = function() {
    if( fs.existsSync("Logs/") ) {
      fs.readdirSync("./Logs").forEach(function(file,index){
        var curPath = "Logs/" + file;
        if(fs.lstatSync(curPath).isDirectory()) { 
          deleteFolderRecursive(curPath);
        } else { 
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  };

deletelogs();
app.use(logger);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));