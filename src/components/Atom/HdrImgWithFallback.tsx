import { ImgHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

interface DynamicGainmapImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    SdrFallback: ({ className }: { className: string }) => ReactNode;
    mp4Fallback?: string;
}

export const HdrImgWithFallback = ({ SdrFallback, className, mp4Fallback, ...props }: DynamicGainmapImageProps) => {
    const [videoFallback, setVideoFallback] = useState(false);
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const ua = navigator.userAgent;
        const isSafariBelow26 = (() => {
            if (!/^((?!chrome|android).)*safari/i.test(ua)) {
                return false;
            }
            const matchVal = ua.match(/Version\/(\d+)\./);
            return !!(matchVal && parseInt(matchVal[1], 10) < 26);
        })();
        const isFirefoxMac = /Macintosh|Mac OS X/i.test(ua) && /Firefox\/\d+/.test(ua);

        let mq: MediaQueryList | undefined;
        let vmq: MediaQueryList | undefined;
        if (isSafariBelow26) {
            // Safari before v26: media query shows true due to legacy HDR video support
            // but HDR image is actually not supported, falling back to HDR video
            mq = window.matchMedia?.('(dynamic-range: high)');
        }
        if (isFirefoxMac) {
            // Firefox on macOS supports HDR video but not HDR image
            vmq = window.matchMedia?.('(video-dynamic-range: high)');
        }
        const updateFallback = () => {
            setVideoFallback(!!(mq?.matches || vmq?.matches));
        };
        updateFallback();
        mq?.addEventListener?.('change', updateFallback);
        vmq?.addEventListener?.('change', updateFallback);
        return () => {
            mq?.removeEventListener?.('change', updateFallback);
            vmq?.removeEventListener?.('change', updateFallback);
        };
    }, []);

    if (videoFallback && mp4Fallback) {
        return <HDRImage as="video" src={mp4Fallback} autoPlay muted playsInline className={className} />;
    }

    return (
        <>
            <HDRImage {...props} className="hdr-only" loading="lazy" />
            <SdrFallback className="sdr-only" />
        </>
    );
};

const HDRImage = styled.img`
    opacity 0.5;
    max-width: 100%;
    max-height: 100%;
`;
