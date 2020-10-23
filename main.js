let menuBurger = document.querySelector('.menu-burger')
let sideBar = document.querySelector('.sidebar')

menuBurger.onclick = function(event) {
	event.preventDefault();
    sideBar.classList.toggle('sidebar-visible');
}