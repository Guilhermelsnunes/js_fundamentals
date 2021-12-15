var sports = ['football', 'tennis', 'rugby', 'curling', 'snooker', 'darts'];

console.log("Sports", sports);


// LOOPS!!

// for (var currentSport of sports) {
//     var upperCaseSport = currentSport.toUpperCase();
//     console.log(upperCaseSport);
// }




// if you need the index number instead of the name of the item
//long for loop   it tracks the index number istead of the item in the array     
//the 'i' means 'index'    the ++ increments the value by one

for (var i = 0; i < sports.length; i++){
    console.log(i);
}


//other option
// for (var i = 0; i < sports.length; i++){
//     var currrentSport = sports[i]
//     console.log(currentSport);
// }



//   node loops.js       in the terminal 