//navbar for smaller screens sizes
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

//for section video play while hover
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

//activate tooltip bootstrap function
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const sectionContent = document.getElementById('section-content');
  const ctaButtons = sectionContent.querySelectorAll('.cta-button');
  const newBackgroundImage = 'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)';
  const originalBackgroundImage = 'linear-gradient(315deg, #2d3436 0%, #d3d3d3 74%)';

  ctaButtons.forEach(button => {
      button.addEventListener('mouseenter', (e) => {
          const rect = sectionContent.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          sectionContent.style.setProperty('--mouse-x', `${x}px`);
          sectionContent.style.setProperty('--mouse-y', `${y}px`);
          sectionContent.style.setProperty('--new-bg', newBackgroundImage);
          
          sectionContent.classList.add('hover');
          sectionContent.classList.remove('leave');
      });

      button.addEventListener('mouseleave', (e) => {
          sectionContent.classList.remove('hover');
          sectionContent.classList.add('leave');
      });

      button.addEventListener('click', (e) => {
          const rect = sectionContent.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          sectionContent.style.setProperty('--mouse-x', `${x}px`);
          sectionContent.style.setProperty('--mouse-y', `${y}px`);
          sectionContent.style.setProperty('--new-bg', newBackgroundImage);
          
          sectionContent.classList.add('leave');
          
          // Reset background image after animation completes
          setTimeout(() => {
              sectionContent.style.setProperty('--new-bg', originalBackgroundImage);
              sectionContent.classList.remove('leave');
          }, 1500); // Duration of the animation
      });
  });
});


document.querySelectorAll('.btn-grad.lets-talk, .btn-grad.lets-talk-nav').forEach(function(button) {
  button.addEventListener('click', function() {
      document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
  });
});