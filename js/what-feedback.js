(async function () {
  function renderFeedbacks(feedbacks) {
    const slides = [];
    for (const feedback of feedbacks) {
      slides.push(`<div class="what__feedback-content">
        <img class="what__customer-photo" src="${feedback.imgUrl}" alt="customer photo">
        <p class="what__feedback-content-name">${feedback.name}</p>
        <p class="what__feedback-content-city-date">${feedback.city}</p>
        <p class="what__feedback-content-text">${feedback.message}</p>
        <p class="what__feedback-content-city-date">${feedback.date}</p>
       </div>`);
    }

    let currentSlide = 0;

    function renderCarousel() {
      const slideContainer = document.querySelector(".what__slide");
      slideContainer.innerHTML = slides[currentSlide];
      if (window.innerWidth >= 600) {
        const secondSlide =
          currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlide];
        if (window.innerWidth >= 900) {
          const thirdSlide =
            secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
          slideContainer.innerHTML += slides[thirdSlide];
        }
      }
    }

    function nextSlide() {
      currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      renderCarousel();
    }
    function prevSlide() {
      currentSlide =
        currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
      renderCarousel();
    }

    setInterval(nextSlide, 5000);

    renderCarousel();

    const btnForward = document.querySelector(".what__forwardbtn");
    btnForward.addEventListener("click", nextSlide);

    const btnBack = document.querySelector(".what__backbtn");
    btnBack.addEventListener("click", prevSlide);

    window.addEventListener("resize", renderCarousel);
  }

  const response = await fetch("feedbacks.json");
  const feedbacks = await response.json();

  renderFeedbacks(feedbacks);
})();
