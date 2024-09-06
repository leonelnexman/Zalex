document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('visible');
});

// Модальное окно 1
const modal = document.getElementById('modal');
const openBtns = document.querySelectorAll('.open-btn'); // Получаем все кнопки с классом 'open-btn'
const closeBtn = document.querySelector('.close');

// Открытие модального окна 1 при клике на любую из кнопок
openBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
});

// Закрытие модального окна 1 при нажатии на "x"
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Закрытие модального окна 1 при нажатии вне его
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Модальное окно 2
const modalb = document.getElementById("blogModal");
const openModalBtns = document.querySelectorAll(".blog-btn"); // Получаем все кнопки с классом 'blog-btn'
const closeModalBtn = document.querySelector(".close-btn");

// Открыть модальное окно 2 при нажатии на любую кнопку с классом 'blog-btn'
openModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modalb.style.display = "flex";
    });
});

// Закрыть модальное окно 2 при нажатии на кнопку закрытия
closeModalBtn.addEventListener("click", () => {
    modalb.style.display = "none";
});

// Закрыть модальное окно 2 при нажатии на любое место за его пределами
window.addEventListener("click", (event) => {
    if (event.target === modalb) {
        modalb.style.display = "none";
    }
});
