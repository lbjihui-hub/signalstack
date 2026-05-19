// =========================================================
// SIGNAL & SYSTEMS
// assets/js/main.js
// =========================================================

// MOBILE NAVIGATION

const toggle =
  document.querySelector(".nav-toggle");

const nav =
  document.querySelector(".main-nav");

if (toggle && nav) {

  toggle.addEventListener("click", () => {

    nav.classList.toggle("active");

  });

}

// =========================================================
// COPY EMAIL BUTTON
// =========================================================

const copyButtons =
  document.querySelectorAll("[data-copy]");

copyButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const value =
      button.getAttribute("data-copy");

    navigator.clipboard.writeText(value);

    const original =
      button.innerText;

    button.innerText = "Copied";

    setTimeout(() => {

      button.innerText = original;

    }, 1800);

  });

});

// =========================================================
// CONTACT FORM
// =========================================================

const contactForm =
  document.getElementById("contact-form");

if (contactForm) {

  contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
      document.getElementById("name").value;

    const email =
      document.getElementById("email").value;

    const role =
      document.getElementById("role").value;

    const organization =
      document.getElementById("organization").value;

    const topic =
      document.getElementById("topic").value;

    const message =
      document.getElementById("message").value;

    const subject =
      encodeURIComponent(
        `[Portfolio Contact] ${topic}`
      );

    const body =
      encodeURIComponent(
`Name: ${name}

Email: ${email}

Role: ${role}

Organization: ${organization}

Message:
${message}`
      );

    window.location.href =
      `mailto:lbjihui@gmail.com?subject=${subject}&body=${body}`;

  });

}
