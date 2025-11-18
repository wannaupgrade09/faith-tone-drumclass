document.getElementById("regForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
  };

  const res = await fetch("/.netlify/functions/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

  const msg = document.getElementById("msg");
  if (res.ok) {
    msg.textContent = "Registration successful! Check your email.";
  } else {
    msg.textContent = "Error sending registration. Try again.";
  }
});
