import { Col, Row } from 'react-bootstrap';
import * as React from 'react';
import { FormattedMessage } from 'gatsby-plugin-react-intl';
import styled from 'styled-components';

export const ContactSection = () => (
    <section id="contact">
        <H1 as="h2">
            <FormattedMessage id="contact.title" />
        </H1>
        <ContactList as="dl">
            <Col>
                <dt className="fw-normal">
                    <FormattedMessage id="contact.telegram" />
                </dt>
                <dd>@Tang_Mo</dd>
                <dd>
                    <a href="https://t.me/Tang_Mo" rel="noreferrer noopener">
                        @Tang_Mo
                    </a>
                </dd>
            </Col>

            <Col>
                <dt className="fw-normal">
                    <FormattedMessage id="contact.twitter" />
                </dt>
                <dd>
                    <a href="https://twitter.com/TangMoEat" rel="noreferrer noopener">
                        @TangMoEat
                    </a>
                </dd>
            </Col>

            <Col>
                <dt className="fw-normal">
                    <FormattedMessage id="contact.vrchat" />
                </dt>
                <dd>
                    <a
                        href="https://vrchat.com/home/user/usr_6d1b1cf8-44ea-4c7d-81a9-0d25f17dfd08"
                        rel="noreferrer noopener"
                    >
                        แตงโม TANGMO
                    </a>
                </dd>
            </Col>
        </ContactList>
    </section>
);
const ContactList = styled(Row)`
    dd,
    dt {
        display: inline;
    }
    dt {
        margin-right: 4px;
    }
    dt::after {
        content: ':';
    }
`;
const H1 = styled.h1``;
