# Improved switch
An improved switch syntax for javascript, which allows you to cover more base - such as using comparative statements inside switch cases.

## Installation
`npm install improved-switch --save`

# Usage

A simple switch-case:
```
var order = "Dumplings";

startSwitch(order)
.case("French fries", () => {
    console.log("French fries are ordered");
    return true;
})
.case("Choco lava", () => {
    console.log("Choco lava is ordered");
    return true;
})
.case("Dumplings", () => {
    console.log("Dumplings are ordered");
    return true;
})
.case("Upma", () => {
    console.log("Upma is ordered");
    return true;
})
.case("Spaghetti", () => {
    console.log("Spaghetti is ordered");
    return true;
})
.default(() => {
    console.log("Something else is ordered"); //default case
})
```
`return true;` is to be used as a break statement in a switch-case block - none of the callback functions further will be executed, once a true value is returned.

How about, determining grades from a student's marks?

```
var marks = 87;

startSwitch(true)
.case(marks >= 90, () => {
    console.log("Your grade is 'A'");
})
.case(marks >= 80, () => {
    console.log("Your grade is 'B'");
})
.case(marks >= 70, () => {
    console.log("Your grade is 'C'");
})
.case(marks >= 60, () => {
    console.log("Your grade is 'D'");
})
.case(marks >= 50, () => {
    console.log("Your grade is 'E'");
})
.default(() => {
    console.log("Your grade is 'F'");
})
```
In this example, since marks is equal to 87, the output will be:
```
Your grade is 'B'
Your grade is 'C'
Your grade is 'D'
Your grade is 'E'
Your grade is 'F'
```