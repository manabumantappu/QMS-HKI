function isMobile() {
  return window.innerWidth <= 768;
}

function openPDF(path) {
  const viewer = document.getElementById("pdfViewer");
  const mobileBtn = document.getElementById("mobileOpenBtn");
   const newTabBtn = document.getElementById("openNewTab");
  viewer.src = path;
  newTabBtn.href = path;
  }

  if (isMobile()) {
    // HP: buka tab baru
    window.open(path, "_blank");
  } else {
    // PC / Tablet: embed
    viewer.src = path;
    mobileBtn.href = path;
  }
}

/* SEARCH */
document.getElementById("searchInput").addEventListener("keyup", function () {
  let keyword = this.value.toLowerCase();
  document.querySelectorAll(".qms-section a").forEach(link => {
    link.style.display = link.textContent.toLowerCase().includes(keyword)
      ? "block"
      : "none";
  });
});
