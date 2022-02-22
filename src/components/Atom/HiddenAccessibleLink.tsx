import * as React from 'react';
import styled from "styled-components"

export const HiddenAccessibleLink = styled.a`
    background: #ffffff;
    color: #4b11a8;
    border: 2px solid rgba(0, 0, 0, 0.16);
    border-radius: 2px;
    padding: 4px;
    position: absolute;
    z-index: 9999;

    :not(:focus) {
        clip: rect(0, 0, 0, 0);
    }
`;
