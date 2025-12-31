/* CEK MOBILE */
function isMobile() {
  return window.innerWidth <= 768;
}

/* BUKA PDF */
function openPDF(path, el) {
  const viewer = document.getElementById("pdfViewer");
  const mobileBtn = document.getElementById("mobileOpenBtn");
  const newTabBtn = document.getElementById("openNewTab");

  // ===== RESET ACTIVE SEMUA LINK =====
  document.querySelectorAll(".qms-section a").forEach(a => {
    a.classList.remove("active");
  });

  // ===== SET ACTIVE LINK YANG DIKLIK =====
  if (el) {
    el.classList.add("active");
  }

  // set link buka tab baru
  if (newTabBtn) newTabBtn.href = path;

  if (isMobile()) {
    window.open(path, "_blank");
  } else {
    viewer.src = path;
    if (mobileBtn) mobileBtn.href = path;
  }
}


/* SEARCH DOKUMEN */
document.getElementById("searchInput").addEventListener("keyup", function () {
  const keyword = this.value.toLowerCase();

  document.querySelectorAll(".qms-section a").forEach(link => {
    link.style.display = link.textContent.toLowerCase().includes(keyword)
      ? "block"
      : "none";
  });
});

// load bahasa terakhir
const savedLang = localStorage.getItem("qms_lang") || "id";
setLang(savedLang);
/* ===== LANGUAGE SWITCH (ID / JP) ===== */
function setLang(lang) {
  document.querySelectorAll("[data-id]").forEach(el => {
    el.innerText = el.dataset[lang];
  });
  localStorage.setItem("qms_lang", lang);
}

const savedLang = localStorage.getItem("qms_lang") || "id";
setLang(savedLang);

