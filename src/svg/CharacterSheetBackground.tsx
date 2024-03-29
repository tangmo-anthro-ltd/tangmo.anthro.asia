import * as React from 'react';
import styled from 'styled-components';

export const CharacterSheetBackground = () => {
    return (
        <StyledSvg width="700" height="525" viewBox="0 0 700 525">
            <path
                d="M 39.248 259.250 L 39.500 500.500 185.250 500.753 L 331 501.007 331 259.503 L 331 18 184.998 18 L 38.996 18 39.248 259.250 M 45 259 L 45 495 185.500 495 L 326 495 326 259 L 326 23 185.500 23 L 45 23 45 259 "
                fill="currentColor"
                fillRule="evenodd"
            />
            <path
                d="M 369 259 L 369 500 515 500 L 661 500 661 259 L 661 18 515 18 L 369 18 369 259 M 374 259 L 374 495 514.500 495 L 655 495 655 259 L 655 23 514.500 23 L 374 23 374 259 "
                fill="currentColor"
                fillRule="evenodd"
            />
        </StyledSvg>
    );
};

const StyledSvg = styled.svg`
    width: 100%;
    height: 100%;
    path:first-child {
        color: #2076a4;
    }
    path:nth-child(2) {
        color: #d8863c;
    }
    [data-bs-theme='light'] & {
        background: #b0b0b0;
        path:first-child {
            color: #74bce4;
        }
        path:nth-child(2) {
            color: #fccb7c;
        }
    }
`;
