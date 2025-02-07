const dogForm = document.getElementById('dogForm');
const resultDiv = document.getElementById('result');

dogForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = document.getElementById('location').value;
  const space = document.getElementById('space').value;
  const freeTime = document.getElementById('freeTime').value;
  const personality = document.getElementById('personality').value;

  let suggestedBreed = '';

  if (location === 'cold' && personality === 'active') {
    suggestedBreed = 'Siberian Husky';
  } else if (location === 'hot' && space === 'large') {
    suggestedBreed = 'Labrador Retriever';
  } else if (freeTime === 'low') {
    suggestedBreed = 'Chihuahua';
  } else if (personality === 'calm' && space === 'small') {
    suggestedBreed = 'French Bulldog';
  } else if (personality === 'social' && freeTime === 'high') {
    suggestedBreed = 'Golden Retriever';
  } else {
    suggestedBreed = 'Mixed Breed - A great option for any environment!';
  }

  resultDiv.textContent = `We recommend: ${suggestedBreed}`;
});
