document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);

  fetch("https://sheetdb.io/api/v1/https://sheetdb.io/api/v1/d1s0j6amg7xgd", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("response").textContent = "Form submitted successfully!";
    form.reset();
  })
  .catch(err => {
    document.getElementById("response").textContent = "Submission failed.";
  });
});
