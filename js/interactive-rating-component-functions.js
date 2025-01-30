document.getElementById("submit-button").addEventListener("click", () => {
    let selectedRating = document.getElementsByClassName(
      "selected-rating-number"
    );
    if (selectedRating.length > 0) {
      document.getElementById("rating-container").style.display = "none";
      let thankYouContainer = document.getElementById(
        "thank-you-container"
      );
      thankYouContainer.classList.add("show-thank-you-container");
      thankYouContainer.classList.remove("thank-you-container");
      document.getElementById("selected-rating").textContent =
        selectedRating[0].textContent;
    }
  });

  let ratingNumbers = document.getElementsByClassName("rating-number");
  Array.from(ratingNumbers).forEach((number) => {
    number.addEventListener("click", (e) => {
      let selectedRating = document.getElementsByClassName(
        "selected-rating-number"
      );
      if (selectedRating.length > 0) {
        selectedRating[0].classList.add("rating-number");
        selectedRating[0].classList.add("rating-number-hover");
        selectedRating[0].classList.remove("selected-rating-number");
      }
      e.target.classList.add("selected-rating-number");
      e.target.classList.remove("rating-number");
      e.target.classList.remove("rating-number-hover");
    });
  });