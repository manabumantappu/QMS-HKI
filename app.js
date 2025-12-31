/* ===============================
   CEK MOBILE
================================ */
function isMobile() {
  return window.innerWidth <= 768;
}

/* ===============================
   BUKA PDF
================================ */
function openPDF(path, el) {
  const viewer = document.getElementById("pdfViewer");
  const mobileBtn = document.getElementById("mobileOpenBtn");
  const newTabBtn = document.getElementById("openNewTab");

  // reset active link
  document.querySelectorAll(".qms-section a").forEach(a => {
    a.classList.remove("active");
  });

  // set active link
  if (el) el.classList.add("active");

  // set link buka tab baru
  if (newTabBtn) newTabBtn.href = path;
  if (mobileBtn) mobileBtn.href = path;

  // mobile: buka tab baru
  if (isMobile()) {
    window.open(path, "_blank");
    return;
  }

  // desktop: tampilkan di viewer
  if (viewer) {
    viewer.src = path;
  }
}

/* ===============================
   SEARCH DOKUMEN
================================ */
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const keyword = this.value.toLowerCase();

    document.querySelectorAll(".qms-section a").forEach(link => {
      link.style.display = link.textContent.toLowerCase().includes(keyword)
        ? "block"
        : "none";
    });
  });
}

/* ===============================
   LANGUAGE SWITCH (ID / JP)
================================ */
function setLang(lang) {
  document.querySelectorAll("[data-id]").forEach(el => {
    el.innerText = el.dataset[lang];
  });
  localStorage.setItem("qms_lang", lang);
}

// load bahasa terakhir
const savedLang = localStorage.getItem("qms_lang") || "id";
setLang(savedLang);
