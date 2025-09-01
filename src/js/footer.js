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
      if (item.open) {
        const newHref = `${baseSpritePath}#icon-arrow-up`;
        forceIconUpdate(icon, newHref);
      } else {
        const newHref = `${baseSpritePath}#icon-arrow-down`;
        forceIconUpdate(icon, newHref);
      }
    });
  });
}

function initFooter() {
  initFooterIcons();
}

document.addEventListener('DOMContentLoaded', initFooter);

if (document.readyState !== 'loading') {
  initFooter();
}

export { initFooter, initFooterIcons };