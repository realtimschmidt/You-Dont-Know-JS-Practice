const foo = {
  something: () => console.log("Tell me something good...")
}

const bar = Object.create( foo )

bar.something()



// possibly easier to read
const anotherObject = {
  cool: () =>  {
    console.log( "cool!" )
  }
}

const myObject = Object.create( anotherObject )

myObject.doCool = function() {
  this.cool()
}

myObject.doCool()