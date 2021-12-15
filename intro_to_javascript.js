console.log('Hello world');

// VARIABLES
var firstname = "Mickey";
firstname = "Minnie";
console.log("name: ", firstname);

var greeting = "hello";
greeting = 5;
console.log(greeting);

// DATATYPES
//number - you have all the +-/* stuff 
//string - ("",'',``) you can use any quotation to make it a string
//null - the value is deliberately absent
//undefined - default value of declared variables where no value has been assigned (have a variable but no value inside)
//boolean - true or false, no capital letter necessary
//symbol - used for key-value pairs, we will see in the future


//CONDITIONALS

if (1 > 0) {
    var message = "1 is greater than zero";
} else if(1 == 0 ){
    var message = "1 is equal to 0";
} else {
    var message = "1 is not greater than zero";
}


if (null) {
    var result = "The expression evaluates to true";
} else {
    var result = "the expression evaluates to false";
}

// Equality
// triple ===    here is the real equal 
// triple !==    here is the real not equal 
// double == is not precise as 2 and '2' will be seen as equal
// double != is not precise and should not be use as will lead to mistakes/bugs


// Logic Operators
// (1+1 ===2) && (1+1===4)     will be false return
//(1+1 ===2) || (1+1===4)      will retrun a true as the first section is true and the second part will not be seen/tested
// !true      this means NOT TRUE