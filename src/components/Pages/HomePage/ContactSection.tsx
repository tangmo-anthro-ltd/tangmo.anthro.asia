import { Col, Row } from 'react-bootstrap';
import * as React from 'react';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-react-intl';
import styled from 'styled-components';

export const ContactSection = () => {
    const { formatMessage } = useIntl();
    return (
        <section id="contact">
            <H1 as="h2">
                <FormattedMessage id="contact.title" />
            </H1>
            <ContactList as="dl">
                <Col>
                    <dt className="fw-normal">Telegram</dt>
                    <dd>
                        <a href="https://t.me/Tang_Mo" rel="noreferrer noopener">
                            @Tang_Mo
                        </a>
                    </dd>
                </Col>

                <Col>
                    <dt className="fw-normal">Twitter</dt>
                    <dd>
                        <a href="https://twitter.com/TangMoEat" rel="noreferrer noopener">
                            @TangMoEat
                        </a>
                    </dd>
                </Col>

                <Col>
                    <dt className="fw-normal">VRChat</dt>
                    <dd>
                        <a
                            href="https://vrchat.com/home/user/usr_6d1b1cf8-44ea-4c7d-81a9-0d25f17dfd08"
                            rel="noreferrer noopener"
                        >
                            แตงโม TANGMO
                        </a>
                    </dd>
                </Col>

                <Col>
                    <dt className="fw-normal">Discord</dt>
                    <dd>
                        <FormattedMessage id="contact.discord_note" />
                    </dd>
                </Col>

                <Col>
                    <dt className="fw-normal">QQ</dt>
                    <dd>
                        <FormattedMessage id="contact.qq_note" />
                    </dd>
                </Col>
            </ContactList>
            <NoHelloDiv>
                <FormattedMessage
                    id="contact.note"
                    values={{
                        link: (
                            <Link to="/no-hello">
                                <FormattedMessage id="contact.no_hello" />
                            </Link>
                        ),
                    }}
                />
                <NoHelloDetails>
                    <StyledSummary>
                        <FormattedMessage id="contact.note_summary" />
                        <Arrow />
                    </StyledSummary>
                    <img src="/bat-sticker.webp" alt={formatMessage({ id: 'contact.note_img_alt' })} loading="lazy" />
                </NoHelloDetails>
            </NoHelloDiv>
        </section>
    );
};
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
const NoHelloDiv = styled.div`
    position: relative;
`;
const Arrow = styled.span`
    margin-left: 4px;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.4rem 0.4rem 0.4rem 0;
    border-color: transparent currentColor transparent transparent;
    transition: transform 200ms;
`;
const StyledSummary = styled.summary`
    list-style: none;
    text-decoration: underline;
`;
const NoHelloDetails = styled.details`
    display: inline-block;
    > :not(summary) {
        z-index: 9;
        position: absolute;
        background-color: var(--bs-body-bg);
        padding: 1rem 0;
        left: 0;
        width: 200px;
    }
    &[open] ${Arrow} {
        transform: rotate(-90deg);
    }
`;
const H1 = styled.h1``;
