function callIt(num: number) {
  let data;
  for (let i = 1; i <= 10; ++i) {
    data = num * i;
    console.log(`${num} * ${i} = ${data}`);
  }
  //console.log("finally the value of i is " + i);
}
callIt(8);

// here, you can simply see that the intellisense indicating the error
// outside the for loop just uncomment that line no 7.
