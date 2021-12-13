let theNumber = 7
let number = theNumber || 5
console.log(number)

theNumber = 0
number = theNumber || 5
console.log(number)


theNumber = 0
number = theNumber ?? 5
console.log(number)

theNumber = null
number = theNumber ?? 5
console.log(number) 


// || oprator assigns if a give number is 0 , undefined or null
// ?? operator assigns if a given number is only undefined or null