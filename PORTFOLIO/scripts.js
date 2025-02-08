// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});

document.addEventListener("DOMContentLoaded", () => {
	const sections = document.querySelectorAll("section");
	let currentIndex = 0;
	let isScrolling = false;
  
	const scrollToSection = (id) => {
	  const targetSection = document.getElementById(id);
	  if (targetSection) {
		targetSection.scrollIntoView({
		  behavior: "smooth",
		});
	  }
	};
  
	// Mouse scroll logic for navigation
	window.addEventListener("wheel", (event) => {
	  if (isScrolling) return;
  
	  isScrolling = true;
  
	  if (event.deltaY > 0 && currentIndex < sections.length - 1) {
		currentIndex++;
	  } else if (event.deltaY < 0 && currentIndex > 0) {
		currentIndex--;
	  }
  
	  sections[currentIndex].scrollIntoView({
		behavior: "smooth",
	  });
  
	  setTimeout(() => {
		isScrolling = false;
	  }, 800); // Adjust to match smooth scrolling duration
	});
  
	// Click logic for header navigation buttons
	window.scrollToSection = (sectionId) => {
	  scrollToSection(sectionId);
	};
  });

  // Initialize Lenis for smooth scrolling
const lenis = new lenis({
	duration: 1.2, // Adjust the duration for scroll speed
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for smooth effect
	smoothWheel: true,
	smoothTouch: false,
  });
  
  function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  
  