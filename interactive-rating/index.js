function resizeScreen(event) {
  const minHeightForLandscapeView = 1024;
  var width = window.innerWidth,
      height = window.innerHeight,
      max = Math.max(width, height);
  if (max < minHeightForLandscapeView) {
      if (width > height) {
          document.documentElement.classList.add('forced');
      } else {
          document.documentElement.classList.remove('forced');
      }
  }
}

window.addEventListener('resize', resizeScreen);
window.addEventListener('load', function() {
  resizeScreen();
});

const modalRating = document.querySelector('.js-modal-rating');
const modalThankyou = document.querySelector('.js-modal-thankyou');

function submitRating(event) {
  event.preventDefault();
  const form = event.target;
  if (form.rating && form.rating.value !== '') {
    const ratingResult = document.querySelector('.js-rating-result');
    ratingResult && (ratingResult.textContent = form.rating.value);
    modalRating && modalRating.classList.remove('in');
    modalThankyou && modalThankyou.classList.add('in');
  } else {
    return false;
  }
}