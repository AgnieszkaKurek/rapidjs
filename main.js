'use strict';

console.log(insideCatch);
try {
    throw 123;
}
catch (e) {
    var insideCatch = 'insideCatch';
    console.log(e);
}