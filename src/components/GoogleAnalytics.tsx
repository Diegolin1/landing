import Script from 'next/script';

/**
 * Google Analytics 4 Component
 *
 * Tracks page views, events, and user behavior on the landing page
 * Only loads if NEXT_PUBLIC_GA_ID is configured in environment
 *
 * This helps measure:
 * - Landing page traffic and sources
 * - CTA button clicks (Empezar Prueba Gratis)
 * - Scroll depth and engagement
 * - Conversion funnel from landing → signup
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Only render if GA ID is configured
  if (!gaId) {
    return null;
  }

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=Lax;Secure'
            });
          `,
        }}
      />
    </>
  );
}

/**
 * Track custom events (e.g., CTA clicks)
 * Usage: trackEvent('click_cta', { button: 'start_trial_hero' })
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * Extend window to include gtag
 */
declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
    dataLayer?: any[];
  }
}
