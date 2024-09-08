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

// Модальное окно для каталога
const catalogModal = document.getElementById("catalogModal");
const openCatalogModalBtns = document.querySelectorAll(".catalog-btn"); // Получаем все кнопки с классом 'catalog-btn'
const closeCatalogModalBtn = document.querySelector(".close-catalog-btn");

// Открыть модальное окно каталога при нажатии на любую кнопку с классом 'catalog-btn'
openCatalogModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        catalogModal.style.display = "flex";
    });
});

// Закрыть модальное окно каталога при нажатии на кнопку закрытия
closeCatalogModalBtn.addEventListener("click", () => {
    catalogModal.style.display = "none";
});

// Закрыть модальное окно каталога при нажатии на любое место за его пределами
window.addEventListener("click", (event) => {
    if (event.target === catalogModal) {
        catalogModal.style.display = "none";
    }
});

// Получаем кнопку для открытия характеристик и все элементы характеристик
const characteristicsBtn = document.querySelector(".catalogModal__characteristics-btn");
const characteristicsItems = document.querySelectorAll(".catalogModal__characteristics-item");

// Добавляем обработчик события для кнопки
characteristicsBtn.addEventListener("click", () => {
    // Устанавливаем всем элементам характеристик display: block
    characteristicsItems.forEach(item => {
        item.style.display = "block";
    });
    // Скрываем саму кнопку
    characteristicsBtn.style.display = "none";
});

Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll(".tel"), function (input) {
      var keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___)-___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = new_value.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i);
        }
        var reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
      }
      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
  
    function checkWindowSize() {
      if (window.innerWidth <= 962) {
        header.classList.remove('dark');
      }
    }
  
    // Проверить размер окна при загрузке страницы
    checkWindowSize();
  
    // Проверять размер окна при изменении его размера
    window.addEventListener('resize', checkWindowSize);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.modal-content__form');
    const modal = document.querySelector('.contact-modal');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Останавливаем стандартное поведение отправки формы

        // Добавляем класс 'done' к элементу с классом 'contact-modal'
        modal.classList.add('done');

        // Скрываем форму и отображаем сообщение об успешной отправке
        document.querySelector('.modal-content__form').style.display = 'none';
        document.querySelector('.modal-content__success').style.display = 'flex';
    });
});

