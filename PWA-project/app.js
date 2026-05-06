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
  <div class="planet-slide container">

    <div class="row align-items-center">

      <!-- 🪐 IMAGE -->
      <div class="col-md-6 text-center">
        ${body.image}>
      </div>

      <!-- 📦 CARD -->
      <div class="col-md-6">
        <div class="card text-white p-4">

          <h2>${body.title}</h2>
          <p>${body.description}</p>

          <button class="btn btn-info mb-2"
            onclick="playAudio('${body.audio}')">
            🔊 Listen
          </button>

          <button class="btn btn-secondary"
            onclick="showFacts(${index})">
            📘 Facts
          </button>

        </div>
      </div>

    </div>

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
