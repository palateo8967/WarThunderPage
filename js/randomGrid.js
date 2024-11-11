document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const gallery = document.querySelector('.gallery');

  // Función para aplicar transformaciones aleatorias
  function applyRandomTransformations() {
      galleryItems.forEach(item => {   
          const x = Math.random() * 100; // Posición aleatoria en el eje X
          const y = Math.random() * 100; // Posición aleatoria en el eje Y  
          const scale = 0.8 + Math.random() * 0.5; // Escala aleatoria para las imágenes
  
          item.style.transform = `translate(${x}%, ${y}%) scale(${scale})`; // Aplica la transformación
      });
  } 

  applyRandomTransformations();

  setInterval(applyRandomTransformations, 1000);

});
