function callIt(num) {
    var data;
    for (var i = 1; i <= 10; ++i) {
        data = num * i;
        console.log(num + " * " + i + " = " + data);
    }
    console.log("finally the value of i is " + i);
}
callIt(8);
