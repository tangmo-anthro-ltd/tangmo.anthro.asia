import * as React from 'react'
import { Container } from "react-bootstrap"
import Layout from "../../components/layout"
import { useIntl } from "gatsby-plugin-intl"

export default ({data}) => {
    const {formatMessage} = useIntl();
    return <Layout>
        <Container>
            <h1>Hello</h1>
        </Container>
    </Layout>;
};
