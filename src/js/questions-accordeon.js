function initQuestionsIcons() {
  console.log('=== Questions Accordion Initialization ===');
  console.log('DOM ready state:', document.readyState);
  console.log('Current URL:', window.location.href);
  
  const accordionItems = document.querySelectorAll('.questions__accordion-item');
  console.log('Found accordion items:', accordionItems.length);
  
  if (accordionItems.length === 0) {
    console.error('No accordion items found! Check HTML structure.');
    return;
  }
  
  accordionItems.forEach((item, index) => {
    console.log(`Processing item ${index + 1}`);
    
    const icon = item.querySelector('.questions__accordion-icon use');
    console.log(`Item ${index + 1} - USE element found:`, !!icon);
    
    if (!icon) {
      console.error(`Item ${index + 1} - No USE element found!`);
      return;
    }
    
    const currentHref = icon.getAttribute('href');
    console.log(`Item ${index + 1} - Current href:`, currentHref);
    
    const baseSpritePath = currentHref.split('#')[0];
    console.log(`Item ${index + 1} - Base sprite path:`, baseSpritePath);
    
    item.addEventListener('toggle', () => {
      console.log(`Toggle fired for item ${index + 1}, open state:`, item.open);
      
      try {
        if (item.open) {
          const newHref = `${baseSpritePath}#icon-minus-circle`;
          icon.setAttribute('href', newHref);
          console.log(`Item ${index + 1} - Set MINUS icon:`, newHref);
        } else {
          const newHref = `${baseSpritePath}#icon-plus-circle`;
          icon.setAttribute('href', newHref);
          console.log(`Item ${index + 1} - Set PLUS icon:`, newHref);
        }
        
        setTimeout(() => {
          const newHref = icon.getAttribute('href');
          console.log(`Item ${index + 1} - Verified href:`, newHref);
        }, 50);
        
      } catch (error) {
        console.error(`Error changing icon for item ${index + 1}:`, error);
      }
    });
    
    console.log(`Item ${index + 1} - Event listener attached`);
  });
  
  console.log('=== Initialization complete ===');
}

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