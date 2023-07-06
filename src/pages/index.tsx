import * as React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/layout';
import { useIntl } from 'gatsby-plugin-react-intl';
import { ContactSection } from '../components/Pages/HomePage/ContactSection';
import { CharacterSection } from '../components/Pages/HomePage/CharacterSection';
import { IntroSection } from '../components/Pages/HomePage/IntroSection';
import styled, { keyframes } from 'styled-components';

export default () => {
    const { formatMessage } = useIntl();
    return (
        <Layout title={formatMessage({ id: 'index.title' })}>
            <AnchorAwareContainer>
                <IntroSection />
                <hr />
                <CharacterSection />
                <hr />
                <ContactSection />
            </AnchorAwareContainer>
        </Layout>
    );
};

const flashAnimation = keyframes`
    0% {
        background-color: transparent;
    }
    50% {
        background-color: var(--bs-warning-border-subtle);
    }
    100% {
        background-color: transparent;
    }
`;
const AnchorAwareContainer = styled(Container)`
    section:target {
        animation: ${flashAnimation} 1s ease-in-out 1;
    }
`;
