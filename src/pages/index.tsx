import * as React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/layout';
import { useIntl } from 'gatsby-plugin-react-intl';
import { ContactSection } from '../components/Pages/HomePage/ContactSection';
import { CharacterSection } from '../components/Pages/HomePage/CharacterSection';
import { IntroSection } from '../components/Pages/HomePage/IntroSection';

export default () => {
    const { formatMessage } = useIntl();
    return (
        <Layout title={formatMessage({ id: 'index.title' })}>
            <Container>
                <IntroSection />
                <hr />
                <CharacterSection />
                <hr />
                <ContactSection />
            </Container>
        </Layout>
    );
};
