document.addEventListener("DOMContentLoaded", function () {

  console.log("JS loaded");

  const toggleBtn = document.getElementById("menu-toggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      document.getElementById("mobile-menu").classList.toggle("hidden");
    });
  }

});

function showPage(pageId) {

  console.log("Navigating to:", pageId);

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active-page");
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.classList.add("active-page");
  }

  document.getElementById("mobile-menu").classList.add("hidden");

  window.scrollTo(0, 0);
}