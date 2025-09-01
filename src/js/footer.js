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

function initFooterIcons() {
  const accordionItems = document.querySelectorAll('.footer__accordion-item');
  
  if (accordionItems.length === 0) {
    return;
  }
  
  accordionItems.forEach((item) => {
    const icon = item.querySelector('.footer__accordion-icon use');
    
    if (!icon) {
      return;
    }
    
    const currentHref = icon.getAttribute('href');
    const baseSpritePath = currentHref.split('#')[0];
    
    item.addEventListener('toggle', () => {
      if (window.innerWidth < 1280) {
        if (item.open) {
          const newHref = `${baseSpritePath}#icon-arrow-up`;
          forceIconUpdate(icon, newHref);
        } else {
          const newHref = `${baseSpritePath}#icon-arrow-down`;
          forceIconUpdate(icon, newHref);
        }
      }
    });
  });
}

function handleDesktopFooterState() {
  const accordionItems = document.querySelectorAll('.footer__accordion-item');
  
  if (accordionItems.length === 0) {
    return;
  }

  if (window.innerWidth >= 1280) {
    accordionItems.forEach((item) => {
      item.open = true;
    });
  } else {
    accordionItems.forEach((item) => {
      item.open = false;
    });
  }
}

function initFooter() {
  initFooterIcons();
  handleDesktopFooterState();
  
  window.addEventListener('resize', () => {
    clearTimeout(window.footerResizeTimeout);
    window.footerResizeTimeout = setTimeout(() => {
      handleDesktopFooterState();
    }, 150);
  });
}

document.addEventListener('DOMContentLoaded', initFooter);

if (document.readyState !== 'loading') {
  initFooter();
}

export { initFooter, initFooterIcons, handleDesktopFooterState };