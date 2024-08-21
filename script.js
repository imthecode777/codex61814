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
window.onload = function () {
  // Ensure that the "Tap to Open" text only shows after everything is loaded
  const loadingBar = document.querySelector(".loading-bar");

  // Simulate a brief delay to enhance user experience, if needed
  setTimeout(() => {
    loadingBar.classList.remove("loading-bar");
    loadingBar.classList.add("tap-to-open");

    // Setting the text content
    loadingBar.innerHTML =
      'Tap to Open&nbsp;&nbsp;<i class="bi bi-arrow-right"></i>';
  }, 100); // Adjust the delay as desired

  document.querySelector("#loader").addEventListener("click", function () {
    // Hide the loader and show the main content
    document.querySelector("#loader").style.display = "none";

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
      console.error("Error initializing tooltip:", tooltipTriggerEl, error);
    }
  });
});

//Smooth BG Animation :hover
document.addEventListener("DOMContentLoaded", () => {
  const sectionContent = document.getElementById("section-content");
  const ctaButtons = sectionContent.querySelectorAll(".cta-button");
  const newBackgroundImage =
    "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
  const originalBackgroundImage =
    "linear-gradient(315deg, #2d3436 0%, #d3d3d3 74%)";

  const updateMousePosition = (e) => {
    const rect = sectionContent.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    sectionContent.style.setProperty("--mouse-x", `${x}px`);
    sectionContent.style.setProperty("--mouse-y", `${y}px`);
  };

  const applyNewBackground = () => {
    sectionContent.style.setProperty("--new-bg", newBackgroundImage);
  };

  const resetBackground = () => {
    sectionContent.style.setProperty("--new-bg", originalBackgroundImage);
  };

  ctaButtons.forEach((button) => {
    button.addEventListener("mouseenter", (e) => {
      updateMousePosition(e);
      applyNewBackground();
      sectionContent.classList.add("hover");
      sectionContent.classList.remove("leave");
    });

    button.addEventListener("mouseleave", () => {
      sectionContent.classList.remove("hover");
      sectionContent.classList.add("leave");
    });

    button.addEventListener("click", (e) => {
      updateMousePosition(e);
      applyNewBackground();
      sectionContent.classList.add("leave");
      setTimeout(() => {
        resetBackground();
        sectionContent.classList.remove("leave");
      }, 1500); // Duration of the animation
    });
  });
});

//Make Let's Talk Smooth Movement
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(
    ".btn-grad.lets-talk, .btn-grad.lets-talk-nav"
  );
  const contactSection = document.getElementById("contact-section");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

document.querySelector(".click").addEventListener("click", function () {
  document.documentElement.classList.add("no-scroll");
  document.body.classList.add("no-scroll");

  Swal.fire({
    html: `
          <div class="bgblue">
              <div class="card">
                  <h1><span class="icon2"></span>&nbsp;CODEX61814</h1>
                  <p>Copyright © 2024. All Rights Reserved.</p>
                  <div class="custom-button-container">
                      <button class="custom-button">Exit&nbsp;&nbsp;<i class="bi bi-box-arrow-right"></i></button>
                  </div>
              </div>
          </div>
      `,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    didClose: () => {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    },
  });

  document
    .querySelector(".custom-button")
    .addEventListener("click", function () {
      Swal.close();
    });
});

// Existing code for dropdown toggle and icon changes
document.querySelectorAll(".scroll-dropdown-header i").forEach((icon) => {
  // Click event to toggle the dropdown content and icon
  icon.addEventListener("click", () => {
    const container = icon.closest(".scroll-dropdown-container");
    container.classList.toggle("active");

    // Toggle between 'bi-caret-down' and 'bi-caret-down-fill' classes on click
    if (container.classList.contains("active")) {
      icon.classList.remove("bi-caret-down");
      icon.classList.add("bi-caret-down-fill");
    } else {
      icon.classList.remove("bi-caret-down-fill");
      icon.classList.add("bi-caret-down");
    }
  });

  // Mouseover event to change the icon to 'bi-caret-down-fill' on hover
  icon.addEventListener("mouseover", () => {
    if (!icon.classList.contains("bi-caret-down-fill")) {
      icon.classList.add("bi-caret-down-fill");
      icon.classList.remove("bi-caret-down");
    }
  });

  // Mouseout event to revert the icon to 'bi-caret-down' if not active
  icon.addEventListener("mouseout", () => {
    const container = icon.closest(".scroll-dropdown-container");
    if (!container.classList.contains("active")) {
      icon.classList.remove("bi-caret-down-fill");
      icon.classList.add("bi-caret-down");
    }
  });
});

document.querySelectorAll(".btn-grad.book-now").forEach((button) => {
  button.addEventListener("click", () => {
    // Locate the target container for scrolling
    const container = document.querySelector(".scroll-dropdown-container");

    if (container) {
      // Smoothly scroll to the container
      container.scrollIntoView({ behavior: "smooth" });

      // Trigger the icon click event after scrolling
      setTimeout(() => {
        const icon = container.querySelector(".scroll-dropdown-header i");

        if (icon) {
          // If the container is already open, close it first
          if (container.classList.contains("open")) {
            icon.click(); // Close
          }

          // Open the container after a slight delay
          setTimeout(() => {
            icon.click(); // Open
          }, 100); // Adjust delay for smooth UX
        }
      }, 500); // Adjust this duration as needed for optimal timing
    }
  });
});

