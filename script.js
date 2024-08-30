// Back to Top button
let backToTopBtn = document.querySelector('.back-to-top');
window.onscroll = () => {
    backToTopBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? 'flex' : 'none';
};

// Top nav menu
let menuItems = document.getElementsByClassName('menu-item');
Array.from(menuItems).forEach((item) => {
    item.onclick = () => {
        document.querySelector('.menu-item.active').classList.remove('active');
        item.classList.add('active');
    };
});

// Food category filtering
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.food-category button');
    const foodItems = document.querySelectorAll('.food-item-wrap .food-item');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterType = this.getAttribute('data-food-type');
            
            foodItems.forEach(item => {
                item.style.display = (filterType === 'all' || item.classList.contains(`${filterType}-type`)) ? 'block' : 'none';
            });
        });
    });
});

 


// On scroll animation
let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)};
let elToShow = document.querySelectorAll('.play-on-scroll');
isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
};
loop = () => {
    elToShow.forEach(item => {
        item.classList.toggle('start', isElInViewPort(item));
    });
    scroll(loop);
};
loop();

// Mobile nav
let bottomNavItems = document.querySelectorAll('.mb-nav-item');
let bottomMove = document.querySelector('.mb-move-item');
bottomNavItems.forEach((item, index) => {
    item.onclick = () => {
        document.querySelector('.mb-nav-item.active').classList.remove('active');
        item.classList.add('active');
        bottomMove.style.left = `${index * 25}%`;
    };
});



