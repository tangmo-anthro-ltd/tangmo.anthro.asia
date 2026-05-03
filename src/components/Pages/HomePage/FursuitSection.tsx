import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl';
import { Col, Figure, Row } from 'react-bootstrap';
import styled from 'styled-components';
import fursuitPicHdr from '../../../images/IMG_4697.avif';
import fursuitPicHdr265 from '../../../images/IMG_4697.mp4';
import { HdrImgWithFallback } from '../../Atom/HdrImgWithFallback';
import { ContactSection } from './ContactSection';

export const FursuitSection = () => {
    const { formatMessage } = useIntl();
    return (
        <Row>
            <Col md={6}>
                <Figure>
                    <CroppedImageWrapper>
                        <HdrImgWithFallback
                            src={fursuitPicHdr}
                            mp4Fallback={fursuitPicHdr265}
                            alt={formatMessage({ id: 'index.aboutFursuit.imageAlt' })}
                            SdrFallback={({ className }) => (
                                <StaticImage
                                    src="../../../images/IMG_4697.jpg"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    alt={formatMessage({ id: 'index.aboutFursuit.imageAlt' })}
                                    placeholder="blurred"
                                    className={className}
                                />
                            )}
                        />
                    </CroppedImageWrapper>
                    <Figure.Caption>
                        <FormattedMessage
                            id="common.photoCredits"
                            values={{
                                link: (
                                    <a href="https://twitter.com/Rig_sor2024" rel="noreferrer noopener">
                                        Rigel
                                    </a>
                                ),
                            }}
                        />
                    </Figure.Caption>
                </Figure>
            </Col>
            <Col md={6} as="section">
                <h2 className="mt-2 mt-md-0">
                    <FormattedMessage id="index.aboutFursuit.title" />
                </h2>
                <div>
                    <p>
                        <FormattedMessage
                            id="index.aboutFursuit.madeBy"
                            values={{
                                link: (
                                    <a
                                        href="https://www.kigurumikagetsu.jp/en/%E8%A4%87%E8%A3%BD-stc"
                                        rel="noreferrer noopener"
                                    >
                                        Kigurumi Kagetsu Co., Ltd.
                                    </a>
                                ),
                            }}
                        />
                    </p>
                </div>
                <AdaptiveHr className="mt-4 mt-md-0" />
                <section className="mt-md-4">
                    <ContactSection />
                </section>
            </Col>
        </Row>
    );
};

const AdaptiveHr = styled.hr`
    // Bootstrap's md
    @media (min-width: 768px) {
        border: none; // Invisible, but stil keep the margin and semantic
    }
`;
const CroppedImageWrapper = styled.div`
    --crop-aspect: auto;
    --crop-position: top;

    @media (max-width: 767px) {
        --crop-aspect: 1 / 1;
    }
    // Bootstrap's lg
    @media (min-width: 992px) {
        --crop-aspect: 1 / 1;
    }
    // Bootstrap's xl
    @media (min-width: 1200px) {
        --crop-aspect: 4 / 3;
        --crop-position: center 12%;
    }

    aspect-ratio: var(--crop-aspect);
    overflow: hidden;

    img,
    video,
    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: var(--crop-position);
    }
`;
