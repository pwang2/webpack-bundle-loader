var a = require('./mod1');
console.log('mod1 loaded value is ', a);
console.log('will load mod2 in 3 seconds');
setTimeout(function() {
    require('bundle!./mod2')(function(exports) {
        console.log(exports);
    });
}, 3000);
