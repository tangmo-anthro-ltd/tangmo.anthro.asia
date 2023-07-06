import * as React from 'react';
import styled from 'styled-components';

export const HiddenAccessibleLink = styled.a`
    background: var(--bs-body-bg);
    color: var(--bs-info-text-emphasis);
    border: 2px solid var(--bs-border-color-translucent);
    border-radius: 2px;
    padding: 4px;
    position: absolute;
    z-index: 9999;

    :not(:focus) {
        clip: rect(0, 0, 0, 0);
    }
`;
