var myObj = {
  a:2
}

console.log(Object.getOwnPropertyDescriptor( myObj, "a"))

var myObj2 = {}

Object.defineProperty( myObj2, "a", {
  value:2,
  writable: true,
  configurable: true,
  enumerable: true
})

console.log(myObj2.a)