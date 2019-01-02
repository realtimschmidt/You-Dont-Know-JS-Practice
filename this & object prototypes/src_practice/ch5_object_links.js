const foo = {
  something: () => console.log("Tell me something good...")
}

const bar = Object.create( foo )

bar.something()