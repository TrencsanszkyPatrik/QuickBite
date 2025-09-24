// Hero kártya forgatása és magasság
(function () {
  var card = document.getElementById('heroCard');
  var btn = document.getElementById('mapToggle');
  if (!card || !btn) return;

  var inner = card.querySelector('.flip-inner');
  var front = card.querySelector('.flip-front');
  var back = card.querySelector('.flip-back');
  var backBtn = null;
  var flipped = false;

  function setCardHeight() {
    var target = flipped ? back : front;
    if (!target) return;
    var h = target.offsetHeight;
    card.style.height = h + 'px';
  }

  window.addEventListener('load', function(){
    backBtn = document.getElementById('mapBack');
    if (backBtn) {
      backBtn.addEventListener('click', function(){
        flipped = false;
        card.classList.remove('is-flipped');
        btn.textContent = 'Tovább a térképre';
        setTimeout(setCardHeight, 10);
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
    } else {
      card.classList.remove('is-flipped');
      btn.textContent = 'Tovább a térképre';
    }
    setTimeout(setCardHeight, 10);
  });
})();
