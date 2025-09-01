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
    
    item.addEventListener('toggle', () => {
      console.log(`Toggle fired for item ${index + 1}, open state:`, item.open);
      
      try {
        if (item.open) {
          icon.setAttribute('href', '/svg/sprite.svg#icon-minus-circle');
          console.log(`Item ${index + 1} - Set MINUS icon`);
        } else {
          icon.setAttribute('href', '/svg/sprite.svg#icon-plus-circle');
          console.log(`Item ${index + 1} - Set PLUS icon`);
        }
        
        // Verify change
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
  
  // Test sprite accessibility
  console.log('Testing sprite accessibility...');
  fetch('/svg/sprite.svg')
    .then(response => {
      console.log('Sprite fetch status:', response.status);
      if (response.ok) {
        return response.text();
      }
      throw new Error(`HTTP ${response.status}`);
    })
    .then(svgContent => {
      const hasMinusIcon = svgContent.includes('icon-minus-circle');
      const hasPlusIcon = svgContent.includes('icon-plus-circle');
      console.log('Sprite contains minus icon:', hasMinusIcon);
      console.log('Sprite contains plus icon:', hasPlusIcon);
    })
    .catch(error => {
      console.error('Sprite fetch error:', error);
    });
  
  console.log('=== Initialization complete ===');
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired');
  initQuestionsIcons();
});

if (document.readyState === 'loading') {
  console.log('DOM is loading, waiting for DOMContentLoaded');
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded from loading state');
    initQuestionsIcons();
  });
} else {
  console.log('DOM already loaded, initializing immediately');
  initQuestionsIcons();
}

export { initQuestionsIcons };

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