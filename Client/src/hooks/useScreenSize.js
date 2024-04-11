import { useState, useEffect } from 'react';

const useScreenSize = () => {
    // Check if window is defined for SSR (Server-Side Rendering) compatibility
    const isClient = typeof window === 'object';

    // Function to determine screen size
    const getScreenSize = () => {
        const width = window.innerWidth;
        if (width < 640) {
            return 'sm'; // Small screens
        } else if (width >= 640 && width < 768) {
            return 'md'; // Medium screens
        } else if (width >= 768 && width < 1024) {
            return 'lg'; // Large screens
        } else {
            return 'xl'; // Extra large screens
        }
    };

    // Initialize screenSize state based on the window width
    const [screenSize, setScreenSize] = useState(isClient ? getScreenSize() : 'sm');

    useEffect(() => {
        if (!isClient) {
            return;
        }

        let timeoutId = null;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setScreenSize(getScreenSize()), 100);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        return () => {
            // Cleanup function to remove event listener and clear timeout
            clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
        };
    }, [isClient]); // Depend on isClient to ensure effect is correctly applied client-side

    return screenSize;
};

export default useScreenSize;
