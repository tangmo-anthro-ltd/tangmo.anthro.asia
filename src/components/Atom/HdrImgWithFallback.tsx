import { ImgHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

interface DynamicGainmapImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    SdrFallback: ({ className }: { className: string }) => ReactNode;
    mp4Fallback?: string;
}

const checkVideoFallback = () => {
    if (typeof window === 'undefined') return false;
    const ua = navigator.userAgent;
    if (/^((?!chrome|android).)*safari/i.test(ua) && window.matchMedia?.('(dynamic-range: high)')?.matches) {
        const matchVal = ua.match(/Version\/(\d+)\./);
        // Safari before v26: media query shows true due to legacy HDR video support
        // but HDR image is actually not supported, falling back to HDR video
        return matchVal && parseInt(matchVal[1], 10) < 26;
    }
    if (
        /Macintosh|Mac OS X/i.test(ua) &&
        /Firefox\/\d+/.test(ua) &&
        window.matchMedia?.('(video-dynamic-range: high)')?.matches
    ) {
        // Firefox on macOS supports HDR video but not HDR image
        return true;
    }
    return false;
};

export const HdrImgWithFallback = ({ SdrFallback, className, ...props }: DynamicGainmapImageProps) => {
    const [videoFallback, setVideoFallback] = useState(false);
    useEffect(() => {
        if (checkVideoFallback()) {
            setVideoFallback(true);
        }
    }, []);

    if (videoFallback && props.mp4Fallback) {
        return <HDRImage as="video" src={props.mp4Fallback} autoPlay muted playsInline className={className} />;
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
