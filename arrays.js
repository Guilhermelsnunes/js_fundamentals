var sports = ['football', 'tennis', 'rugby'];

var numberOfSports = sports.length;

//console.log('number of sports: ', numberOfSports);

var firstSport = sports[0];
//console.log('First Sport: ', firstSport)



//adding or similar to   .apend
sports.push('curling');
sports.push('snooker');
sports.push('darts');


//remove from the array, default removes the last item
// sports.pop(); 
// console.log("Sports", sports);



// var removedSport = sports.pop();
//console.log("removedSports", sports);


//add in the start of the array
// sports.unshift('basketball');
// console.log("Sports", sports);



// remove at the start of a array
// sports.shift()
// console.log("Sports", sports);




//remove one specific item    splice
//sports.splice(3);      here you delete all after number 3 to the end
//sports.splice(3, 1);        here you just delete item3, which is what we want

//console.log("Sports", sports);



//to find one specific location in the array, here you het the nember of the position in the array
// var curlingIndex = sports.indexOf('curling');
// console.log(curlingIndex);




