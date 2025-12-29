/* CEK MOBILE */
function isMobile() {
  return window.innerWidth <= 768;
}

/* BUKA PDF */
function openPDF(path) {
  const viewer = document.getElementById("pdfViewer");
  const mobileBtn = document.getElementById("mobileOpenBtn");
  const newTabBtn = document.getElementById("openNewTab");

  // set link untuk buka tab baru
  if (newTabBtn) {
    newTabBtn.href = path;
  }

  if (isMobile()) {
    // HP: langsung buka tab baru
    window.open(path, "_blank");
  } else {
    // Desktop / Tablet: tampilkan di viewer
    viewer.src = path;

    // tombol mobile (kalau ada)
    if (mobileBtn) {
      mobileBtn.href = path;
    }
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
