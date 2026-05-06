fetch("solar.json")
  .then(response => response.json())
  .then(data => {

    const carousel = document.getElementById("carousel-content");
    const menu = document.getElementById("menu");

    data.celestialBodies.forEach((body, index) => {

      // ✅ CREATE SLIDE
      const slide = document.createElement("div");
      slide.className = "carousel-item" + (index === 0 ? " active" : "");

      slide.innerHTML = `
        <div class="planet-slide text-center">

          <img src="${body.image}" class="planet-img" alt="${body.title}">

          <h2>${body.title}</h2>
          <p>${body.description}</p>

          <button class="btn btn-info"
            onclick="playAudio('${body.audio}')">
            🔊 Listen
          </button>

          <button class="btn btn-secondary mt-2"
            onclick="showFacts(${index})">
            📘 Facts
          </button>

        </div>
      `;

      carousel.appendChild(slide);

      // ✅ CREATE MENU BUTTON
      const btn = document.createElement("button");
      btn.className = "btn btn-outline-light";
      btn.textContent = body.title;

      btn.onclick = () => {
        const carouselInstance =
          bootstrap.Carousel.getOrCreateInstance(
            document.querySelector("#planetCarousel")
          );
        carouselInstance.to(index);
      };

      menu.appendChild(btn);
    });

    // Save for facts
    window.planets = data.celestialBodies;
  });
