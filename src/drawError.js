const drawError = (city) => {
  const results = document.querySelector(".results-container");
  results.innerHTML = `<h3 class="error">There is no such city as ${city}. Please try again.</h3>`;
};

export { drawError };
