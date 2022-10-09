import { Col, Figure, Row } from 'react-bootstrap';
import styled from 'styled-components';
import * as React from 'react';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-react-intl';
import { StaticImage } from 'gatsby-plugin-image';

export const CharacterSection = () => {
    const { formatMessage } = useIntl();
    return (
        <section>
            <Row>
                <Col md={8}>
                    <H1 as="h2">
                        <FormattedMessage id="index.aboutChara.title" />
                    </H1>
                    <p>
                        <FormattedMessage id="index.aboutChara.para" />
                    </p>
                    <Link to="/character-reference">
                        <FormattedMessage id="index.aboutChara.refSheet" />
                    </Link>
                </Col>
                <Col md={4}>
                    <Figure>
                        <StaticImage
                            src="../../../images/index-chara.jpg"
                            sizes="(min-width: 768px) 35vw, 100vw"
                            alt={formatMessage({ id: 'index.aboutChara.imageAlt' })}
                        />
                        <Figure.Caption>
                            <FormattedMessage
                                id="index.aboutChara.imageCredits"
                                values={{
                                    link: (
                                        <a
                                            href="https://www.facebook.com/profile.php?id=100077583383830"
                                            rel="noreferrer noopener"
                                        >
                                            骑士长
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
const H1 = styled.h1``;
