var doc = $(document);
const root = document.querySelector(":root");
function scrolled() {
  if (doc.scrollTop() > 375) {
    root.style.setProperty("--pseudo-backgroundcolor", '#2E3434');
    root.style.setProperty("--pseudo-color", '#2E3434');
  } else {
    root.style.setProperty("--pseudo-backgroundcolor", '#fffaf1');
    root.style.setProperty("--pseudo-color", '#fffaf1');
  }
}
$(window).on({ scroll: scrolled });