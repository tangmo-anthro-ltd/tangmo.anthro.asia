import { useIntl } from 'gatsby-plugin-react-intl';
import { Container } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import Layout from '../components/layout';
import { FursuitSection } from '../components/Pages/HomePage/FursuitSection';
import { IntroSection } from '../components/Pages/HomePage/IntroSection';

export default () => {
    const { formatMessage } = useIntl();
    return (
        <Layout title={formatMessage({ id: 'index.title' })}>
            <AnchorAwareContainer>
                <IntroSection />
                {/* <hr className="mt-4 mt-md-0" /> */}
                <hr />
                <FursuitSection />
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
