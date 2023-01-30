let items = document.getElementsByClassName("navigation");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", function (e) {
    this.style.color = "#0f0a0a";
    this.style.backgroundColor = "#ffffeb";
    this.style.fontSize = "18px";
  });
  items[i].addEventListener("mouseleave", function (e) {
    this.style.color = "#ffffeb";
    this.style.backgroundColor = "transparent";
    this.style.fontSize = "17px";
  });
}
