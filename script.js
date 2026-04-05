
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

/* navbar scroll effect */
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 40);
});


const buttons = document.querySelectorAll(".tab-btn");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // active button style
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    items.forEach((item) => {
      if (filter === "all") {
        item.classList.remove("hide");
      } else if (item.classList.contains(filter)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});

const phone = document.querySelector(".copy-phone");
const number = document.getElementById("phoneNumber").innerText;
const message = document.getElementById("copyMessage");

phone.addEventListener("click", () => {
  // copy to clipboard
  navigator.clipboard.writeText(number);

  // show popup
  message.classList.add("show");

  // hide after 2 sec
  setTimeout(() => {
    message.classList.remove("show");
  }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {

  // Initialize EmailJS
  emailjs.init("b7kXwJAgg3L_RIaFw");

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_f4s6lt6",
      "template_9wyc3ml",
      this
    ).then(
      () => {
        alert("✅ Message sent successfully!");
        form.reset();
      },
      (error) => {
        alert("❌ Failed to send message");
        console.error(error);
      }
    );
  });

});

document.getElementById("bookingForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const guests = document.getElementById("guests").value;
  const message = document.getElementById("message").value;

  const whatsappMessage =
`🌿 Booking Request — 

Name: ${name}
Email: ${email}
Phone: ${phone}

Check-in: ${checkin}
Check-out: ${checkout}
Guests: ${guests}

Message: ${message}`;

  const phoneNumber = "918525981373"; // ← CHANGE

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");

});