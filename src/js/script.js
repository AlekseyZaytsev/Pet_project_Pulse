// var name = "Ivan";
// let number = 7;
// const pi = 3.14;
// number = 4;
// let leftBorderWidth = 200;

// alert(number);
// console.log(number);
// let answer = confirm('Вам есть 18?');
// console.log(answer);

// let answer = prompt('Вам есть 18?', '');
// console.log(answer);

// console.log(4 + 'dfs');

// let isChacked = true,
//     isClose = false;

// console.log(isChacked && isClose);
// console.log(isChacked || isClose);

// if (2*6 == 8*1) {
//     console.log('Верно')
// } else {
//     console.log('Ошибка')    
// }

// let answer = confirm("Вам есть 18?");
// if (answer) {
//     console.log('Проходите')
// } else {
//     console.log('Уходите')
// }

// const num = 50;
// if (num < 49) {
//     console.log('Меньше')
// } else if (num > 60) {
//     console.log('Больше')    
// } else {
//     console.log('Ровно')    
// }

// for (let i = 1; i < 8; i++) {
//     console.log(i)
// }

// function logging(a, b) {
//     console.log(a + b)
// }

// logging(3, 6);

// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1500,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1,
//                   infinite: true,
//                   dots: true
//                 }
//             }
//         ]
//     });
// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});