const fs = require('fs');
const papa = require('papaparse');
const file = fs.createReadStream('csv/book1.csv');
var data = papa.parse(file);
var records = [];
data.forEach(function(recorda) {
    records.push(recorda);
});
console.log(records);
