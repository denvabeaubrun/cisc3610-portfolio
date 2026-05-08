// Load JSON and build the menu
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    buildMenu(data.celestialBodies);
  })
  .catch(error => {
    console.error('Error loading data:', error);
    document.getElementById('menu').innerHTML = '<p>Could not load data 😢</p>';
  });


function buildMenu(bodies) {
  const menu = document.getElementById('menu');
  menu.innerHTML = '';
  
  bodies.forEach(body => {
    const button = document.createElement('button');
    button.textContent = body.title;
    button.onclick = () => {
      // Mark this button active
      document.querySelectorAll('.planet-menu button').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      // Travel to this planet
      travelTo(body);
    };
    menu.appendChild(button);
  });
}


function travelTo(body) {
  const img = document.getElementById('planetImage');
  const title = document.getElementById('planetTitle');
  const type = document.getElementById('planetType');
  const desc = document.getElementById('planetDesc');
  const listenBtn = document.getElementById('listenBtn');
  const factsBtn = document.getElementById('factsBtn');
  const factsList = document.getElementById('factsList');
  
  // Step 1: Zoom out + fade out current planet
  img.classList.remove('show');
  
  // Step 2: After fade out, swap content and zoom in
  setTimeout(() => {
    // Update image
    img.src = body.image;
    img.alt = body.title;
    
    // Set the planet's color glow class
    const cssClass = body.title.toLowerCase().replace(' ', '-');
    img.className = 'planet-bg ' + cssClass;
    
    // Update text
    title.textContent = body.title;
    type.textContent = body.type;
    desc.textContent = body.description;
    
    // Update buttons
    listenBtn.style.display = 'inline-block';
    factsBtn.style.display = 'inline-block';
    listenBtn.onclick = () => playAudio(body.audio);
    factsBtn.onclick = () => showFacts(body.facts);
    
    // Build facts list
    factsList.innerHTML = '';
    body.facts.forEach(fact => {
      const li = document.createElement('li');
      li.textContent = fact;
      factsList.appendChild(li);
    });
    
    // Step 3: Trigger the zoom-in animation
    setTimeout(() => img.classList.add('show'), 50);
  }, 600);
}


function playAudio(audioFile) {
  const audio = new Audio(audioFile);
  audio.play().catch(() => {
    alert('Audio file not found yet!');
  });
}


function showFacts(facts) {
  document.getElementById('factsPanel').classList.add('show');
}


// Close facts panel
document.getElementById('closeFacts').onclick = () => {
  document.getElementById('factsPanel').classList.remove('show');
};
