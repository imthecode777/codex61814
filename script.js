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
    backdrop: "rgba(0, 0, 0, 0.8)", // Added backdrop property
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

function disableScroll() {
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
}

function enableScroll() {
  document.body.style.overflowY = "auto";
  document.body.style.overflowX = "hidden";
  document.body.style.position = "static";
  document.body.style.width = "auto";
}

function showNotification(planTitle = "$199 - STARTUP PLAN") {
  const notifContainer = document.getElementById("notif-container");
  const notifMain = document.getElementById("notif-main");
  const notifTitle = document.querySelector(".notif-title");

  notifContainer.classList.add("fade-out");

  notifContainer.addEventListener(
    "transitionend",
    function onFadeOut() {
      notifTitle.textContent = planTitle;

      notifContainer.classList.remove("fade-out");
      notifContainer.classList.add("fade-in");

      notifMain.style.display = "block";
      notifMain.classList.add("show");

      notifContainer.addEventListener(
        "transitionend",
        () => {
          notifContainer.classList.remove("fade-in");
        },
        { once: true }
      );

      notifContainer.removeEventListener("transitionend", onFadeOut);
    },
    { once: true }
  );
}

function handleCloseNotification() {
  const notifMain = document.getElementById("notif-main");
  const contactSection = document.querySelector("#contact-section.builder");
  disableScroll();

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
    },
    padding: "1.5rem",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
        background: "#29292c",
        color: "#fff",
        customClass: {
          popup: "swal2-dark",
        },
        padding: "1.5rem",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        enableScroll();
        notifMain.classList.add("fade-out");
        notifMain.addEventListener(
          "transitionend",
          function onClose() {
            notifMain.style.display = "none";
            notifMain.classList.remove("fade-out", "show");
            notifMain.removeEventListener("transitionend", onClose);
          },
          { once: true }
        );
      });
    } else {
      notifMain.style.display = "block";
      notifMain.classList.add("show");

      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: "smooth" });
          enableScroll();
          setTimeout(() => {
            contactSection.focus();
          }, 800);
        }, 200);
      } else {
        console.error(
          "Contact section with ID 'contact-section' and class 'builder' not found."
        );
      }
    }
  });
}

document.getElementById("show-notif-button-1").addEventListener("click", () => {
  showNotification("$199 - STARTUP PLAN");
});

document.getElementById("show-notif-button-2").addEventListener("click", () => {
  showNotification("$399 - GROWTH PLAN");
});

document.getElementById("show-notif-button-3").addEventListener("click", () => {
  showNotification("$599 - PREMIUM PLAN");
});

document
  .getElementById("notif-close-icon")
  .addEventListener("click", handleCloseNotification);

document.querySelectorAll(".scroll-button").forEach((button) => {
  button.addEventListener("click", () => {
    const notifMain = document.getElementById("notif-main");
    notifMain.style.display = "block";
    notifMain.classList.add("show");
  });
});

function showNotification(planTitle = "$199 - STARTUP PLAN") {
  const notifContainer = document.getElementById("notif-container");
  const notifTitle = document.querySelector(".notif-title");
  const contactSection = document.getElementById("contact-section");

  contactSection.scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    notifContainer.classList.add("fade-out");

    notifContainer.addEventListener(
      "transitionend",
      function onFadeOut() {
        notifTitle.textContent = planTitle;

        notifContainer.classList.remove("fade-out");
        notifContainer.classList.add("fade-in");

        notifContainer.addEventListener(
          "transitionend",
          () => {
            notifContainer.classList.remove("fade-in");
          },
          { once: true }
        );

        notifContainer.removeEventListener("transitionend", onFadeOut);
      },
      { once: true }
    );
  }, 500);
}

document.getElementById("show-notif-button-1").addEventListener("click", () => {
  showNotification("$199 - STARTUP PLAN");
});

document.getElementById("show-notif-button-2").addEventListener("click", () => {
  showNotification("$399 - GROWTH PLAN");
});

document.getElementById("show-notif-button-3").addEventListener("click", () => {
  showNotification("$599 - PREMIUM PLAN");
});

