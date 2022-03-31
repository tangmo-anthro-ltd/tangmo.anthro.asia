import * as React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../../components/layout';
import { FormattedMessage, Link } from 'gatsby-plugin-react-intl';

export default () => {
    return (
        <Layout>
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
