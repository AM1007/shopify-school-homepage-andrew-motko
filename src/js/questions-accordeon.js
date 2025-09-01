function initQuestionsIcons() {
  const accordionItems = document.querySelectorAll('.questions__accordion-item');
  
  accordionItems.forEach(item => {
    const icon = item.querySelector('.questions__accordion-icon use');
    
    item.addEventListener('toggle', () => {
      if (item.open) {
        icon.setAttribute('href', '/svg/sprite.svg#icon-minus-circle');
      } else {
        icon.setAttribute('href', '/svg/sprite.svg#icon-plus-circle');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initQuestionsIcons);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuestionsIcons);
} else {
  initQuestionsIcons();
}

export { initQuestionsIcons };