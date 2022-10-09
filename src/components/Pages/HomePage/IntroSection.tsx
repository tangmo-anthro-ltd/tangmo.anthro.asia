import { Col, Figure, Row } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl';

export const IntroSection = () => {
    const { formatMessage } = useIntl();
    return (
        <>
            <Row>
                <Col md={7} style={{ order: 2 }}>
                    <h1>
                        <FormattedMessage id="index.aboutMe.title" />
                    </h1>
                    <p>
                        <FormattedMessage id="index.aboutMe.para" />
                    </p>
                </Col>
                <Col md={5} style={{ order: 1 }}>
                    <Figure>
                        <a href="https://tangmo-gal.anthro.asia/picture/773">
                            <StaticImage
                                src="../../../images/index-anemo.jpg"
                                sizes="(min-width: 768px) 40vw, 100vw"
                                alt={formatMessage({ id: 'index.aboutMe.imageAlt' })}
                            />
                        </a>
                        <Figure.Caption>
                            <FormattedMessage id="index.aboutMe.imageCaption" />
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </>
    );
};
