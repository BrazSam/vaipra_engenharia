const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const dots = document.querySelectorAll('.dot');

let counter = 0;
const size = 100; // Porcentagem que cada imagem ocupa (100%)
let interval;

// Função para atualizar o visual do carrossel
function updateCarousel() {
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + '%)';
    
    // Atualiza as bolinhas (dots)
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}

// Botão Avançar
document.querySelector('.next').addEventListener('click', () => {
    if (counter >= images.length - 1) {
        counter = 0; // Volta pro início se chegou no fim
    } else {
        counter++;
    }
    updateCarousel();
    resetInterval();
});

// Botão Voltar
document.querySelector('.prev').addEventListener('click', () => {
    if (counter <= 0) {
        counter = images.length - 1; // Vai pro último se está no primeiro
    } else {
        counter--;
    }
    updateCarousel();
    resetInterval();
});

// Clicar em uma bolinha específica
function currentSlide(index) {
    counter = index;
    updateCarousel();
    resetInterval();
}

// Função para rodar automaticamente a cada 5 segundos
function startInterval() {
    interval = setInterval(() => {
        if (counter >= images.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        updateCarousel();
    }, 5000); // 5000 milissegundos = 5 segundos
}

// Reseta o tempo se o usuário clicar manualmente para não pular muito rápido
function resetInterval() {
    clearInterval(interval);
    startInterval();
}

// Inicia o autoplay assim que a página carrega
startInterval();