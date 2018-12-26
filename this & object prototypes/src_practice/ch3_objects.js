function anotherFunction() { /*..*/ }

var anotherObject = {
	c: true
}

var anotherArray = []

var myObject = {
	a: 2,
	b: anotherObject,
	c: anotherArray,
	d: anotherFunction
}

anotherArray.push( anotherObject, myObject )

var newObj = Object.assign( {}, myObject );

newObj.a
newObj.b === anotherObject
newObj.c === anotherArray
newObj.d === anotherFunction

console.log(newObj)