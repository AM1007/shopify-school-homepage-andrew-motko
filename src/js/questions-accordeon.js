function forceIconUpdate(useElement, newHref) {
  useElement.removeAttribute('href');
  useElement.setAttribute('href', newHref);
  
  const parentSvg = useElement.closest('svg');
  if (parentSvg) {
    parentSvg.style.display = 'none';
    parentSvg.offsetHeight;
    parentSvg.style.display = '';
  }
}

function initQuestionsIcons() {
  const accordionItems = document.querySelectorAll('.questions__accordion-item');
  
  if (accordionItems.length === 0) {
    return;
  }
  
  accordionItems.forEach((item) => {
    const icon = item.querySelector('.questions__accordion-icon use');
    
    if (!icon) {
      return;
    }
    
    const currentHref = icon.getAttribute('href');
    const baseSpritePath = currentHref.split('#')[0];
    
    item.addEventListener('toggle', () => {
      if (item.open) {
        const newHref = `${baseSpritePath}#icon-minus-circle`;
        forceIconUpdate(icon, newHref);
      } else {
        const newHref = `${baseSpritePath}#icon-plus-circle`;
        forceIconUpdate(icon, newHref);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initQuestionsIcons);

if (document.readyState !== 'loading') {
  initQuestionsIcons();
}

export { initQuestionsIcons };


// ===================================
// function initQuestionsIcons() {
//   const accordionItems = document.querySelectorAll('.questions__accordion-item');
  
//   accordionItems.forEach(item => {
//     const icon = item.querySelector('.questions__accordion-icon use');
    
//     item.addEventListener('toggle', () => {
//       if (item.open) {
//         icon.setAttribute('href', '/svg/sprite.svg#icon-minus-circle');
//       } else {
//         icon.setAttribute('href', '/svg/sprite.svg#icon-plus-circle');
//       }
//     });
//   });
// }

// document.addEventListener('DOMContentLoaded', initQuestionsIcons);

// if (document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded', initQuestionsIcons);
// } else {
//   initQuestionsIcons();
// }

// export { initQuestionsIcons };