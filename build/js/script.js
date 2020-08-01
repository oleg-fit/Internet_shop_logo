'use strict';
let burger = document.querySelector('.icon-menu');

if (burger) {
  let openTogleHeader = function () {
    let menu = document.querySelector('.menu__body');

    burger.classList.toggle('icon-menu--active');
    menu.classList.toggle('menu__body--active');
  }

  burger.addEventListener('click', openTogleHeader);
}