// Function to show the notification with smooth transitions
function showNotification(planTitle = "$199 - STARTUP PLAN") {
  const notifContainer = document.getElementById("notif-container");
  const notifMain = document.getElementById("notif-main");
  const notifTitle = document.querySelector(".notif-title");

  // Apply fade-out effect and set up one-time transition listener
  notifContainer.classList.add("fade-out");

  notifContainer.addEventListener(
    "transitionend",
    function onFadeOut() {
      notifTitle.textContent = planTitle; // Update the title

      // Switch from fade-out to fade-in
      notifContainer.classList.remove("fade-out");
      notifContainer.classList.add("fade-in");

      notifMain.style.display = "block"; // Ensure visibility of notif-main
      notifMain.classList.add("show");

      // Remove fade-in class after the transition ends
      notifContainer.addEventListener(
        "transitionend",
        () => {
          notifContainer.classList.remove("fade-in");
        },
        { once: true }
      );

      // Clean up the fade-out listener
      notifContainer.removeEventListener("transitionend", onFadeOut);
    },
    { once: true }
  );
}

// Function to handle SweetAlert2 dialog and manage notif-main visibility
function handleCloseNotification() {
  const notifMain = document.getElementById("notif-main");
  const contactSection = document.querySelector("#contact-section.builder");

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    background: "#29292c",
    color: "#fff",
    customClass: {
      popup: "swal2-dark",
      container: "swal2-custom-padding",
    },
    padding: "1.5rem", // Adjust the padding value for better visual space
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted successfully.",
        icon: "success",
        background: "#29292c",
        color: "#fff",
        customClass: {
          popup: "swal2-dark",
          container: "swal2-custom-padding",
        },
        padding: "1.5rem", // Consistent padding for success alert
        confirmButtonColor: "#3085d6",
      }).then(() => {
        notifMain.classList.add("fade-out");

        notifMain.addEventListener(
          "transitionend",
          function onClose() {
            notifMain.style.display = "none"; // Hide after transition
            notifMain.classList.remove("fade-out", "show"); // Reset classes
            notifMain.removeEventListener("transitionend", onClose); // Clean up listener
          },
          { once: true }
        );
      });
    } else {
      // Ensure notif-main remains visible if canceled
      notifMain.style.display = "block";
      notifMain.classList.add("show");

      // Scroll to contact section if it exists
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: "smooth" });

          setTimeout(() => {
            contactSection.focus(); // Bring contact section into focus
          }, 800); // Adjust timeout based on scroll speed
        }, 200); // Slight delay to ensure smoothness
      } else {
        console.error(
          "Contact section with ID 'contact-section' and class 'builder' not found."
        );
      }
    }
  });
}

// Event listeners for buttons with different plan titles
document.getElementById("show-notif-button-1").addEventListener("click", () => {
  showNotification("$199 - STARTUP PLAN");
});

document.getElementById("show-notif-button-2").addEventListener("click", () => {
  showNotification("$399 - GROWTH PLAN");
});

document.getElementById("show-notif-button-3").addEventListener("click", () => {
  showNotification("$599 - PREMIUM PLAN");
});

// Event listener for the close icon with SweetAlert2 handling
document
  .getElementById("notif-close-icon")
  .addEventListener("click", handleCloseNotification);

// Event listeners to ensure notif-main shows after any button click
document.querySelectorAll(".scroll-button").forEach((button) => {
  button.addEventListener("click", () => {
    const notifMain = document.getElementById("notif-main");
    notifMain.style.display = "block";
    notifMain.classList.add("show");
  });
});

// Function to scroll smoothly to the contact section and display notification
function showNotification(planTitle = "$199 - STARTUP PLAN") {
  const notifContainer = document.getElementById("notif-container");
  const notifTitle = document.querySelector(".notif-title");
  const contactSection = document.getElementById("contact-section");

  // Smooth scroll to #contact-section
  contactSection.scrollIntoView({ behavior: "smooth" });

  // Delay transition start to match scroll duration
  setTimeout(() => {
    notifContainer.classList.add("fade-out");

    notifContainer.addEventListener(
      "transitionend",
      function onFadeOut() {
        notifTitle.textContent = planTitle;

        // Switch to fade-in effect
        notifContainer.classList.remove("fade-out");
        notifContainer.classList.add("fade-in");

        notifContainer.addEventListener(
          "transitionend",
          () => {
            notifContainer.classList.remove("fade-in");
          },
          { once: true }
        );

        notifContainer.removeEventListener("transitionend", onFadeOut); // Clean up
      },
      { once: true }
    );
  }, 500); // Adjust delay time as needed
}

// Event listeners for buttons with different titles
document.getElementById("show-notif-button-1").addEventListener("click", () => {
  showNotification("$199 - STARTUP PLAN");
});

document.getElementById("show-notif-button-2").addEventListener("click", () => {
  showNotification("$399 - GROWTH PLAN");
});

document.getElementById("show-notif-button-3").addEventListener("click", () => {
  showNotification("$599 - PREMIUM PLAN");
});
