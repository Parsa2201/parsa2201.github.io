document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function changeBackgroundOnScroll() {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
    
    
    const maxHue = 360;
    const offset = 100;
    
    const hue = (Math.sin(scrollPercentage / 200 * Math.PI * 2) * 180 + offset) % maxHue;
    
    document.body.style.backgroundColor = `hsl(${hue}, 20%, 95%)`;
  }
  

  window.addEventListener('scroll', changeBackgroundOnScroll);