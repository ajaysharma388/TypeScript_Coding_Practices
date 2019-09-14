var message;
message = "Ajay Sharma";
// here we are learning about the type assertions.
var flag1: boolean = (<string>message).endsWith("a");
var flag2: boolean = (message as string).endsWith("s");
if (flag1) console.log("Yes, the string ends with a.");
else console.log("no, string did not ends with a.");
if (flag2) console.log("Yes, the string ends with s.");
else console.log("no, string did not ends with s.");
