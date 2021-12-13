const smartphones = {
    brands: {
        apple: true
    }
}

console.log(smartphones.brands.apple) 

// console.log(smartphones.companies.motorola); this gives error

console.log(smartphones.companies?.motorola) // prints indefined and we dont get error


let desktops =  ['mac', 'hp', 'dell']
console.log(desktops[1])

desktops = null


console.log(desktops?.[1])