const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    siteNav.classList.toggle("is-open", !isOpen);
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const enquiryForm = document.querySelector("#enquiry-form");
if (enquiryForm) {
  const params = new URLSearchParams(window.location.search);
  const requestedService = params.get("service");
  const serviceSelect = enquiryForm.querySelector("#service");
  const emailInput = enquiryForm.querySelector("#email");
  const phoneInput = enquiryForm.querySelector("#phone");
  const status = document.querySelector("#form-status");
  if (requestedService && serviceSelect) {
    const matchingOption = Array.from(serviceSelect.options).find(
      (option) => option.value === requestedService || option.textContent === requestedService
    );
    if (matchingOption) serviceSelect.value = matchingOption.value || matchingOption.textContent;
  }

  [emailInput, phoneInput].forEach((input) => {
    if (input) input.addEventListener("input", () => emailInput.setCustomValidity(""));
  });

  enquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!emailInput.value.trim() && !phoneInput.value.trim()) {
      emailInput.setCustomValidity("Please provide an email address or a phone number.");
      enquiryForm.reportValidity();
      return;
    }
    emailInput.setCustomValidity("");
    if (!enquiryForm.reportValidity()) return;

    const formData = new FormData(enquiryForm);
    const enquiry = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone") || "Not provided"}`,
      `Service: ${formData.get("service")}`,
      "",
      "Message:",
      formData.get("message"),
    ].join("\n");
    try {
      await navigator.clipboard.writeText(enquiry);
      status.textContent = "Your enquiry has been copied. You can paste it into a message to Style Craft.";
    } catch (error) {
      const temporaryInput = document.createElement("textarea");
      temporaryInput.value = enquiry;
      temporaryInput.setAttribute("readonly", "");
      temporaryInput.style.position = "fixed";
      temporaryInput.style.opacity = "0";
      document.body.append(temporaryInput);
      temporaryInput.select();
      const copied = document.execCommand("copy");
      temporaryInput.remove();
      if (!copied) {
        status.textContent = "We couldn’t copy the enquiry automatically. Please select and copy your details manually.";
        return;
      }
      status.textContent = "Your enquiry has been copied. You can paste it into a message to Style Craft.";
    }
  });
}
