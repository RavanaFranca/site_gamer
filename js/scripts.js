/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const carouselContainer = document.querySelector('.custom-carousel-container');
            const carouselSlide = document.querySelector('.custom-carousel-slide');
            const carouselItems = document.querySelectorAll('.custom-carousel-item');
            const prevButton = document.querySelector('.custom-carousel-control.prev');
            const nextButton = document.querySelector('.custom-carousel-control.next');
            let counter = 0;
            const slideWidth = carouselItems[0].offsetWidth;
            const itemsPerSlide = 5;

            function slideNext() {
                if (counter >= carouselItems.length - itemsPerSlide) return;
                counter++;
                carouselSlide.style.transition = 'transform 0.5s ease-in-out';
                carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
            }

            function slidePrev() {
                if (counter <= 0) return;
                counter--;
                carouselSlide.style.transition = 'transform 0.5s ease-in-out';
                carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
            }

            nextButton.addEventListener('click', slideNext);
            prevButton.addEventListener('click', slidePrev);