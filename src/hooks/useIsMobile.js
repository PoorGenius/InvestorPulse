import { useState, useEffect } from 'react';

const useIsMobile = () => {
    // Check if window is defined for SSR compatibility
    const isClient = typeof window === 'object';

    const [isMobile, setIsMobile] = useState(isClient ? window.innerWidth < 768 : false);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        let timeoutId = null;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setIsMobile(window.innerWidth < 768), 100);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
        };
    }, [isClient]); // Depend on isClient to ensure effect is correctly applied client-side

    return isMobile;
};


export default useIsMobile;