/**
 * Scroll suave a una sección específica
 * @param sectionId - ID de la sección (sin #)
 */
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Scroll suave al DemoBooking
 */
export const scrollToDemoBooking = () => {
  scrollToSection('demo-booking');
};

/**
 * Scroll suave a Características
 */
export const scrollToCaracteristicas = () => {
  scrollToSection('caracteristicas');
};

/**
 * Scroll suave a Precios
 */
export const scrollToPricing = () => {
  scrollToSection('precios');
};

/**
 * Scroll suave a FAQ
 */
export const scrollToFAQ = () => {
  scrollToSection('faq');
};
