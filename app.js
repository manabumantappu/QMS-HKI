function openPDF(path) {
  document.getElementById("pdfViewer").src = path;
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
