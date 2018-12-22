const baz = () => {
  console.log("baz")
  bar()
  console.log("last message")
}

const bar = () => {
  console.log("bar")
  foo()
  console.log("after foo")
}

const foo = () => {
  console.log("foo")
}

baz()