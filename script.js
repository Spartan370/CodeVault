document.querySelector('.search-section button').addEventListener('click', () => {
  const searchInput = document.querySelector('.search-section input').value.trim();
  if (searchInput) {
    alert(`You searched for: ${searchInput}`); 
  } else {
    alert('Please enter a search term.');
  }
});

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('h3');
  question.addEventListener('click', () => {
    const answer = item.querySelector('p');
    const isVisible = answer.style.display === 'block';
    answer.style.display = isVisible ? 'none' : 'block';
  });
});
