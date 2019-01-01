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