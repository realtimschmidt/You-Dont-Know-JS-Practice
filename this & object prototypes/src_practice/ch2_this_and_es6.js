function foo(){
  return () => {
    console.log(this.a)
  }
}

let obj1
let obj2
let bar

obj1 = {
  a: 2
}

obj2 = {
  a: 3
}

bar = foo.call(obj1)
bar.call(obj2)