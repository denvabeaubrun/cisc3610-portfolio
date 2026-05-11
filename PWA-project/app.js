fetch('data.json')
  .then(response => response.json())
  .then(data => buildMenu(data.celestialBodies))
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
      document.querySelectorAll('.planet-menu button').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      travelTo(body);
    };
    menu.appendChild(button);
  });
}


function travelTo(body) {
  const img = document.getElementById('planetImage');
  
  // Always start by showing the info view
  showInfoView();
  
  // Zoom out + fade out current planet
  img.classList.remove('show');
  
  setTimeout(() => {
    // Update image
    img.src = body.image;
    img.alt = body.title;
    const cssClass = body.title.toLowerCase().replace(' ', '-');
    img.className = 'planet-bg ' + cssClass;
    
    // Update info view
    document.getElementById('planetTitle').textContent = body.title;
    document.getElementById('planetType').textContent = body.type;
    document.getElementById('planetDesc').textContent = body.description;
    
    // Show "Show Facts" button
    const factsBtn = document.getElementById('factsBtn');
    factsBtn.style.display = 'inline-block';
    factsBtn.onclick = () => showFactsView(body);
    
    // Trigger zoom-in
    setTimeout(() => img.classList.add('show'), 50);
    
    // 🔊 PLAY THE AUDIO AUTOMATICALLY
    playAudio(body.audio);
  }, 600);
}


function showInfoView() {
  document.getElementById('infoView').classList.remove('hidden');
  document.getElementById('factsView').classList.add('hidden');
}


function showFactsView(body) {
  // Build facts list
  const factsList = document.getElementById('factsList');
  factsList.innerHTML = '';
  body.facts.forEach(fact => {
    const li = document.createElement('li');
    li.textContent = fact;
    factsList.appendChild(li);
  });
  
  // Hook up the buttons
  document.getElementById('listenBtn').onclick = () => playAudio(body.audio);
  document.getElementById('backBtn').onclick = () => showInfoView();
  
  // Switch to facts view
  document.getElementById('infoView').classList.add('hidden');
  document.getElementById('factsView').classList.remove('hidden');
}

function playWelcomeOnce() {
  playAudio('audio/welcome.mp3');
  document.removeEventListener('click', playWelcomeOnce);
  document.removeEventListener('keydown', playWelcomeOnce);
  document.removeEventListener('scroll', playWelcomeOnce);
}
document.addEventListener('click', playWelcomeOnce);
document.addEventListener('keydown', playWelcomeOnce);
document.addEventListener('scroll', playWelcomeOnce);

let currentAudio = null;  // Track the currently playing audio

function playAudio(audioFile) {
  // Stop any audio that's currently playing
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  
  // Start the new audio
  currentAudio = new Audio(audioFile);
  currentAudio.play().catch(error => {
    console.log('Audio could not play:', error.message);
    // Don't show alert — autoplay being blocked is normal on first load
  });
}
