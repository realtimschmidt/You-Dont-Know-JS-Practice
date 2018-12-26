const myArray = [1, 2, 3]

for (let i = 0; i < myArray.length; i++) {
  console.log( myArray[i])
}

for (let index of myArray) {
  console.log(index)
}

let it

it = myArray[Symbol.iterator]()

console.log(
  it.next(),
  it.next(),
  it.next(),
  it.next())