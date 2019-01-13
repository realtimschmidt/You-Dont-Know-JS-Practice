const str = "foo"
const arr = ["f", "o", "o"]

let longStr
let longArr

longStr = str.concat( "bar" )
longArr = arr.concat( ["b", "a", "r"] )

console.log({longStr}, {longArr})

longStr = Array.prototype.join.call( str, "-" )
longArr = Array.prototype.map.call( str, function(index){
  return `${index.toUpperCase()}.`
} ).join( "" )

console.log({longStr}, {longArr})

console.log(0.1 + 0.2 === 0.3)
console.log(0.1 + 0.2)

const notNum = 2 / "foo"

console.log(Number.isNaN(notNum))
console.log(Number.isNaN(str))