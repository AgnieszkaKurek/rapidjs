var obj = {
    valueOf: function () {return 42;}
}
if (42 == obj)
console.log('true');
else
   console.log('false')