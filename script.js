"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

// start();


const personalMovieDb = {
  count: numberOfFilms, 
  movies: {}, 
  actors: {}, 
  genres: [], 
  privat: true
};

//первый вариант цикла
// for (let i = 1; i < 3; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?", "");
//   const b = prompt("На сколько оцените его?", "");

//   if(a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDb.movies[a] = b;
//     console.log('done');
//   } else {
//     i--;
//   }
// };


//второй вариант цикла
function rememberMyFilms() {
let num = 0; 
while(num < 2 ) {
  const a = prompt("Один из последних просмотренных фильмов?", "");
  const b = prompt("На сколько оцените его?", "");

  if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDb.movies[a] = b;
    num++;
  } else {
    num--;
  }
}
}

// rememberMyFilms();

//третий вариант цикла 
// let num = 0;

// do {
//   const a = prompt("Один из последних просмотренных фильмов?", "");
//   const b = prompt("На сколько оцените его?", "");

//   if(a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDb.movies[a] = b;
//     num++;
//   } else {
//     num--;
//   }
// }
// while (num < 2);

function detectPersonalLevel() {
  if (personalMovieDb.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDb.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}
}

// detectPersonalLevel();

// function showMyDb(hidden) {
//   if(!hidden) {
//     console.log(personalMovieDb);
//   } 
// }

// showMyDb(personalMovieDb.privat);

function showMyDb() {
  if(personalMovieDb.privat == true) {
    console.log(personalMovieDb);
  }
}

showMyDb();


function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDb.genres[i - 1] = genre;
  }
}

writeYourGenres();

