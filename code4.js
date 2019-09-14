var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5];
var f = [1, true, "hello", "a", e];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backGroundColor = Color.Red;
// Since, TypeScript is statically typed language so,
// we have so many data types available in typescript.
