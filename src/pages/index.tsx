import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../components/layout'
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({ data }) => {
    const { formatMessage } = useIntl()
    return (
        <Layout title={formatMessage({ id: 'index.title' })}>
            <Container>
                <h1>
                    <FormattedMessage id="index.aboutMe.title" />
                </h1>
                <Row>
                    <Col md={5}>
                        <Img
                            fluid={data.image1.childImageSharp.fluid}
                            alt={formatMessage({ id: 'index.aboutMe.imageAlt' })}
                        />
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
                        <a href="/refsheet.jpg">
                            <FormattedMessage id="index.aboutChara.refSheet" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query {
        image1: file(relativePath: { eq: "index.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
