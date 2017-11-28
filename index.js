var lodsah = require('lodash');

var val = [5,9,8,2,1,10,24,59,21,35,47,58,96,12,35,42,81,50,33,94,1,3];
var maxVal = 0;
lodsah.each([val], function(vals) {
  for (var i = 0; i < val.length; i++) 
    if(val[i] > maxVal) maxVal = val[i];
  
  findSuperman(vals);
});

function findSuperman(values) {
  lodsah.find(values, function(v) {
    if (v === maxVal) {
      console.log(v + ': It\'s max!');
    } else {
      console.log(v + '... No max!');
    }
  });
}