import * as React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import Layout from '../../components/layout';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-react-intl';
import { StaticImage } from 'gatsby-plugin-image';
import Breadcrumbs from '../../components/Atom/Breadcrumbs';

export default () => {
    const { formatMessage } = useIntl();
    return (
        <Layout title={formatMessage({ id: 'reference-h.title' })} extraMeta={[{ name: 'robots', content: 'noindex' }]}>
            <Container>
                <Breadcrumbs
                    breadcrumbs={[
                        { path: '/character-reference', text: formatMessage({ id: 'breadcrumb.reference' }) },
                        { path: '/character-reference/h', text: formatMessage({ id: 'breadcrumb.reference-h' }) },
                    ]}
                />
                <Row>
                    <Col md={8}>
                        <h1>
                            <FormattedMessage id="reference-h.title" />
                        </h1>
                        <p>
                            <FormattedMessage id="reference-h.p1" />
                        </p>
                        <p>
                            <FormattedMessage
                                id="reference-h.p2"
                                values={{
                                    em: (
                                        <em>
                                            <FormattedMessage id="reference-h.p2_em" />
                                        </em>
                                    ),
                                }}
                            />
                            <details>
                                <summary>
                                    <FormattedMessage id="reference-h.p2_summary" />
                                </summary>
                                <FormattedMessage id="reference-h.p2_details" />
                            </details>
                        </p>
                        <p>
                            <FormattedMessage
                                id="reference-h.p3"
                                values={{
                                    c: (
                                        <Link to="/#contact">
                                            <FormattedMessage id="reference-h.p3_contact" />
                                        </Link>
                                    ),
                                }}
                            />
                        </p>
                    </Col>
                    <Col md={4}>
                        <Figure>
                            <StaticImage
                                src="../../images/reference-mouth.png"
                                sizes="(min-width: 768px) 30vw, 100vw"
                                alt={formatMessage({ id: 'index.aboutChara.imageAlt' })}
                                placeholder="tracedSVG"
                            />
                            <Figure.Caption>
                                <FormattedMessage
                                    id="reference.imageCredits"
                                    values={{
                                        link: (
                                            <a href="https://twitter.com/Crowwingwolf" rel="noreferrer noopener">
                                                Crowwing Wolf
                                            </a>
                                        ),
                                    }}
                                />
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
