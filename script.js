"use strict";

const numberofFilms = prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDb = {
  count: +numberofFilms, 
  movies: {}, 
  actors: {}, 
  genres: [], 
  privat: false
};

for (let i = 1; i < 3; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", "");
  const b = prompt("На сколько оцените его?", "");

  if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDb.movies[a] = b;
    console.log('done');
  } else {
    i--;
  }
};

// if (personalMovieDb.count < 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
//   console.log("Вы классический зритель");
// } else if (personalMovieDb.count >= 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("Произошла ошибка");
// }


console.log(personalMovieDb);



