"use strict";

//NAVIGATION SCROLLBAR
const NavigationScrollBar = () => {
  const scrollProgress = document.getElementById("scroll-progress");
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  window.addEventListener("scroll", () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
  });
};

NavigationScrollBar();

//TYPING EFFECT FOR THE H-TAGS
const typeEffect = (element, speed) => {
  const text = element.innerHTML;
  element.innerHTML = "";

  let i = 0;
  const timer = setInterval(function () {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};

const heading1 = document.querySelector(".typing-effect-h1");
const heading2 = document.querySelector(".typing-effect-h3");
const heading3 = document.querySelector(".typing-effect-h4");

setTimeout(function () {
  heading1.style.animation = "none"; // Disable the typing effect animation
  heading1.style.opacity = 1; // Ensure the heading is fully visible
  heading2.style.opacity = 0;
  heading3.style.opacity = 0;
  /*Start the typing effect after the animation is complete*/
  typeEffect(
    heading1,
    115
  ); /*Adjust the typing speed as needed (in milliseconds)*/
}, 100);

setTimeout(function () {
  heading2.style.opacity = 1;
  heading3.style.opacity = 1;
  heading2.style.transition = "2.0s";
  heading3.style.transition = "2.0s";
}, 4100);

//SECTIONS APPEAR FROM LEFT
const fadeInOnScrollLeft = () => {
  const elements = document.querySelectorAll(".fade-in-on-scroll-left");
  function fadeIn() {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const positionTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (positionTop < windowHeight) {
        element.classList.add("fade-in");
        element.style.transition = "3.8s";
      }
    }
  }
  window.addEventListener("scroll", fadeIn);
  fadeIn();
};
fadeInOnScrollLeft();

//HOVER THE MOUSE OVER THE CARD
const HoverOverTheAboutCards = () => {
  const imgDivs = document.querySelectorAll(".child");
  imgDivs.forEach((imgDiv) => {
    imgDiv.addEventListener("mouseover", function () {
      imgDiv.classList.add("shadow");
      imgDiv.firstElementChild.style.color = "white";
    });
    /*EXIT THE MOUSE FROM THE CARD */
    imgDivs.forEach((imgDiv) => {
      imgDiv.addEventListener("mouseleave", function () {
        imgDiv.classList.remove("shadow");
        imgDiv.style.transition = "1s";
        imgDiv.firstElementChild.style.color = "";
      });
    });
    /*click flip and reveal context */
    imgDivs.forEach((imgDiv) => {
      imgDiv.addEventListener("click", function () {
        imgDiv.classList.add("flip");
        imgDiv.firstElementChild.style.transform = "rotateY(180deg)";
        imgDiv.children[1].classList.add("hide");
        imgDiv.lastElementChild.classList.remove("hide");

        //remove flip and shadow
        imgDiv.addEventListener("mouseleave", function () {
          imgDiv.classList.remove("flip", "shadow");
          imgDiv.firstElementChild.style.transform = "";
          imgDiv.children[1].classList.remove("hide");
          imgDiv.lastElementChild.classList.add("hide");
        });
      });
    });
  });
};
HoverOverTheAboutCards();

// CONTACT FORM
const TypeOfWorkSelection = () => {
  const txtarea = document.getElementById("txt-area");
  const formSelect = document.querySelector(".form-select");
  formSelect.addEventListener("change", () => {
    formSelect.selectedIndex > 0
      ? (txtarea.value +=
          formSelect.options[formSelect.selectedIndex].text + "\n")
      : "";
  });
};
TypeOfWorkSelection();

//CONTACT HOVER EFFECTS
const ContactHoverEffects = () => {
  const contactDivs = document.querySelectorAll(".contact-div");
  contactDivs.forEach((child) =>
    child.addEventListener("mouseover", () => {
      child.firstElementChild.classList.add("contact-imgs-hover-effect");
      child.children[1].classList.add("hover-contact-effect");
    })
  );
  contactDivs.forEach((child) =>
    child.addEventListener("mouseleave", () => {
      child.firstElementChild.classList.remove("contact-imgs-hover-effect");
      child.children[1].classList.remove("hover-contact-effect");
      child.children[0].style.transition = "1.5s";
      child.children[1].style.transition = "1.5s";
    })
  );
};
ContactHoverEffects();

//FOOTER FADE IN FROM BOTTOM
const fadeInFromBottom = () => {
  const elements = document.querySelectorAll(".fade-in-from-bottom");
  function fadeIn() {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight) {
        element.classList.add("fade-in");
        element.style.transition = "2.5s";
      }
    }
  }
  window.addEventListener("scroll", fadeIn);
  fadeIn();
};
fadeInFromBottom();

//GETTING YEAR
const GettingYear = () => {
  const dateText = document.getElementById("date");
  const date = new Date().getFullYear();
  dateText.textContent = date;
};
GettingYear();

let currentlyEnlarged = null;
const toggleImageEnlargement = (image) => {
  if (currentlyEnlarged === image) {
    // Clicked image is the currently enlarged one, reduce it back to normal
    image.classList.toggle("enlarged");
    currentlyEnlarged = null;
  } else {
    if (currentlyEnlarged) {
      // Reduce the currently enlarged image
      currentlyEnlarged.classList.remove("enlarged");
    }

    if (window.innerWidth < 767) {
      image.classList.remove("enlarged");
      currentlyEnlarged = false;
      //if window is < than 767px do not pick or enlarge
    } else {
      image.classList.add("enlarged");
      currentlyEnlarged = image;
      // Enlarge the clicked image
    }
  }
};
