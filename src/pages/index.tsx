import * as React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { useIntl } from 'gatsby-plugin-intl'

export default ({ data }) => {
    const { formatMessage } = useIntl()
    return (
        <Layout>
            <Container>
                <Img fluid={data.image1.childImageSharp.fluid} alt={formatMessage({ id: 'index.imageAlt' })} />
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
