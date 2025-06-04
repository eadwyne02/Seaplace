const hamburger = document.getElementById("hamburger");
	const navMenu = document.getElementById("nav-menu");

	hamburger.addEventListener("click", () => {
  	hamburger.classList.toggle("open");
  	navMenu.classList.toggle("active");
});

    const track = document.getElementById('carouselTrack');
    const leftBtn = document.querySelector('.carousel-btn.left');
    const rightBtn = document.querySelector('.carousel-btn.right');
  
    let currentIndex = 0;
  
    function updateCarousel() {
      const cardWidth = track.children[0].offsetWidth + 20;
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  
    leftBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    rightBtn.addEventListener('click', () => {
      if (currentIndex < track.children.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    // Swipe support
    let startX = 0;
  
    track.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });
  
    track.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50 && currentIndex < track.children.length - 1) {
        currentIndex++;
      } else if (endX - startX > 50 && currentIndex > 0) {
        currentIndex--;
      }
      updateCarousel();
    });
  
    // Resize handling
    window.addEventListener('resize', updateCarousel);
  
    // ✅ Auto slide every 4 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % track.children.length;
      updateCarousel();
    }, 4000);