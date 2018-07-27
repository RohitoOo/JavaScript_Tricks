
// Js Tricks

// The == (or !=) operator performs an automatic type conversion if needed.

console.log( '[10] === 10 // ' , [10] === 10    )
// is false
console.log( '[10]  == 10 // ' , [10]  == 10   )
// is true

console.log( " '10' == 10 //" , '10' == 10 )
// is true
console.log( " '10' === 10 // " , '10' === 10)
// is false



// Js Tricks

// undefined, null, 0, false, NaN, '' are all equal to false

console.log(  " undefined ?  true : false // " ,  undefined ?  true : false )

// false

console.log("undefined || null || 0 || false || NaN || '' ? true : false // " ,  undefined ?  true : false)

// false

// Js Tricks

function Person(firstName, lastName, nationality){
    this.firstName =  firstName;
    this.lastName = lastName;
    this.nationality = nationality;
}

Person.prototype.profession = "Web Developer"

var Rohito = new Person("Rohito", "Bhambhani" , "Canadian");


Rohito.profession;

// 'Web Developer'


// Js Tricks



(function selfCall(){
  console.log("I have been Self-Called. I dont need to be explicitly called. ")
})()

// I have been Self-Called. I dont need to be explicitly called.



// Js Tricks

// Verify that a given argument is a number


function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

console.log ( "Verify that a given argument is a number : isNumber('abc') // " , isNumber('abc') )
console.log ( 'Verify that a given argument is a number : isNumber(1) // ' , isNumber(1) )



// Js Tricks

var arr1 = [-1,2,3,4,5,100,2000]

console.log( 'arr = [-1,2,3,4,5,100,2000]')

console.log ("Min : " ,  Math.min.apply(Math, arr1) )
console.log ("Max : " , Math.max.apply(Math, arr1) )


// Empty an Array

var arr2 = [-1,2,3,4,5,100,2000];

arr2.length = 0

arr2;


// Js Tricks
console.log (
`var arr3 = [-1,2,3,4,5,100,2000];

var num = 1.1234567

num = num.toFixed(2);

console.log ( parseFloat (num) );
`)
var arr3 = [-1,2,3,4,5,100,2000];

var num = 1.1234567

num = num.toFixed(2);


console.log ( "//" ,parseFloat ( num) );



// Js Tricks

// var person = {name :'Rohito', age : 29, department : {ID : 12, name : "Product Development"} };

console.log( "JSON.stringify([]) // Returns String" ) ;

console.log( "JSON.parse([]) // Returns Object")


console.log (`
setInterval('doSomethingPeriodically()', 1000);
setTimeout('doSomethingAfterFiveSeconds()', 5000);

VS

setInterval(doSomethingPeriodically, 1000);
setTimeout(doSomethingAfterFiveSeconds, 5000);

`)
