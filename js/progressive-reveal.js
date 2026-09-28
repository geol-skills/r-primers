var key = 'currentSection' + window.location.pathname;
var currentSection = localStorage.getItem(key) ? parseInt(localStorage.getItem(key)) : -1;
var sections = Array.from(document.getElementsByClassName('level3'))
    .filter(section => !section.classList.contains('no-hide'));

// Hide all sections initially
sections.forEach(function (section) {
  section.classList.add('hidden');
});

function revealSection(sectionIndex) {
  sections[sectionIndex].classList.remove('hidden');
}

var continueButton = document.getElementById('continueButton');
var nextTopicButton = document.getElementById('nextTopicButton');

// Swap Continue for Next topic once every section is showing.
// Next topic starts hidden (see custom.scss: #nextTopicButton.disabled).
function finishPage() {
  if (nextTopicButton) {
    nextTopicButton.classList.remove('disabled');
    continueButton.style.display = 'none';
  } else {
    continueButton.disabled = true;
  }
}

if (sections.length === 0) {
    finishPage();
// Otherwise progressively reveal sections
} else {
    continueButton.addEventListener('click', function () {
        currentSection++;
        if (currentSection < sections.length) {
            revealSection(currentSection);
            localStorage.setItem(key, currentSection);
            // Jump to the id anchor for the current section
            window.location.hash = sections[currentSection].id;
            // Adjust scroll position to account for the height of the navbar
            window.scrollBy(0, 70);
        }

        if (currentSection >= sections.length - 1) {
            finishPage();
        }
    });
}

// On page load, reveal up to the current section
window.onload = function () {
  for (var i = 0; i <= currentSection && i < sections.length; i++) {
    revealSection(i);
  }
  if (sections.length > 0 && currentSection >= sections.length - 1) {
    finishPage();
  }
};

function clearProgress() {
  localStorage.removeItem(key);
  window.location.hash = '#';  // Remove the anchor from the URL
}

document.getElementById('resetButton').addEventListener('click', function () {
  clearProgress();
  // Reload the page to reflect the reset progress
  location.reload();
});
