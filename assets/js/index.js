// Hero kártya forgatása, Leaflet térkép + vissza gomb
(function () {
  var card = document.getElementById('heroCard');
  var btn = document.getElementById('mapToggle');
  if (!card || !btn) return;

  var front = card.querySelector('.flip-front');
  var back = card.querySelector('.flip-back');
  var flipped = false;
  var mapInitialized = false; // Leaflet inicializálás jelző

  function setCardHeight() {
      var target = flipped ? back : front;
      if (!target) return;
      var h = target.offsetHeight;
      card.style.height = h + 'px';
  }

  function initMap() {
      if (mapInitialized) return;
      mapInitialized = true;

      const centerCoords = [47.4979, 19.0402]; // Példa koordináták
      window.leafletMap = L.map('map').setView(centerCoords, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      }).addTo(window.leafletMap);

      L.marker(centerCoords).addTo(window.leafletMap)
          .bindPopup('QuickBite Demo Étterem')
          .openPopup();
  }

  window.addEventListener('load', function(){
      // Vissza gomb
      var backBtn = document.getElementById('mapBack');
      if (backBtn) {
          backBtn.addEventListener('click', function(){
              flipped = false;
              card.classList.remove('is-flipped');
              btn.textContent = 'Tovább a térképre';
              setTimeout(setCardHeight, 10);

              // Leaflet térkép méret frissítése
              if (window.leafletMap) {
                  setTimeout(function(){
                      window.leafletMap.invalidateSize();
                  }, 200);
              }
          });
      }
      setCardHeight();
  });

  window.addEventListener('resize', setCardHeight);

  btn.addEventListener('click', function () {
      flipped = !flipped;
      if (flipped) {
          card.classList.add('is-flipped');
          btn.textContent = 'Vissza';
          initMap(); // Leaflet térkép inicializálása
          setTimeout(function() {
              if (window.leafletMap) window.leafletMap.invalidateSize();
          }, 200);
      } else {
          card.classList.remove('is-flipped');
          btn.textContent = 'Tovább a térképre';
      }
      setTimeout(setCardHeight, 10);
  });
})();
