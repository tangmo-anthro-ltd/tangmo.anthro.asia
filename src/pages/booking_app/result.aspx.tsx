import * as React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../../components/layout';
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-react-intl"

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
                                <Link to="/#contact">
                                    <FormattedMessage id="bookingApp.result.link_text" />
                                </Link>
                            ),
                        }}
                    />
                </p>
            </Container>
        </Layout>
    );
};
