import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-react-intl';
import { Col, Figure } from 'react-bootstrap';

export const CharacterSection = () => {
    const { formatMessage } = useIntl();
    return (
        <Col md={6} as="section">
            <Figure>
                <StaticImage
                    src="../../../images/index-chara11.png"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt={formatMessage({ id: 'index.aboutChara.imageAlt' })}
                    placeholder="none"
                    // style={{ marginTop: '-10%' }}
                />
                <Figure.Caption>
                    <FormattedMessage
                        id="common.artCredits"
                        values={{
                            link: (
                                <a href="https://twitter.com/lanhufengchen" rel="noreferrer noopener" lang="zh-CN">
                                    岚虎枫晨
                                </a>
                            ),
                        }}
                    />
                </Figure.Caption>
            </Figure>
            <h2>
                <FormattedMessage id="index.aboutChara.title" />
            </h2>
            <p>
                <FormattedMessage id="index.aboutChara.para" />
            </p>
            <Link to="/character-reference">
                <FormattedMessage id="index.aboutChara.refSheet" />
            </Link>
        </Col>
    );
};
