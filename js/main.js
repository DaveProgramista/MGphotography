const burgerBtn = document.querySelector('.burger-btn');
const navMobile = document.querySelector('.nav__mobile');
const allMobileNavItems = document.querySelectorAll('.nav__mobile-link');

const handleNav = () => {
	navMobile.classList.toggle('nav__mobile--active');

	allMobileNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__mobile--active');
		});
	});
    
};

burgerBtn.addEventListener('click', handleNav);