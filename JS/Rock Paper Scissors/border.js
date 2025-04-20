let playBtn = document.querySelectorAll(".playBtn");

playBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    playBtn.forEach((btn) => {
      btn.classList.remove("clicked");
    });

    btn.classList.add("clicked");
  });
});
