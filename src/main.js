const navItems = document.querySelectorAll("li.nav-item");

document.addEventListener("DOMContentLoaded", () => {
  navItems.forEach((navItem) => {
    let letters = navItem.textContent.toUpperCase().split("");
    navItem.textContent = "";

    letters.forEach((letter) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.setAttribute("data-char", letter);
      navItem.appendChild(span);
    });
  });
});
