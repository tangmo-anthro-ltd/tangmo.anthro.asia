import { Col, Row } from 'react-bootstrap';
import RefSheet from '../../../images/refsheet.png';
import styled from 'styled-components';
import * as React from 'react';
import { FormattedMessage } from 'gatsby-plugin-react-intl';

export const CharacterSection = () => (
    <section>
        <H1 as="h2">
            <FormattedMessage id="index.aboutChara.title" />
        </H1>
        <Row>
            <Col>
                <p>
                    <FormattedMessage id="index.aboutChara.para" />
                </p>
                <a href={RefSheet}>
                    <FormattedMessage id="index.aboutChara.refSheet" />
                </a>
            </Col>
        </Row>
    </section>
);
const H1 = styled.h1``;
