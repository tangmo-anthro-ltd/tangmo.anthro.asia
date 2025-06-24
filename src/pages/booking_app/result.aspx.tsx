import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl';
import { Container } from 'react-bootstrap';
import { LinkToAnchor } from '../../components/Atom/LinkToAnchor';
import Layout from '../../components/layout';

export default () => {
    const { formatMessage } = useIntl();
    return (
        <Layout title={formatMessage({ id: 'index.title' })}>
            <Container>
                <h1>
                    <FormattedMessage id="bookingApp.result.title" />
                </h1>
                <p>
                    <FormattedMessage
                        id="bookingApp.result.content"
                        values={{
                            link: (
                                <LinkToAnchor href="/#contact">
                                    <FormattedMessage id="bookingApp.result.link_text" />
                                </LinkToAnchor>
                            ),
                        }}
                    />
                </p>
            </Container>
        </Layout>
    );
};
