// Получаем элементы
const burgerBtn = document.getElementById('burger-btn');
const menu = document.getElementById('nav-link-box');
const body = document.body;

// Добавляем обработчик события
burgerBtn.addEventListener('click', () => {

    burgerBtn.classList.toggle('active');

  // Переключаем класс для отображения меню
  const isMenuOpen = menu.style.display === 'flex';
  menu.style.display = isMenuOpen ? 'none' : 'flex';

  // Блокируем или разблокируем прокрутку
  if (!isMenuOpen) {
    body.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
  }
});

window.addEventListener('resize', () => {
    // Если ширина экрана больше 768px, возвращаем меню
    if (window.innerWidth >= 768) {
      menu.style.display = 'flex';
      body.classList.remove('no-scroll'); // Разблокируем прокрутку
    } else {
      // Если бургер-кнопка активна, переключаем её состояние
      if (burgerBtn.classList.contains('active')) {
        burgerBtn.classList.toggle('active'); // Убираем активное состояние
        menu.style.display = 'none'; // Скрываем меню
        body.classList.remove('no-scroll'); // Разблокируем прокрутку
      } else {
        menu.style.display = 'none';
        body.classList.remove('no-scroll'); // На случай resize с открытым меню
      }
    }
  });


  const img = document.getElementById('myImage');

  // Добавляем обработчик для наведения мыши
  img.addEventListener('mouseenter', () => {
    img.classList.add('hover'); // При наведении добавляем класс hover
    img.src = 'img/triangle-sixangle-on.png'; // Заменяем изображение
  });
  
  // Добавляем обработчик для ухода мыши
  img.addEventListener('mouseleave', () => {
    img.classList.remove('hover'); // Убираем класс hover
    img.src = 'img/triangle-sixangle.png'; // Возвращаем оригинальное изображение
  });
  


// Открыть модальное окно и заблокировать скролл
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Блокируем прокрутку
}

// Закрыть модальное окно и разблокировать скролл
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
  document.body.style.overflow = ''; // Разблокируем прокрутку
}


// Закрыть модальное окно при клике вне его области
window.onclick = function (event) {
  // Собираем все элементы с классами modal и modal-faq
  const modals = document.querySelectorAll('.modal, .modal-faq');
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = 'none'; // Скрываем модальное окно
      document.body.style.overflow = ''; // Разблокируем прокрутку
    }
  });
};




function initSlider(modalId) {
  const modal = document.getElementById(modalId);
  const slides = modal.querySelectorAll('.slider-img');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // События для кнопок
  const nextBtn = modal.querySelector('.next-btn');
  const prevBtn = modal.querySelector('.prev-btn');

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Инициализация первого слайда
  showSlide(currentSlide);
}

// Инициализируем слайдеры для всех модальных окон
initSlider('modal1');
initSlider('modal2');






const switcher = document.getElementById('switcher');
const toggleKnob = document.getElementById('toggleKnob');
const toggleText = document.getElementById('toggleText');

const frame1 = document.getElementById('frame1');
const frame2 = document.getElementById('frame2');

let isLeft = true;

switcher.addEventListener('click', () => {
  isLeft = !isLeft;

  if (isLeft) {
    toggleKnob.style.left = '0';
    toggleText.textContent = 'NoRGB';
    frame1.style.display = 'block';
    frame2.style.display = 'none';
  } else {
    toggleKnob.style.left = '150px';
    toggleText.textContent = 'RGB';
    frame1.style.display = 'none';
    frame2.style.display = 'block';
  }
});
