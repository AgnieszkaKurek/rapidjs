var lineItemCount = 5;

outerLoop:
for (var i = 0; i < lineItemCount; i++) {
    for (var j = 0; j < 3; j++) {
        if (j == 1)
        continue outerLoop;
    }
    console.log(i);
}