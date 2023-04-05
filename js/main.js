const burgerBtn = document.querySelector('.burger-btn');
const navMobile = document.querySelector('.nav__mobile');
const allMobileNavItems = document.querySelectorAll('.nav__mobile-link');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	navMobile.classList.toggle('nav__mobile--active');
    document.body.classList.toggle('sticky-body');

	allMobileNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__mobile--active');
            document.body.classList.remove('sticky-body');
		});
	});

};




const hanleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
hanleCurrentYear();
burgerBtn.addEventListener('click', handleNav);