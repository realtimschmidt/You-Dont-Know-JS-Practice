function Foo(who) {
  this.me = who
}
Foo.prototype.identify = function() {
  return "I am " + this.me
}

function Bar(who) {
  Foo.call( this, who )
}
Bar.prototype = Object.create( Foo.prototype )

Bar.prototype.speak = function() {
  console.log( "Hello, " + this.identify() + ".")
}

const b1 = new Bar( "b1" )
const b2 = new Bar( "b2" )

b1.speak()
b2.speak()


const Baz = {
  init: function(who) {
    this.me = who
  },
  identify: function(){
    return `I am ${this.me}`
  }
}

const Next = Object.create( Baz )

Next.speak = function() {
  console.log( `Hello, ${this.identify()}.` )
}

const a1 = Object.create( Next )
a1.init( "a1" )
const a2 = Object.create( Next )
a2.init( "a2" )

a1.speak()
a2.speak()