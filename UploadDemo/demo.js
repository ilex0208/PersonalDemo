var path = require('path');

var temp = path.resolve(__dirname, '..');
var temp2 = path.resolve(process.cwd(), '..');
var temp3 = path.resolve(__dirname);
var temp4 = path.resolve(process.cwd());

var temp5 = temp4.replace(temp2, '');
var temp6 = temp5.substring(1);

console.log('path:', temp);
console.log('path2:', temp2);
console.log('path3:', temp3);
console.log('path4:', temp4);
console.log('path5:', temp5);
console.log('path6:', temp6);
