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

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.cta-button');
  const video = document.getElementById('hover-video');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      video.play();
      video.style.filter = 'grayscale(0%)';
      video.style.transform = 'translateY(-10px)';
    });

    button.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
      video.style.filter = 'grayscale(100%)';
      video.style.transform = 'translateY(0)';
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});





document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const button = document.querySelector('.form-button');
  const buttonText = document.querySelector('.button-text');
  const svg = document.querySelector('.custom-container');

  buttonText.style.display = 'none';
  svg.style.display = 'block';

  const formData = new FormData(this);
  fetch(this.action, {
    method: this.method,
    body: formData
  }).then(response => {
    return response.json();
  }).then(data => {
    // Handle success
    buttonText.style.display = 'block';
    svg.style.display = 'none';
    localStorage.setItem("formSubmitted", "true");
    location.reload();
  }).catch(error => {
    // Handle error
    buttonText.style.display = 'block';
    svg.style.display = 'none';
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something Went Wrong!",
      footer: '<a href="#">Why do I have this issue?</a>',
      customClass: {
        container: 'swal2-dark',
        confirmButton: 'custom-swal-button'
      }
    });
  });
});

window.addEventListener("load", function () {
  if (localStorage.getItem("formSubmitted") === "true") {
    Swal.fire({
      title: "Good job!",
      text: "Message Sent Successfully!",
      icon: "success",
      customClass: {
        container: 'swal2-dark',
        confirmButton: 'custom-swal-button'
      }
    });
    localStorage.removeItem("formSubmitted");
  }
});























