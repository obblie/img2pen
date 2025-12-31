// Meta Pixel Configuration
// This file reads the Meta Pixel ID from environment variables
// In Vite, environment variables prefixed with VITE_ are exposed to the client

export const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || '1559480902057075';

// Initialize Meta Pixel
export function initMetaPixel() {
    if (typeof window === 'undefined' || !META_PIXEL_ID) {
        console.warn('Meta Pixel ID not configured');
        return;
    }

    // Meta Pixel Code
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    fbq('init', META_PIXEL_ID);
    fbq('track', 'PageView');
}

// Get noscript fallback image URL
export function getMetaPixelNoscriptUrl() {
    if (!META_PIXEL_ID) return '';
    return `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
}

