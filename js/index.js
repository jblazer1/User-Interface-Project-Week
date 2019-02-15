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
//======================= End Navigation Modal ===================

class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.banana = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.banana = new TabItem(this.banana);
    this.element.addEventListener("click", () => {
      this.select();
    });
  }

  select() {
    const links = document.querySelectorAll(".tabs-link");
    // console.log(links);
    links.forEach(link => {
      link.classList.remove("tabs-link-selected");
    });
    this.element.classList.add("tabs-link-selected");
    this.banana.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".tabs-item");
    // console.log(items);
    items.forEach(item => {
      item.classList.remove("tabs-item-selected");
    });
    // console.log(items);
    this.element.classList.add("tabs-item-selected");
  }
}

links = document
  .querySelectorAll(".tabs-link")
  .forEach(link => new TabLink(link));
