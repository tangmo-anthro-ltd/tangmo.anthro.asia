import { graphql, useStaticQuery } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-react-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { NumericDateTime } from './Atom/NumericDateTime';

export function Footer() {
    const query = useStaticQuery(graphql`
        query {
            site {
                buildTime
            }
        }
    `);
    return (
        <Container as="footer">
            <hr style={{ marginTop: '4rem' }} />
            <Row>
                <Col xs={10}>
                    <p>
                        <small>
                            <FormattedMessage
                                id="footer.last_updated"
                                values={{
                                    date: <NumericDateTime date={new Date(query.site.buildTime)} />,
                                }}
                            />
                        </small>
                    </p>
                </Col>
                <Col xs={2} className="text-end">
                    <small>
                        <a href="https://github.com/tangmo-anthro-ltd/tangmo.anthro.asia" rel="noreferrer noopener">
                            <FormattedMessage id="footer.source" />
                        </a>
                    </small>
                </Col>
            </Row>
        </Container>
    );
}
