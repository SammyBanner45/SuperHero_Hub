const filterBtns = document.querySelectorAll(".filter-btn");
const movies = document.querySelectorAll(".movie-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    movies.forEach(movie => {
      if (filter === "all" || movie.classList.contains(filter)) {
        movie.style.display = "block";
      } else {
        movie.style.display = "none";
      }
    });
  });
});
