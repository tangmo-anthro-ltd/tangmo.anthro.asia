import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-react-intl';
import { Link as PlainLink } from 'gatsby';
import { Location } from '@reach/router';
import { ReactNode } from 'react';
import { HiddenAccessibleLink } from './Atom/HiddenAccessibleLink';

// This is unnecessarily complicated
// See https://github.com/wiziple/gatsby-plugin-react-intl/issues/42
const LocaleLink = ({ children, to }: ILinkOrSpanProps) => {
    const { locale, defaultLocale } = useIntl();
    if (to === locale) {
        return <span>{children}</span>;
    }
    const urlPrefix = to === defaultLocale ? '' : '/' + to;
    return (
        <Location>
            {({ location }) => (
                <PlainLink to={(urlPrefix + location.pathname.replace('/' + locale, '') || '/') + location.search}>
                    {children}
                </PlainLink>
            )}
        </Location>
    );
};

interface ILinkOrSpanProps {
    children: ReactNode;
    to: string;
}

export function NavSection() {
    return (
        <Container>
            <nav>
                <HiddenAccessibleLink href="#main">
                    <FormattedMessage id="nav.skip_to_content" />
                </HiddenAccessibleLink>
                <Row style={{ marginTop: '1rem' }}>
                    <Col md={4} className={['text-center', 'text-md-start']}>
                        <h1 className="h5">
                            <Link to="/">
                                <FormattedMessage id="nav.title" />
                            </Link>
                        </h1>
                    </Col>
                    <Col md={4} className="text-center">
                        <Link to="/">
                            <FormattedMessage id="nav.about" />
                        </Link>
                        {' | '}
                        <a href="https://tangmo-gal.anthro.asia">
                            <FormattedMessage id="nav.gallery" />
                        </a>
                    </Col>
                    <Col md={4} className={['text-center', 'text-md-end']}>
                        <LocaleLink to="th">ภาษาไทย</LocaleLink> <LocaleLink to="en">English</LocaleLink>{' '}
                        <LocaleLink to="en-emodeng">UwU</LocaleLink>
                    </Col>
                </Row>
            </nav>
            <hr />
        </Container>
    );
}
