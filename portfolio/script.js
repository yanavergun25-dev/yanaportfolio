// Плавний перехід до розділів — працює через CSS (scroll-behavior),
// тут лише закриваємо зайві дії для неактивних іконок.

// Іконки без посилань (Facebook, TikTok) нічого не відкривають
document.querySelectorAll('.no-link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

// Збільшення робіт по кліку
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

document.querySelectorAll('.zoom').forEach(function (img) {
  img.addEventListener('click', function () {
    openLightbox(img.src, img.alt);
  });
});

lightbox.addEventListener('click', closeLightbox);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});
