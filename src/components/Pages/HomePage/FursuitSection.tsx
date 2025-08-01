import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import fursuitPicHdr from '../../../images/20250520_234939_gm.avif';
import { HdrImgWithFallback } from '../../Atom/HdrImgWithFallback';
import { ContactSection } from './ContactSection';

export const FursuitSection = () => {
    const { formatMessage } = useIntl();
    return (
        <StyledRow>
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
            <Col md={6}>
                <HdrImgWithFallback
                    src={fursuitPicHdr}
                    alt={formatMessage({ id: 'index.aboutChara.imageAlt' })}
                    SdrFallback={({ className }) => (
                        <StaticImage
                            src="../../../images/20250520_234939.jpg"
                            sizes="(min-width: 768px) 50vw, 100vw"
                            alt={formatMessage({ id: 'index.aboutChara.imageAlt' })}
                            placeholder="blurred"
                            className={className}
                        />
                    )}
                />
            </Col>
        </StyledRow>
    );
};

const AdaptiveHr = styled.hr`
    // Bootstrap's md
    @media (min-width: 768px) {
        border: none; // Invisible, but stil keep the margin and semantic
    }
`;
const StyledRow = styled(Row)`
    // Bootstrap's md
    @media (max-width: 767px) {
        > :nth-child(1) {
            order: 2;
        }
        > :nth-child(2) {
            order: 1;
        }
    }
`;
