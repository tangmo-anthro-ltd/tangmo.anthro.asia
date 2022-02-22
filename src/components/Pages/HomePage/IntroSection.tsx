import { Col, Row } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl';

export const IntroSection = () => {
    const { formatMessage } = useIntl();
    return (
        <>
            <h1>
                <FormattedMessage id="index.aboutMe.title" />
            </h1>
            <Row>
                <Col md={5}>
                    <StaticImage
                        src="../../../images/index.png"
                        alt={formatMessage({ id: 'index.aboutMe.imageAlt' })}
                    />
                </Col>
                <Col md={7}>
                    <p>
                        <FormattedMessage id="index.aboutMe.para" />
                    </p>
                </Col>
            </Row>
        </>
    );
};
