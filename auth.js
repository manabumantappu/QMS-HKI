function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // USER DEMO (BISA DIUBAH)
  if (user === "operator" && pass === "123") {
    setRole("operator");
  } else if (user === "qc" && pass === "123") {
    setRole("qc");
  } else if (user === "auditor" && pass === "123") {
    setRole("auditor");
  } else {
    alert("Username / Password salah");
  }
}

function setRole(role) {
  localStorage.setItem("qms_role", role);
  window.location.href = "dokumen.html";
}
const role = localStorage.getItem("qms_role");

if (role === "operator") {
  document.querySelectorAll(".qc-only").forEach(e => e.style.display = "none");
}
