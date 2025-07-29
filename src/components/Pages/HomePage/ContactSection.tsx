import Discord from 'bootstrap-icons/icons/discord.svg';
import Telegram from 'bootstrap-icons/icons/telegram.svg';
import QQ from 'bootstrap-icons/icons/tencent-qq.svg';
import Twitter from 'bootstrap-icons/icons/twitter.svg';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-react-intl';
import * as React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import styled from 'styled-components';
import VRChat from '../../../icons/VRChat';
import batSticker from '../../../images/bat-sticker.avif';

export const ContactSection = () => {
    const { formatMessage } = useIntl();
    const [showModal, setShowModal] = React.useState(false);
    return (
        <section id="contact">
            <h2>
                <FormattedMessage id="contact.title" />
            </h2>
            <ContactList as="dl">
                <Col>
                    <dt className="fw-normal">
                        <Telegram /> Telegram
                    </dt>
                    <dd>
                        <a href="https://t.me/Tang_Mo" rel="noreferrer noopener">
                            @Tang_Mo
                        </a>
                    </dd>
                </Col>

                <Col>
                    <dt className="fw-normal">
                        <Twitter /> Twitter
                    </dt>
                    <dd>
                        <a href="https://twitter.com/TangMoEat" rel="noreferrer noopener">
                            @TangMoEat
                        </a>
                    </dd>
                </Col>

                <Col>
                    <dt className="fw-normal">
                        <VRChat /> VRChat
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

                <Col>
                    <dt className="fw-normal">
                        <Discord /> Discord
                    </dt>
                    <dd>
                        <FormattedMessage id="contact.discord_note" />
                    </dd>
                </Col>

                <Col>
                    <dt className="fw-normal">
                        <QQ /> QQ
                    </dt>
                    <dd>
                        <FormattedMessage id="contact.qq_note" />
                    </dd>
                </Col>
            </ContactList>
            <p>
                <FormattedMessage
                    id="contact.note"
                    values={{
                        link: (
                            <Link to="/no-hello">
                                <FormattedMessage id="contact.no_hello" />
                            </Link>
                        ),
                        summary: (
                            <Button
                                variant="link"
                                onClick={() => setShowModal(true)}
                                className="p-0"
                                style={{ display: 'inline-block', verticalAlign: 'inherit' }}
                                aria-labelledby="nohello-modal"
                            >
                                <FormattedMessage id="contact.note_summary" />
                            </Button>
                        ),
                    }}
                />
            </p>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body id="nohello-modal">
                    <div className="text-center">
                        <img
                            src={batSticker}
                            alt={formatMessage({ id: 'contact.note_img_alt' })}
                            loading="lazy"
                            style={{ maxWidth: '100%' }}
                        />
                    </div>
                </Modal.Body>
            </Modal>
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
    svg {
        // width: 1em;
        height: 1em;
    }
`;
