// Мінімальний JavaScript тільки для переключення SVG іконок
function initQuestionsIcons() {
  const accordionItems = document.querySelectorAll('.questions__accordion-item');
  
  accordionItems.forEach(item => {
    const icon = item.querySelector('.questions__accordion-icon use');
    
    // Слухаємо нативну подію toggle від details елемента
    item.addEventListener('toggle', () => {
      if (item.open) {
        // Елемент відкрився - показуємо minus іконку
        icon.setAttribute('href', './svg/sprite.svg#icon-minus-circle');
      } else {
        // Елемент закрився - показуємо plus іконку
        icon.setAttribute('href', './svg/sprite.svg#icon-plus-circle');
      }
    });
  });
}

// Ініціалізація
document.addEventListener('DOMContentLoaded', initQuestionsIcons);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuestionsIcons);
} else {
  initQuestionsIcons();
}

export { initQuestionsIcons };