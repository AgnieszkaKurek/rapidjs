var total = 99.99;
var freeShipping;
var savings;
if (total >= 100.00){
freeShipping = true;
savings = 29.99;
}
else {
freeShipping = false;
savings = 0;
}
console.log(savings);