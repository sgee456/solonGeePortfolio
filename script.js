//namespace app
const app = {};

app.openMenu = document.querySelector('#openMenu');
app.closeMenu = document.querySelector('#closeMenu');
app.hamburgerMenu = document.querySelector('#hamburgerMenu');

app.openMenu.addEventListener('click', () => {
    app.openMenu.classList.toggle('hidden');
    app.hamburgerMenu.classList.toggle('hidden');
    app.hamburgerMenu.classList.toggle('closed');
});

app.closeMenu.addEventListener('click', () => {
    app.openMenu.classList.toggle('hidden');
    app.hamburgerMenu.classList.toggle('closed');
    //only changes visibility of menu back to hidden 
    //after opacity and height transition is shown
    setTimeout(() => {
        app.hamburgerMenu.classList.toggle('hidden');
    }, 400)
});

app.init = function() {
    console.log(app.hamburgerMenu);
};

//document ready
document.addEventListener('DOMContentLoaded', () => {
	app.init();
});