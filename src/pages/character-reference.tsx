import * as React from 'react';
import { Button, Col, Container, Figure, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-react-intl';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { ColorPalette } from '../components/Pages/CharacterReference/ColorPalette';
import { Download } from '../svg/Download';
import { useRef } from 'react';
import { CharacterSheetBackground } from '../svg/CharacterSheetBackground';
import { useColorSchemeContext } from '../contexts/ColorSchemeContext';
import { useJsEnabled } from '../hooks/useJsEnabled';

export default () => {
    const { formatMessage } = useIntl();
    return (
        <Layout
            title={formatMessage({ id: 'reference.title' })}
            description={formatMessage({ id: 'reference.title' })}
            extraMeta={[
                { name: 'og:image', content: 'https://tangmo.anthro.asia/refsheet-web-meta.jpg' },
                { name: 'twitter:card', content: 'summary_large_image' },
            ]}
        >
            <Page />
        </Layout>
    );
};

const Page = () => {
    const { formatMessage } = useIntl();
    const { colorScheme } = useColorSchemeContext();
    const jsEnabled = useJsEnabled();
    const [shaded, setShaded] = React.useState(false);
    const shadedInputRef = useRef(null);

    return (
        <Container>
            <h1>
                <FormattedMessage id="reference.title_v2" />
            </h1>
            <Callout className="mb-3">
                <FormattedMessage id="reference.notice_v2" />
            </Callout>
            <Row>
                <Col md={9} lg={10} classNames="d-flex justify-content-between">
                    <Figure>
                        <StaticImage
                            src="../images/reference-v2.png"
                            sizes="(min-width: 768px) 68vw, 100vw"
                            alt={formatMessage({ id: 'reference.image_alt_v2' })}
                            placeholder="none"
                        />
                        <Figure.Caption>
                            <FormattedMessage
                                id="reference.illust_credit"
                                values={{
                                    link: (
                                        <a href="https://www.kigurumikagetsu.jp" rel="noreferrer noopener">
                                            Kigurumi Kagetsu Co., Ltd.
                                        </a>
                                    ),
                                }}
                            />
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col
                    md={3}
                    lg={2}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '1em',
                    }}
                >
                    <ButtonGroup>
                        <DownloadLink
                            download
                            href="/refsheet-small-v2.png"
                            className={`btn btn-outline-${colorScheme === 'light' ? 'secondary' : 'light'}`}
                        >
                            <Download />
                            <FormattedMessage id="reference.download" />
                        </DownloadLink>
                    </ButtonGroup>
                    <StyledColorPalette />
                </Col>
            </Row>
            <h2 className="mt-3 mt-md-0">
                <FormattedMessage id="reference.title_v1" />
            </h2>
            <StyledRow>
                <input
                    type="checkbox"
                    ref={shadedInputRef}
                    id="shade-toggle"
                    onChange={e => setShaded(e.target.checked)}
                />
                <Col md={9} lg={10} classNames="d-flex justify-content-between">
                    <StyledFigure>
                        <StaticImage
                            src="../images/reference-body-flat.png"
                            sizes="(min-width: 768px) 80vw, 100vw"
                            alt={formatMessage({ id: 'reference.image_alt_v1' })}
                            placeholder="none"
                        />
                        <span>
                            <CharacterSheetBackground />
                        </span>
                        {/* Gatsby's convoluted StaticImage mess with this one, especially when JS is off */}
                        <img src="/refsheet-body-shade.png" alt="" id="shade-layer" />
                        <Figure.Caption>
                            <FormattedMessage
                                id="reference.imageCredits"
                                values={{
                                    link: (
                                        <a href="https://twitter.com/Crowwingwolf" rel="noreferrer noopener">
                                            Crowwing Wolf
                                        </a>
                                    ),
                                }}
                            />
                        </Figure.Caption>
                    </StyledFigure>
                </Col>
                <Col
                    md={3}
                    lg={2}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '1em',
                    }}
                >
                    <ButtonGroup>
                        {jsEnabled ? (
                            <Button
                                variant={
                                    shaded ? (colorScheme === 'light' ? 'outline-primary' : 'outline-info') : 'primary'
                                }
                                onClick={() => {
                                    shadedInputRef.current?.click();
                                }}
                            >
                                <FormattedMessage id="reference.toggle_shade" />
                            </Button>
                        ) : (
                            <label
                                htmlFor="shade-toggle"
                                className="btn btn-outline-info"
                                title={jsEnabled ? formatMessage({ id: 'reference.note_for_geek' }) : undefined}
                            >
                                <FormattedMessage id="reference.toggle_shade" />
                            </label>
                        )}
                        <DownloadLink
                            download
                            href="/refsheet-small-shaded.png"
                            className={`btn btn-outline-${colorScheme === 'light' ? 'secondary' : 'light'}`}
                        >
                            <Download />
                            <FormattedMessage id="reference.download" />
                        </DownloadLink>
                        <DownloadLink
                            download
                            href="/refsheet-small-flat.png"
                            className={`btn btn-outline-${colorScheme === 'light' ? 'secondary' : 'light'}`}
                        >
                            <Download />
                            <FormattedMessage id="reference.download" />
                        </DownloadLink>
                    </ButtonGroup>
                </Col>
            </StyledRow>
            <hr />
            <p>
                <FormattedMessage
                    id="reference.h_note.para"
                    values={{
                        link: (
                            <Link to="/character-reference/h">
                                <FormattedMessage id="reference.h_note.link" />
                            </Link>
                        ),
                    }}
                />
            </p>
        </Container>
    );
};

const StyledRow = styled(Row)`
    #shade-layer {
        z-index: 2;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        transition: opacity 0.5s;
        opacity: 0;
    }
    #shade-toggle {
        // Input checkbox
        display: none;
    }
    #shade-toggle:checked ~ * #shade-layer {
        opacity: 1;
    }
    [download]:nth-of-type(1) {
        // Download shaded button
        display: none;
    }
    [download]:nth-of-type(2) {
        // Download flat button
        display: block;
    }
    #shade-toggle:checked ~ * [download]:nth-of-type(1) {
        display: block;
    }
    #shade-toggle:checked ~ * [download]:nth-of-type(2) {
        display: none;
    }
`;

const StyledFigure = styled(Figure)`
    position: relative;
    // Body image
    > *:first-child {
        z-index: 2;
    }

    // Decorative background
    > *:nth-child(2) {
        display: block;
        z-index: 1;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 0.5rem;
    > * {
        display: block;
        flex-grow: 1;
    }

    // Bootstrap's md
    @media (min-width: 768px) {
        flex-direction: column;
    }
`;

const StyledColorPalette = styled(ColorPalette)`
    // Bootstrap's md
    @media (min-width: 768px) {
        margin-bottom: 37px;
    }
`;
const DownloadLink = styled.a`
    svg {
        margin-inline-end: 0.2rem;
        width: 1.25rem;
        height: 1.25rem;
    }
`;
const Callout = styled.p`
    padding: 0.75rem 1.25rem;
    color: var(--bs-warning-text-emphasis);
    background-color: var(--bs-warning-bg-subtle);
    border-left: 0.25rem solid var(--bs-warning-border-subtle, var(--bs-gray-300));
`;
