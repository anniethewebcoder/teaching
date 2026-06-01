document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fields = ["firstName", "lastName", "email", "subject", "message"];
  let valid = true;

  fields.forEach((id) => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      el.style.borderBottomColor = "#c0472a";
      valid = false;
    } else {
      el.style.borderBottomColor = "";
    }
  });

  if (!valid) return;

  // Hide form fields, show success
  [...this.querySelectorAll(".row, .field, .submit-row, .form-header")].forEach(
    (el) => (el.style.display = "none"),
  );
  document.getElementById("successMsg").classList.add("show");
});
