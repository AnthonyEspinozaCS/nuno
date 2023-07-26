bars = document.querySelectorAll(".bar");
drops = document.querySelectorAll(".drop");

console.log(bars, drops);

for (let i = 0; i < bars.length; i++) {
  bars[i].addEventListener("click", () => {
    const arrow = document.getElementById(`arrow-${i + 1}`);
    console.log(arrow);
    const clicked = arrow.getAttribute("data-clicked");
    const drop = drops[i];

    if (clicked === "false") {
      arrow.setAttribute("data-clicked", true);
      drop.setAttribute("data-clicked", true);
    } else {
      arrow.setAttribute("data-clicked", false);
      drop.setAttribute("data-clicked", false);
    }
  });
}
