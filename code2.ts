function callItOnce() {
  var num = 9,
    data;
  for (var i = 1; i <= 10; ++i) {
    data = i * num;
    console.log(`${num} * ${i} = ${data}`);
  }
  console.log("Finally The value of i : " + i);
}
callItOnce();
// the variable created using var keyword is scoped to the nearest
// function whereas using the let keyword makes it local to the body
// you can see in the code3.ts file.
