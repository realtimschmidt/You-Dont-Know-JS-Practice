var myObject = {
  get a() {
    return this._a_
  },
  set a(val) {
    this._a_ = val * 2
  }
}

myObject.a = 2
console.log(myObject.a)

// Object.defineProperty(
//   myObject,
//   "b",
//   {
//     get: function(){ 
//       return this.a * 2
//     },
//     enumerable: true
//   }
// )

// console.log(myObject.a)
// console.log(myObject.b)

// myObject.a = 3

// console.log(myObject.a) // myObject.a is still 2