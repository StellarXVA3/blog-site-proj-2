const navItems = document.querySelectorAll("li.nav-item>a");

document.addEventListener("DOMContentLoaded", () => {
  navItems.forEach((navItem) => {
    let letters = navItem.textContent.toUpperCase().split("");
    navItem.textContent = "";

    let i = 0;
    letters.forEach((letter) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.setAttribute("data-char", letter);
      span.style.setProperty("--transiton-delay-navItem-ltr", `${i * 69}ms`);
      navItem.appendChild(span);
      i++;
    });
  });
});
