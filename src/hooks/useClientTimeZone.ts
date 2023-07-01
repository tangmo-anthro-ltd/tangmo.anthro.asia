import { useEffect, useState } from 'react';

/**
 * Render a timezone as UTC, then swap it for client's time only after initial render,
 * preventing React client-server HTML mismatch
 */
export const useClientTimeZone = () => {
    const [timeZone, setTimeZone] = useState('UTC');
    useEffect(() => {
        setTimeZone(undefined);
    }, []);
    return timeZone;
};
