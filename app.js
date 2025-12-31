/* ================== CEK MOBILE ================== */
function isMobile() {
  return window.innerWidth <= 768;
}

/* ================== OPEN PDF (BILINGUAL SAFE) ================== */
function openPDFLang(el) {
  const viewer = document.getElementById("pdfViewer");
  const newTabBtn = document.getElementById("openNewTab");

  const lang = localStorage.getItem("qms_lang") || "id";

  let path =
    lang === "jp"
      ? el.dataset.pdfJp
      : el.dataset.pdfId;

  // 🔁 FALLBACK: jika file JP belum ada
  if (!path || path.includes("/jp/")) {
    path = el.dataset.pdfId;
  }

  // highlight aktif
  document.querySelectorAll(".qms-section a").forEach(a =>
    a.classList.remove("active")
  );
  el.classList.add("active");

  if (newTabBtn) newTabBtn.href = path;

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

setLang(localStorage.getItem("qms_lang") || "id");
