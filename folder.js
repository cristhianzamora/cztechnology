let currentIdx = 0;
let isPaused = false;
const slides = document.querySelectorAll('.portfolio-slide');
const thumbs = document.querySelectorAll('.thumb');
const pauseBtn = document.getElementById('btnPause');

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    thumbs.forEach(t => t.classList.remove('active'));
    
    currentIdx = (index + slides.length) % slides.length;
    
    slides[currentIdx].classList.add('active');
    thumbs[currentIdx].classList.add('active');
}

// Intervalo automático
let autoSlide = setInterval(() => {
    if(!isPaused) showSlide(currentIdx + 1);
}, 6000);

// Controles
document.querySelector('.next').addEventListener('click', () => showSlide(currentIdx + 1));
document.querySelector('.prev').addEventListener('click', () => showSlide(currentIdx - 1));

function jumpToSlide(index) {
    showSlide(index);
}

// Botón de Pausa
pauseBtn.addEventListener('click', () => {
    isPaused = !isPaused;
    pauseBtn.innerHTML = isPaused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
});
