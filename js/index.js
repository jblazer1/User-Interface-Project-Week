//=========================== Navigation Modal ============================================
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");

// Open
const openNav = () => {
  document.getElementById("myNav").style.height = "100%";
  openMenu.classList.toggle("close-menu");
  closeMenu.classList.toggle("close-menu");
};

// Close
const closeNav = () => {
  document.getElementById("myNav").style.height = "0%";
  openMenu.classList.toggle("close-menu");
  closeMenu.classList.toggle("close-menu");
};
