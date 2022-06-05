(function(){
    const slides = [
                    `<div class="what__feedback-content">
                        <img class="what__customer-photo" src="img/what-feedback-judy.jpg" alt="customer photo">
                        <p class="what__feedback-content-name">Judy Peterson</p>
                        <p class="what__feedback-content-city-data">New York</p>
                        <p class="what__feedback-content-text">I'm very pleased with our new sofa! It fits perfectly
                            into the interior. The assemblage of the furniture was super fast!</p>
                        <p class="what__feedback-content-city-data">October 28, 2018</p>
                        </div>`,
                    `<div class="what__feedback-content">
                        <img class="what__customer-photo" src="img/what-feedback-kyle.jpg" alt="customer photo">
                        <p class="what__feedback-content-name">Kyle Hudson</p>
                        <p class="what__feedback-content-city-data">Houston</p>
                        <p class="what__feedback-content-text">Thank you for helping me choose new armchairs in the
                            living room. They look great and fit perfectly into my interior.</p>
                        <p class="what__feedback-content-city-data">June 13, 2019</p>
                        </div>`,
                    `<div class="what__feedback-content">
                        <img class="what__customer-photo" src="img/what-feedback-hanna.jpg" alt="customer photo">
                        <p class="what__feedback-content-name">Hanna Levy</p>
                        <p class="what__feedback-content-city-data">Boston</p>
                        <p class="what__feedback-content-text">Next-day delivery surprised me a lot! I thought I would
                            have to wait for weeks! Thank you for the quick processing of my order!</p>
                        <p class="what__feedback-content-city-data">October 04, 2019</p>
                        </div>`,
                    `<div class="what__feedback-content">
                        <img class="what__customer-photo" src="img/what-feedback-jim.jpg" alt="customer photo">
                        <p class="what__feedback-content-name">Jim Mockeen</p>
                        <p class="what__feedback-content-city-data">Chicago</p>
                        <p class="what__feedback-content-text">I not only found the perfect sofa at a reasonable price
                            but also stylish lamps which were exactly what I wanted. Thank you, SOFA!</p>
                        <p class="what__feedback-content-city-data">January 18, 2020</p>
                        </div>`,
                    `<div class="what__feedback-content">
                        <img class="what__customer-photo" src="img/what-feedback-karen.jpg" alt="customer photo">
                        <p class="what__feedback-content-name">Karen Morning</p>
                        <p class="what__feedback-content-city-data">Washington</p>
                        <p class="what__feedback-content-text">My order arrived really quickly and I was amazed by the
                            quality - PERFECT. I would and have recommended SOFA to others.</p>
                        <p class="what__feedback-content-city-data">February 03, 2020</p>
                        </div>`
    ];
  
    let currentSlide = 0;
  
    function renderCarousel() {
      const slideContainer = document.querySelector(".what__slide");
      slideContainer.innerHTML = slides[currentSlide];
      if (window.innerWidth >= 600) {
        const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlide];
        if (window.innerWidth >= 900) {
          const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
          slideContainer.innerHTML += slides[thirdSlide];
        }
      }
    }
  
    function nextSlide() {
      currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      renderCarousel();
    }
    function prevSlide() {
      currentSlide = currentSlide - 1 <= 0  ? slides.length - 1  : currentSlide - 1;
      renderCarousel();
    }
  
    setInterval(nextSlide, 5000);

    renderCarousel();

    const btnForward = document.querySelector(".what__forwardbtn");
    btnForward.addEventListener('click', nextSlide);

    const btnBack = document.querySelector(".what__backbtn");
    btnBack.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderCarousel);
  }) ();