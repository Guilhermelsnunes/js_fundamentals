//object is used to store information and funcionality, the sintax is the same as dictionaries in Python
//keys dont need to be strings 




//to get the dictionary

// var movie = {
//     title: 'It\'s a wonderful life',
//     year: 1946,
//     language: 'Spanish'
// }
// console.log('Movie:', movie);




// if you want to just get one of the keys

// var movie = {
//     title: 'It\'s a wonderful life',
//     year: 1946,
//     language: 'Spanish'
// }
// console.log('Movie Title:', movie.title);



//add new keys to the dictionary/object and or replace wrong informaitonlike the year being replaced below

// var movie = {
//     title: 'It\'s a wonderful life',
//     year: 1946,
//     language: 'Spanish'
// }

// movie.year = 1947;
// movie.cast = ['James Stewart', 'Donna Reed'];
// movie.cast.push('Lionel Barrymore')
// console.log('Movie:', movie);



//add some table languages - if it cas ifen put things as a string in []

// var movie = {
//     title: 'It\'s a wonderful life',
//     year: 1946,
//     language: 'Spanish'
// }

// movie.year = 1947;
// movie.cast = ['James Stewart', 'Donna Reed'];
// movie.cast.push('Lionel Barrymore');
// movie['subtitle-language'] = 'German';
// console.log('Movie:', movie);




//find one details only

// var movie = {
//     title: 'It\'s a wonderful life',
//     year: 1946,
//     language: 'Spanish'
// }

// movie.year = 1947;
// movie.cast = ['James Stewart', 'Donna Reed'];
// movie.cast.push('Lionel Barrymore');
// movie['subtitle-language'] = 'German';
// console.log('Movie:', movie['subtitle-language']);

//will only find the subtitle langauge = German




// more dynamic 
// var movie = {
//     title: 'It\'s a wonderful life',
//     year: 1946,
//     language: 'Spanish'
// }

// movie.year = 1947;
// movie.cast = ['James Stewart', 'Donna Reed'];
// movie.cast.push('Lionel Barrymore');
// movie['subtitle-language'] = 'German';

// var propertyToAccess = 'language';

// console.log('Movie:', movie[propertytoAccess]);



// to DELETE THINGS - deleting year 
// var movie = {
//     title: 'It\'s a wonderful life',
//     year: 1946,
//     language: 'Spanish'
// }

// movie.year = 1947;
// movie.cast = ['James Stewart', 'Donna Reed'];
// movie.cast.push('Lionel Barrymore');
// movie['subtitle-language'] = 'German';

// delete movie.year

// console.log('Movie:', movie);
// terminal -      node objects.js




// record the ratings for this movie - nested object within the object
// var movie = {
//     title: 'It\'s a wonderful life',
//     year: 1946,
//     language: 'Spanish'
// }

// movie.year = 1947;
// movie.cast = ['James Stewart', 'Donna Reed'];
// movie.cast.push('Lionel Barrymore');
// movie['subtitle-language'] = 'German';

// delete movie.year

// movie.ratings = {
//     critic: 94,
//     audience: 95
// };

// console.log('Movie:', movie);






// finding only the ratings, finfind only the nested object inside the main object 
// var movie = {
//     title: 'It\'s a wonderful life',
//     year: 1946,
//     language: 'Spanish'
// }
// movie.year = 1947;
// movie.cast = ['James Stewart', 'Donna Reed'];
// movie.cast.push('Lionel Barrymore');
// movie['subtitle-language'] = 'German';
// delete movie.year
// movie.ratings = {
//     critic: 94,
//     audience: 95
// };

// console.log('Movie:', movie.ratings.audience);






// for loop  
// var movie = {
//     title: 'It\'s a wonderful life',
//     year: 1946,
//     language: 'Spanish'
// }
// movie.year = 1947;
// movie.cast = ['James Stewart', 'Donna Reed'];
// movie.cast.push('Lionel Barrymore');
// movie['subtitle-language'] = 'German';
// delete movie.year
// movie.ratings = {
//     critic: 94,
//     audience: 95
// };

// console.log('Movie:', movie.movie);

// for (var key in movie){
//     var value = movie[key];
//     console.log(`The ${key} is ${value}`)
// }




// for look - other option without a loop 
var movie = {
    title: 'It\'s a wonderful life',
    year: 1946,
    language: 'Spanish'
}
movie.year = 1947;
movie.cast = ['James Stewart', 'Donna Reed'];
movie.cast.push('Lionel Barrymore');
movie['subtitle-language'] = 'German';
delete movie.year
movie.ratings = {
    critic: 94,
    audience: 95
};

console.log('Movie:', movie);

// for (var key in movie){
//     var value = movie[key];
//     console.log(`The ${key} is ${value}`)
// }

//other option

var keys = Object.keys(movie);
console.log('Keys', keys);