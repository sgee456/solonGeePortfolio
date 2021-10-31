//namespace app
const app = {};

app.openMenu = document.querySelector('#openMenu');
app.closeMenu = document.querySelector('#closeMenu');
app.hamburgerMenu = document.querySelector('#hamburgerMenu');

app.openMenu.addEventListener('click', () => {
    app.openMenu.classList.toggle('hidden');
    app.hamburgerMenu.classList.toggle('hidden');
});

app.closeMenu.addEventListener('click', () => {
    app.openMenu.classList.toggle('hidden');
    app.hamburgerMenu.classList.toggle('hidden');
});

app.init = function() {
    console.log(app.hamburgerMenu);
};

//document ready
document.addEventListener('DOMContentLoaded', () => {
	app.init()
})