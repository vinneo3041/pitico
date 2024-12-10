// Selecionando elementos do carrossel
const carouselImages = document.querySelector('.carousel-images');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;
const totalImages = carouselImages.children.length;

// Função para atualizar o carrossel
function updateCarousel(index) {
    // Calcula a posição para a transição
    const offset = -index * 100; 
    carouselImages.style.transform = `translateX(${offset}%)`;

    // Atualiza os indicadores ativos
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Função para alternar automaticamente
function autoSlide() {
    currentIndex = (currentIndex + 1) % totalImages; // Volta ao início após a última imagem
    updateCarousel(currentIndex);
}

// Evento para indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index; // Atualiza o índice atual
        updateCarousel(currentIndex);
    });
});

// Configuração do auto-slide
let interval = setInterval(autoSlide, 3000); // Altera a cada 3 segundos

// Pausar ao passar o mouse
carouselImages.addEventListener('mouseover', () => {
    clearInterval(interval);
});

// Retomar ao sair com o mouse
carouselImages.addEventListener('mouseout', () => {
    interval = setInterval(autoSlide, 3000);
});

// Inicializa o carrossel na primeira imagem
updateCarousel(currentIndex);
