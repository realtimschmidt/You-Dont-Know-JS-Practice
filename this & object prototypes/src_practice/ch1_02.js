// does not increment foo.count

const foo = (num) => {
  console.log( `foo: ${num}`)
  console.log(foo.count)
  this.count++
}

foo.count = 0

let i

for (i=0; i<10; i++) {
  if (i > 5) {
    foo ( i )
  }
}

console.log(foo.count)