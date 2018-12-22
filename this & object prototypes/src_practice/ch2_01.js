const baz = () => {
  console.log("baz")
  bar()
}

const bar = () => {
  console.log("bar")
  foo()
}

const foo = () => {
  console.log("foo")
}

baz()