function getSelectedPlan() {
  const notifMain = document.getElementById("notif-main");
  const subscriptionInput = document.querySelector(
    "input[name='subscription']"
  );
  const notifTitle = document.querySelector(".notif-title");
  const selectedPlan =
    notifMain && notifMain.classList.contains("show")
      ? notifTitle.textContent
      : "NO PLANS CHOOSED";
  subscriptionInput.value = selectedPlan;

  return selectedPlan;
}
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    getSelectedPlan();
    setTimeout(() => {
      const subscriptionInput = document.querySelector(
        "input[name='subscription']"
      );
      const notifTitle = document.querySelector(".notif-title");
      subscriptionInput.value = "NO PLANS CHOOSED";
      notifTitle.textContent = "NO PLANS CHOOSED";
      const notifMain = document.getElementById("notif-main");
      if (notifMain) {
        notifMain.classList.remove("show");
        notifMain.style.display = "none";
      }
    }, 300);
  });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const submitButton = form.querySelector(".form-button");
  const loader = submitButton.querySelector(".custom-container");
  const buttonText = submitButton.querySelector(".button-text");
  const notifMain = document.getElementById("notif-main");

  // Form submit event listener
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Show loader and hide the button text
    loader.style.display = "block";
    buttonText.style.display = "none";

    // Collect form data using FormData
    const formData = new FormData(form);

    // Asynchronous form submission using Fetch API
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json()) // Parse JSON response
      .then((data) => {
        console.log("Form submitted successfully:", data);

        // Reset the form after successful submission
        form.reset();

        // Hide notification container if it's visible
        if (notifMain && getComputedStyle(notifMain).display !== "none") {
          notifMain.style.display = "none";
        }

        // Show success alert
        disableScroll(); // Disable scroll when alert is shown
        Swal.fire({
          title: "Good job!",
          text: "Your message was sent successfully!",
          icon: "success",
          confirmButtonText: "OK",
          background: "#29292c", // Dark background
          color: "#fff", // White text
          customClass: {
            popup: "dark-alert",
            title: "dark-alert-title",
            confirmButton: "dark-alert-button",
          },
          backdrop: "rgba(0, 0, 0, 0.8)", // Dark backdrop
          padding: "1rem", // Padding around the alert
        }).then(() => {
          enableScroll(); // Re-enable scroll after the alert
        });
      })
      .catch((error) => {
        console.error("Form submission error:", error);

        // Show error alert
        disableScroll(); // Disable scroll when alert is shown
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
          background: "#29292c", // Dark background
          color: "#fff", // White text
          customClass: {
            popup: "dark-alert",
            title: "dark-alert-title",
            confirmButton: "dark-alert-button",
          },
          backdrop: "rgba(0, 0, 0, 0.8)", // Dark backdrop
          padding: "1rem", // Padding around the alert
        }).then(() => {
          enableScroll(); // Re-enable scroll after the alert
          window.location.reload(); // Reload the page
        });
      })
      .finally(() => {
        // Always hide the loader and show the button text
        loader.style.display = "none";
        buttonText.style.display = "block";
      });
  });
});

const originalFavicon = "./img/favicon.ico";
const grayFavicon = "./img/favicon-gray.ico";
const favicon = document.getElementById("favicon");

// Function to change favicon instantly (for leaving the site)
function changeFaviconInstant(src) {
  if (favicon) {
    favicon.href = src;
    favicon.style.opacity = 1; // Ensure i  6t stays visible without transition delay
  }
}

// Function to change favicon with a smooth transition (for entering the site)
function changeFaviconSmooth(src) {
  if (favicon) {
    favicon.style.opacity = 0; // Fade out quickly
    setTimeout(() => {
      favicon.href = src;
      favicon.style.opacity = 1; // Fade back in
    }, 100); // Short fade-out time for faster switch
  }
}

// Handle visibility change (switching tabs)
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    changeFaviconInstant(grayFavicon); // Immediate change when leaving
  } else if (document.visibilityState === "visible") {
    changeFaviconSmooth(originalFavicon); // Smooth transition when returning
  }
});

window.addEventListener("blur", function () {
  changeFaviconInstant(grayFavicon);
});

window.addEventListener("focus", function () {
  changeFaviconSmooth(originalFavicon);
});
