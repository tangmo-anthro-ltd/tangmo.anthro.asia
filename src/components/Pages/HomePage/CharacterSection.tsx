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
                <Col md={7} className="mb-3 mb-md-0">
                    <h2>
                        <FormattedMessage id="index.aboutChara.title" />
                    </h2>
                    <p>
                        <FormattedMessage id="index.aboutChara.para" />
                    </p>
                    <Link to="/character-reference">
                        <FormattedMessage id="index.aboutChara.refSheet" />
                    </Link>
                </Col>
                <Col md={5}>
                    <Figure>
                        <StaticImage
                            src="../../../images/index-chara3.png"
                            sizes="(min-width: 768px) 40vw, 100vw"
                            alt={formatMessage({ id: 'index.aboutChara.imageAlt' })}
                            placeholder="none"
                        />
                        <Figure.Caption>
                            <FormattedMessage
                                id="index.aboutChara.imageCredits"
                                values={{
                                    link: (
                                        <a
                                            href="https://twitter.com/R00mbAI1"
                                            rel="noreferrer noopener"
                                            lang="ja"
                                            aria-label="ルンバイ"
                                        >
                                            ノレンバイ
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
