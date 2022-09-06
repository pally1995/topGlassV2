const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

bar1.addEventListener('click', () => {
    bar1.classList.toggle("open");
})