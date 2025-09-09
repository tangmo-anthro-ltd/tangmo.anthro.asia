import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import Breadcrumbs from '../../components/Atom/Breadcrumbs';
import { LinkToAnchor } from '../../components/Atom/LinkToAnchor';
import Layout from '../../components/layout';

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
                                        <LinkToAnchor href="/#contact">
                                            <FormattedMessage id="reference-h.p3_contact" />
                                        </LinkToAnchor>
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
                                alt=""
                                placeholder="none"
                                loading="eager"
                            />
                            <Figure.Caption>
                                <FormattedMessage
                                    id="common.artCredits"
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
