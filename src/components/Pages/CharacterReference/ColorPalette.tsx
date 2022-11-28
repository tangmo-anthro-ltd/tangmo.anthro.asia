import * as React from 'react';
import styled, { css } from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-react-intl';
import { ScreenReaderOnly } from '../../Atom/ScreenReaderOnly';

export const ColorPalette = ({ className }) => {
    return (
        <div className={className}>
            <InvisibleH2>
                <FormattedMessage id="reference.color_palette" />
            </InvisibleH2>
            <Container>
                <Color color="#243242" $textColor="white">
                    #243242
                </Color>
                <Color color="#2C599B" $textColor="white">
                    #2C599B
                </Color>
                <Color color="#74BCE2" $textColor="black">
                    #74BCE2
                </Color>
                <Color color="#FFFFFF" $textColor="black">
                    #FFFFFF
                </Color>
                <Color color="#FFC97A" $textColor="black">
                    #FFC97A
                </Color>
                <Color color="#D8863C" $textColor="black">
                    #D8863C
                </Color>
                <Color color="#CA4537" $textColor="white">
                    #CA4537
                </Color>
            </Container>
        </div>
    );
};

const InvisibleH2 = styled.h2`
    ${ScreenReaderOnly}
`;

const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    > *:nth-child(4) {
        grid-column-start: span 3;
        text-align: center;
        // Bootstrap's md
        @media (min-width: 768px) {
            grid-column-start: auto;
            text-align: start;
        }
    }
    // Bootstrap's md
    @media (min-width: 768px) {
        grid-template-columns: 1fr;
    }
    // Bootstrap's lg
    @media (min-width: 992px) {
        gap: 1rem;
        grid-template-columns: 1fr;
    }
    margin: 0;
    padding: 0;
    text-indent: 0;
    li {
        list-style-type: none;
    }
`;

const Color = styled.li`
    padding: 0.7rem;
    background: ${({ color }) => color};
    color: ${({ $textColor }) => $textColor};
`;
