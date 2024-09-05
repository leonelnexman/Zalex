document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('visible');
});

// Получаем элементы
const modal = document.getElementById('modal');
const openBtns = document.querySelectorAll('.open-btn'); // Получаем все кнопки с классом 'open-btn'
const closeBtn = document.querySelector('.close');

// Открытие модального окна при клике на любую из кнопок
openBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
});

// Закрытие модального окна при нажатии на "x"
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Закрытие модального окна при нажатии вне его
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});