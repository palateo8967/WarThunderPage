// Función para manejar el cambio de tamaño del navbar y el botón
window.onscroll = function() {
  handleScroll();
};

function handleScroll() {
  // Navbar se achica cuando se hace scroll
  var header = document.querySelector("header");
  if (window.pageYOffset > 100) { 
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }

  // Mostrar el botón "Volver arriba"
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
}

// Función para hacer scroll hacia arriba cuando se hace clic en el botón
document.getElementById("scrollTopBtn").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
