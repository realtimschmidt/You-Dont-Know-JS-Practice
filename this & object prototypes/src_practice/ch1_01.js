let me
let you

function identify() {
  return this.name.toUpperCase()
}

function speak() {
  const upCaseName = identify.call( this )
  return `Hello, I'm ${upCaseName}`
}

me = {
  name: "Kyle"
}

you = {
  name: "Reader"
}

console.log(identify.call(me))
console.log(identify.call(you))

console.log(speak.call(me))
console.log(speak.call(you))