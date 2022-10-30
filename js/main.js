'use strict';

function accordeonPlugin(activeItem) {
    const items = document.querySelectorAll('.item');

    activeItem = Math.floor(Math.random() * (items.length - 0) + 0);

    items[activeItem].classList.add('active');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            clearActiveClasses();
            item.classList.add('active');
        });
    });

    let clearActiveClasses = () => {
        items.forEach((item) => {
            item.classList.remove('active');
        });
    };
}

accordeonPlugin();
