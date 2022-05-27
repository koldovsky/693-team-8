let menuBtn = document.querySelector('.burger-menu-btn');
let menu = document.querySelector('.header__top-navigation-links');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
