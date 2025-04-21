let calcBtn = document.querySelector(".resultAreaBox");
calcBtn.addEventListener("click", () => {
  let totalClasses = Number(document.querySelector("#totalClasses").value);
  let attendedClasses = Number(
    document.querySelector("#attendedClasses").value
  );
  let percentage = document.querySelector("#minPercentageReq").value
    ? Number(document.querySelector("#minPercentageReq").value) / 100
    : 0.75;
  if (
    attendedClasses > totalClasses ||
    totalClasses < 1 ||
    attendedClasses < 0 ||
    percentage < 0.1 ||
    percentage > 1
  ) {
    document.querySelector(
      ".resultClasses"
    ).innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Enter valid values <i class='fa-solid fa-rotate-right'></i> `;
    document.querySelector(".resultClasses").classList.add("error");
  } else {
    document.querySelector(".resultClasses").classList.remove("error");

    let result = Math.trunc(attendedClasses / percentage - totalClasses);
    document.querySelector(
      ".resultClasses"
    ).innerHTML = `You can leave ${result} classes <i class='fa-solid fa-rotate-right'></i>`;
  }
});
