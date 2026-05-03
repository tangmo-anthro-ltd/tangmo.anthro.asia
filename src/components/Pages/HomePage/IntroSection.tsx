import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-react-intl';
import { Col, Figure, Row } from 'react-bootstrap';
import styled from 'styled-components';
import charaPicHdr from '../../../images/index-chara11_hdr.avif';
import CharaPicHdr265 from '../../../images/index-chara11_hdr.mp4';
import { HdrImgWithFallback } from '../../Atom/HdrImgWithFallback';

export const IntroSection = () => {
    const { formatMessage } = useIntl();
    return (
        <section id="about">
            <StyledRow>
                <Col md={7}>
                    <h1>
                        <FormattedMessage id="index.aboutMe.title" />
                    </h1>
                    <p>
                        <FormattedMessage id="index.aboutMe.para" />
                    </p>
                    <Link
                        to="/character-reference"
                        className="btn btn-outline-primary"
                        style={{ color: 'var(--bs-body-color)' }}
                    >
                        <FormattedMessage id="index.aboutMe.refSheet" />
                    </Link>
                </Col>
                <Col md={5}>
                    <Figure>
                        <Link to="/character-reference">
                            <HdrImgWithFallback
                                src={charaPicHdr}
                                mp4Fallback={CharaPicHdr265}
                                alt={formatMessage({ id: 'index.aboutMe.charaImageAlt' })}
                                SdrFallback={({ className }) => (
                                    <StaticImage
                                        src="../../../images/index-chara11.png"
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        alt={formatMessage({ id: 'index.aboutMe.charaImageAlt' })}
                                        placeholder="blurred"
                                        className={className}
                                    />
                                )}
                            />
                        </Link>
                        <Figure.Caption className="text-end">
                            <FormattedMessage
                                id="common.artCredits"
                                values={{
                                    link: (
                                        <a
                                            href="https://twitter.com/lanhufengchen"
                                            rel="noreferrer noopener"
                                            lang="zh-CN"
                                        >
                                            岚虎枫晨
                                        </a>
                                    ),
                                }}
                            />
                            <span className="hdr-only">
                                <FormattedMessage id="common.artHdrEditCredit" />
                            </span>
                        </Figure.Caption>
                    </Figure>
                </Col>
            </StyledRow>
        </section>
    );
};
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
