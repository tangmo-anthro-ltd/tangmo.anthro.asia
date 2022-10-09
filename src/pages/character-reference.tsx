import * as React from 'react';
import { Col, Container, Figure, Row, ToggleButton } from 'react-bootstrap';
import Layout from '../components/layout';
import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl';
import { StaticImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';
import { ColorPalette } from '../components/Pages/CharacterReference/ColorPalette';
import { Download } from '../svg/Download';

export default () => {
    const { formatMessage } = useIntl();
    const [jsEnabled, setJsEnabled] = React.useState(false);
    const [shaded, setShaded] = React.useState(true);
    React.useEffect(() => {
        setJsEnabled(true);
    }, []);

    return (
        <Layout title={formatMessage({ id: 'reference.title' })}>
            <Container>
                <h1>
                    <FormattedMessage id="reference.title" />
                </h1>
                <Row>
                    <Col md={9} lg={10} classNames="d-flex justify-content-between">
                        <StyledFigure>
                            <StaticImage
                                src="../images/reference/body-flat.png"
                                sizes="(min-width: 768px) 60vw, 100vw"
                                alt={formatMessage({ id: 'reference.image_alt' })}
                            />
                            <StaticImage
                                src="../images/reference/bg-decoration.png"
                                sizes="(min-width: 768px) 60vw, 100vw"
                                alt=""
                            />
                            {/* Gatsby's convoluted StaticImage mess with this one, especially when JS is off */}
                            <ShadeImage src="/refsheet-body-shade.png" alt="" id="shade-off" $shaded={shaded} />
                            <Figure.Caption>
                                <FormattedMessage
                                    id="index.aboutChara.imageCredits"
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
                            {jsEnabled ? (
                                <>
                                    <ToggleButton
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="outline-primary"
                                        checked={shaded}
                                        value="1"
                                        onChange={() => setShaded(current => !current)}
                                        title={formatMessage({ id: 'reference.note_for_geek' })}
                                    >
                                        <FormattedMessage id="reference.shaded_option.toggle_shade" />
                                    </ToggleButton>
                                    <DownloadLink
                                        download
                                        href={shaded ? '/refsheet-small-shaded.png' : '/refsheet-small-flat.png'}
                                        className="btn btn-outline-secondary"
                                    >
                                        <Download />
                                        <FormattedMessage id="reference.download" />
                                    </DownloadLink>
                                </>
                            ) : (
                                <>
                                    <a className="btn btn-outline-primary" href="#">
                                        <FormattedMessage id="reference.shaded_option.shaded" />
                                    </a>
                                    <a className="btn btn-outline-primary" href="#shade-off">
                                        <FormattedMessage id="reference.shaded_option.flat" />
                                    </a>
                                    <DownloadDropdown tabIndex="0">
                                        <div className="btn btn-outline-secondary" style={{ width: '100%' }}>
                                            <Download />
                                            <FormattedMessage id="reference.download" />
                                        </div>
                                        <ul className="list-group">
                                            <li>
                                                <a
                                                    download
                                                    href="/refsheet-small-shaded.png"
                                                    className="list-group-item list-group-item-action"
                                                >
                                                    <FormattedMessage id="reference.shaded_option.shaded" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    download
                                                    href="/refsheet-small-flat.png"
                                                    className="list-group-item list-group-item-action"
                                                >
                                                    <FormattedMessage id="reference.shaded_option.flat" />
                                                </a>
                                            </li>
                                        </ul>
                                    </DownloadDropdown>
                                </>
                            )}
                        </ButtonGroup>
                        <StyledColorPalette />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

const StyledFigure = styled(Figure)`
    position: relative;
    // Body image
    > div:first-child {
        z-index: 2;
    }
    // Decorative background
    > div:nth-child(2) {
        z-index: 1;
        position: absolute;
        left: 0;
        top: 0;
        background: #b0b0b0;
    }
`;
const ShadeImage = styled.img`
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    transition: opacity 0.5s;
    ${({ $shaded }) =>
        $shaded
            ? css`
                  opacity: 1;
              `
            : css`
                  opacity: 0;
              `}
    :target {
        opacity: 0;
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
const DownloadCss = css`
    svg {
        margin-inline-end: 0.2rem;
        width: 1.25rem;
        height: 1.25rem;
    }
`;
const DownloadLink = styled.a`
    ${DownloadCss}
`;
const DownloadDropdown = styled.div`
    position: relative;
    ${DownloadCss}
    ul {
        position: absolute;
        left: 1em;
        top: 38px;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.5s ease;
        display: none;
        // margin: 0 0 1rem 1rem;
        padding: 0;
        text-indent: 0;
        li {
            list-style-type: none;
            a {
                width: 100%;
            }
        }
    }
    &:hover ul,
    &:focus-within ul {
        visibility: visible;
        opacity: 1;
        display: block;
    }
`;
