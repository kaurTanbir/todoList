var fs = require('fs');
var data = fs.readFileSync("account.csv",'utf-8');
console.log(data);