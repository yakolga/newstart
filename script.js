"use strict";

const numberofFilms = prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDb = {
  count: +numberofFilms, 
  movies: {}, 
  actors: {}, 
  genres: [], 
  privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", "");
const b = prompt("На сколько оцените его?", "");
const c = prompt("Один из последних просмотренных фильмов?", "");
const d = prompt("На сколько оцените его?", "");

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);



