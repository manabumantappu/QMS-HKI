/* ================== CEK MOBILE ================== */
function isMobile() {
  return window.innerWidth <= 768;
}

/* ================== OPEN PDF (BILINGUAL SAFE) ================== */
function openPDFLang(el) {
  const viewer = document.getElementById("pdfViewer");
  const newTabBtn = document.getElementById("openNewTab");
  const mobileBtn = document.getElementById("mobileOpenBtn");

  const lang = localStorage.getItem("qms_lang") || "id";

  // pilih path sesuai bahasa
  let path =
    lang === "jp" && el.dataset.pdfJp
      ? el.dataset.pdfJp
      : el.dataset.pdfId;

  // ===== highlight aktif =====
  document.querySelectorAll(".qms-section a").forEach(a =>
    a.classList.remove("active")
  );
  el.classList.add("active");

  // ===== set tombol =====
  if (newTabBtn) newTabBtn.href = path;
  if (mobileBtn) mobileBtn.href = path;

  // ===== buka PDF =====
  if (isMobile()) {
    window.open(path, "_blank");
  } else {
    viewer.src = path;
  }
}

/* ================== SEARCH ================== */
document.getElementById("searchInput")?.addEventListener("keyup", function () {
  const keyword = this.value.toLowerCase();
  document.querySelectorAll(".qms-section a").forEach(link => {
    link.style.display = link.textContent.toLowerCase().includes(keyword)
      ? "block"
      : "none";
  });
});

/* ================== LANGUAGE SWITCH ================== */
function setLang(lang) {
  document.querySelectorAll("[data-id]").forEach(el => {
    el.innerText = el.dataset[lang];
  });
  localStorage.setItem("qms_lang", lang);
}

// load bahasa terakhir
setLang(localStorage.getItem("qms_lang") || "id");
