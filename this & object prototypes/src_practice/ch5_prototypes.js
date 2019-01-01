const anotherObject = {
  a: 2
}

const myObject = Object.create( anotherObject )

console.log(myObject.a)
console.log(myObject)  // myObject.a doesn't exist but is accessed through prototype chain


for (var k in myObject){
  console.log('found: ' + k)
}

console.log('a' in myObject)


// Shadowing: 
// Setting a property name on an object that already exists in an object higher in the prototype chain.
//
// If the property higher in the prototype chain is read only (writable:false) then the new property in the object lower on the prototype chain will not be allowed

console.log(anotherObject.hasOwnProperty("a"))
console.log(myObject.hasOwnProperty("a"))

console.log(myObject.a++) // implicit shadowing
console.log(anotherObject.a)
console.log(myObject.a)

console.log(myObject.hasOwnProperty("a"))