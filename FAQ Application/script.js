const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle("active");
    const content = faq.querySelector('.faq-content'); // assuming the content is in an element with class 'faq-content'
    content.classList.toggle("active");
  });
});
