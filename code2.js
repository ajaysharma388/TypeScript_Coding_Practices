function doSomething() {
    var num = 9, data;
    for (var i = 1; i <= 10; ++i) {
        data = i * num;
        console.log(num + " * " + i + " = " + data);
    }
    console.log("Finally The value of i : " + i);
}
doSomething();
