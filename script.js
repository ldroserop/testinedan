document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.querySelector(".menu-toggle");
    var menuList = document.querySelector(".menu-list");
    var categories = document.querySelectorAll(".category");
  
    menuToggle.addEventListener("click", function() {
      menuList.classList.toggle("show");
    });
  
    categories.forEach(function(category) {
      category.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que el evento se propague al menú principal
        this.classList.toggle("open");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".carousel-slide");
    var currentSlide = 0;
    var prevButton = document.querySelector(".carousel-prev");
    var nextButton = document.querySelector(".carousel-next");
  
    function showSlide(index) {
      slides[currentSlide].classList.remove("active");
      slides[index].classList.add("active");
      currentSlide = index;
    }
  
    function nextSlide() {
      var nextIndex = (currentSlide + 1) % slides.length;
      showSlide(nextIndex);
    }
  
    function prevSlide() {
      var prevIndex = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(prevIndex);
    }
  
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  
    setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos (ajusta el tiempo según tus preferencias)
  });
  
  
  
  
  