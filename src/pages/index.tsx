import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../components/layout'
import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl'
import { StaticImage } from 'gatsby-plugin-image'
import RefSheet from '../images/refsheet.png'

export default () => {
    const { formatMessage } = useIntl()
    return (
        <Layout title={formatMessage({ id: 'index.title' })}>
            <Container>
                <h1>
                    <FormattedMessage id="index.aboutMe.title" />
                </h1>
                <Row>
                    <Col md={5}>
                        <StaticImage src="../images/index.png" alt={formatMessage({ id: 'index.aboutMe.imageAlt' })} />
                    </Col>
                    <Col md={7}>
                        <p>
                            <FormattedMessage id="index.aboutMe.para" />
                        </p>
                    </Col>
                </Row>
                <hr />
                <h1>
                    <FormattedMessage id="index.aboutChara.title" />
                </h1>
                <Row>
                    <Col>
                        <p>
                            <FormattedMessage id="index.aboutChara.para" />
                        </p>
                        <a href={RefSheet}>
                            <FormattedMessage id="index.aboutChara.refSheet" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
