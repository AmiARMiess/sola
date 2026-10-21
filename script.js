const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const newsletterForm = document.querySelector(".newsletter-form");
const formMessage = document.querySelector(".form-message");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
  }
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!newsletterForm.reportValidity()) return;

  formMessage.textContent = "You’re on the list. Keep an eye out for a little note from us.";
  formMessage.classList.add("is-success");
  newsletterForm.reset();
});
