import { ImgHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

interface DynamicGainmapImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    SdrFallback: ({ className }: { className: string }) => ReactNode;
}

const isForceSdr = () => {
    if (typeof window === 'undefined') return false;
    // return true;
    const ua = navigator.userAgent;
    if (/^((?!chrome|android).)*safari/i.test(ua)) {
        const matchVal = ua.match(/Version\/(\d+)\./);
        // Safari before v26: media query shows true due to legacy HDR video support
        // but HDR image is actually not supported
        return matchVal && parseInt(matchVal[1], 10) < 26;
    }
    return false;
};

export const HdrImgWithFallback = ({ SdrFallback, className, ...props }: DynamicGainmapImageProps) => {
    const [forceSDR, setForceSDR] = useState(false);

    useEffect(() => {
        if (isForceSdr()) {
            setForceSDR(true);
        }
    }, []);

    return (
        <>
            {!forceSDR && <HDRImage {...props} className="hdr-only" loading="lazy" />}
            <SdrFallback className={forceSDR ? '' : 'sdr-only'} />
        </>
    );
};

const HDRImage = styled.img`
    opacity 0.5;
    max-width: 100%;
    max-height: 100%;
`;
