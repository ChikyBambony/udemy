/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

let movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


let list = document.querySelector('.promo__interactive-list'),
    inputFilm = document.querySelector('.adding__input'),
    subm = document.getElementsByTagName('button'),
    

    clc =  subm[0].addEventListener('click', function pushFilm () {
        return  movieDB.movies.push(inputFilm.value);
     }  , false);
   
   
     list.innerHTML='';
     movieDB.movies.forEach( function element (e, i ){
        list.innerHTML +=`<li class='promo__interactive-item' > ${movieDB.movies[i]} </li>`;
});


    subm[0].onclick = ()=>{
        let addFilm =  movieDB.movies.length;
         list.innerHTML +=`<li class='promo__interactive-item' > ${movieDB.movies[addFilm-1]} </li>`;
    
}



    console.log(movieDB.movies);
    console.log(inputFilm);


   





