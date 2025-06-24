import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-react-intl';
import { Col, Figure, Row } from 'react-bootstrap';

export const IntroSection = () => {
    const { formatMessage } = useIntl();
    return (
        <section id="about">
            <Row>
                <Col md={7} style={{ order: 2 }}>
                    <h1>
                        <FormattedMessage id="index.aboutMe.title" />
                    </h1>
                    <p>
                        <FormattedMessage id="index.aboutMe.para" />
                    </p>
                    <Link
                        to="/character-reference"
                        className="btn btn-outline-primary"
                        style={{ color: 'var(--bs-body-color)' }}
                    >
                        <FormattedMessage id="index.aboutMe.refSheet" />
                    </Link>
                </Col>
                <Col md={5} style={{ order: 1 }}>
                    <Figure>
                        <Link to="/character-reference">
                            <StaticImage
                                src="../../../images/index-chara11.png"
                                sizes="(min-width: 768px) 50vw, 100vw"
                                alt={formatMessage({ id: 'index.aboutMe.charaImageAlt' })}
                                placeholder="none"
                            />
                        </Link>
                        <Figure.Caption>
                            <FormattedMessage
                                id="common.artCredits"
                                values={{
                                    link: (
                                        <a
                                            href="https://twitter.com/lanhufengchen"
                                            rel="noreferrer noopener"
                                            lang="zh-CN"
                                        >
                                            岚虎枫晨
                                        </a>
                                    ),
                                }}
                            />
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </section>
    );
};
