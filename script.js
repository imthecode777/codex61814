//Navbar for smaller screens sizes
const toggleButton = document.getElementById("toggle-logo");
const sidebar = document.querySelector(".sidebar");
const navbarList = document.getElementById("navbar-list");
toggleButton.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
document.addEventListener("click", function (event) {
  const isClickInsideNavbar =
    navbarList.contains(event.target) || toggleButton.contains(event.target);
  const isSidebarActive = sidebar.classList.contains("active");
  if (!isClickInsideNavbar && isSidebarActive && window.innerWidth <= 768) {
    sidebar.classList.remove("active");
  }
});


//Loader Screen JS
window.onload = function() {
  // Ensure that the "Tap to Open" text only shows after everything is loaded
  const loadingBar = document.querySelector(".loading-bar");
  
  // Simulate a brief delay to enhance user experience, if needed
  setTimeout(() => {
      loadingBar.classList.remove("loading-bar");
      loadingBar.classList.add("tap-to-open");
      
      // Setting the text content
      loadingBar.innerHTML = 'Tap to Open&nbsp;&nbsp;<i class="bi bi-arrow-right"></i>';
  }, 100); // Adjust the delay as desired
  
  document.querySelector('#loader').addEventListener('click', function() {
      // Hide the loader and show the main content
      document.querySelector('#loader').style.display = 'none';
      
      // Initialize AOS (or any other animations) after the loader is removed
      setTimeout(() => {
          AOS.init();
      }, 500); // Adjust the delay time as needed
  });
};


//For Section Video Play while:hover
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".cta-button");
  const video = document.getElementById("hover-video");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      video.play();
      video.style.filter = "grayscale(0%)";
      video.style.transform = "translateY(-10px)";
    });

    button.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
      video.style.filter = "grayscale(100%)";
      video.style.transform = "translateY(0)";
    });
  });
});



//Activate Tooltip Bootstrap Function
document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );

  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    try {
      new bootstrap.Tooltip(tooltipTriggerEl);
    } catch (error) {
      console.error('Error initializing tooltip:', tooltipTriggerEl, error);
    }
  });
});



//Smooth BG Animation :hover
document.addEventListener('DOMContentLoaded', () => {
  const sectionContent = document.getElementById('section-content');
  const ctaButtons = sectionContent.querySelectorAll('.cta-button');
  const newBackgroundImage = 'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)';
  const originalBackgroundImage = 'linear-gradient(315deg, #2d3436 0%, #d3d3d3 74%)';

  const updateMousePosition = (e) => {
    const rect = sectionContent.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    sectionContent.style.setProperty('--mouse-x', `${x}px`);
    sectionContent.style.setProperty('--mouse-y', `${y}px`);
  };

  const applyNewBackground = () => {
    sectionContent.style.setProperty('--new-bg', newBackgroundImage);
  };

  const resetBackground = () => {
    sectionContent.style.setProperty('--new-bg', originalBackgroundImage);
  };

  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', (e) => {
      updateMousePosition(e);
      applyNewBackground();
      sectionContent.classList.add('hover');
      sectionContent.classList.remove('leave');
    });

    button.addEventListener('mouseleave', () => {
      sectionContent.classList.remove('hover');
      sectionContent.classList.add('leave');
    });

    button.addEventListener('click', (e) => {
      updateMousePosition(e);
      applyNewBackground();
      sectionContent.classList.add('leave');
      setTimeout(() => {
        resetBackground();
        sectionContent.classList.remove('leave');
      }, 1500); // Duration of the animation
    });
  });
});


//Make Let's Talk Smooth Movement
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-grad.lets-talk, .btn-grad.lets-talk-nav');
  const contactSection = document.getElementById('contact-section');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
