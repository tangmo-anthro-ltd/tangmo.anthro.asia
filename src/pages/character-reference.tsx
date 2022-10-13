import * as React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-react-intl';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { ColorPalette } from '../components/Pages/CharacterReference/ColorPalette';
import { Download } from '../svg/Download';
import { useRef } from 'react';
import { CharacterSheetBackground } from '../svg/CharacterSheetBackground';

export default () => {
    const { formatMessage } = useIntl();
    const [jsEnabled, setJsEnabled] = React.useState(false);
    const [shaded, setShaded] = React.useState(true);
    const shadedInputRef = useRef(null);
    React.useEffect(() => {
        setJsEnabled(true);
    }, []);
    // This won't get updated without JS
    const toggleShadeLabelClass = shaded ? 'btn btn-outline-primary' : 'btn btn-primary';

    return (
        <Layout
            title={formatMessage({ id: 'reference.title' })}
            description={formatMessage({ id: 'reference.title' })}
            extraMeta={[
                { name: 'og:image', content: 'https://tangmo.anthro.asia/refsheet-web-meta.jpg' },
                { name: 'twitter:card', content: 'summary_large_image' },
            ]}
        >
            <Container>
                <h1>
                    <FormattedMessage id="reference.title" />
                </h1>
                <StyledRow>
                    <input
                        type="checkbox"
                        ref={shadedInputRef}
                        id="shade-toggle"
                        defaultChecked
                        onChange={e => setShaded(e.target.checked)}
                    />
                    <Col md={9} lg={10} classNames="d-flex justify-content-between">
                        <StyledFigure>
                            <StaticImage
                                src="../images/reference-body-flat.png"
                                sizes="(min-width: 768px) 60vw, 100vw"
                                alt={formatMessage({ id: 'reference.image_alt' })}
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
                            'flex-direction': 'column',
                            'justify-content': 'space-between',
                            gap: '1em',
                        }}
                    >
                        <ButtonGroup>
                            <label
                                htmlFor="shade-toggle"
                                className={toggleShadeLabelClass}
                                title={jsEnabled && formatMessage({ id: 'reference.note_for_geek' })}
                            >
                                <FormattedMessage id="reference.toggle_shade" />
                            </label>
                            <DownloadLink
                                download
                                href="/refsheet-small-shaded.png"
                                className="btn btn-outline-secondary"
                            >
                                <Download />
                                <FormattedMessage id="reference.download" />
                            </DownloadLink>
                            <DownloadLink
                                download
                                href="/refsheet-small-flat.png"
                                className="btn btn-outline-secondary"
                            >
                                <Download />
                                <FormattedMessage id="reference.download" />
                            </DownloadLink>
                        </ButtonGroup>
                        <StyledColorPalette />
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
        </Layout>
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
        background: #b0b0b0;
        svg {
            width: 100%;
            height: 100%;
        }
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
