import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-react-intl';
import { Link as PlainLink } from 'gatsby';
import { Location } from '@reach/router';
import { ReactNode } from 'react';
import { HiddenAccessibleLink } from './Atom/HiddenAccessibleLink';

// This is unnecessarily complicated
// See https://github.com/wiziple/gatsby-plugin-react-intl/issues/42
const LocaleLink = ({ children, to, lang }: ILocaleLinkProps) => {
    const { locale, defaultLocale } = useIntl();
    if (to === locale) {
        return <span lang={lang}>{children}</span>;
    }
    const urlPrefix = to === defaultLocale ? '' : '/' + to;
    return (
        <Location>
            {({ location }) => (
                <PlainLink
                    lang={lang}
                    to={(urlPrefix + location.pathname.replace('/' + locale, '') || '/') + location.search}
                >
                    {children}
                </PlainLink>
            )}
        </Location>
    );
};

// Standard link without client-side navigation, or CSS :target won't be triggered properly
const LinkToAnchor = ({ children, href }: { children: ReactNode; href: string }) => {
    const { locale, defaultLocale } = useIntl();
    const urlPrefix = locale === defaultLocale ? '' : `/${locale}`;
    return <a href={urlPrefix + href}>{children}</a>;
};

interface ILocaleLinkProps {
    children: ReactNode;
    to: string;
    lang: string;
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
                        <LinkToAnchor href="/#about">
                            <FormattedMessage id="nav.about" />
                        </LinkToAnchor>
                        {' | '}
                        <a href="https://tangmo-gal.anthro.asia">
                            <FormattedMessage id="nav.gallery" />
                        </a>
                        {' | '}
                        <LinkToAnchor href="/#contact">
                            <FormattedMessage id="nav.contact" />
                        </LinkToAnchor>
                    </Col>
                    <Col md={4} className={['text-center', 'text-md-end']}>
                        <LocaleLink to="th" lang="th">
                            ภาษาไทย
                        </LocaleLink>{' '}
                        <LocaleLink to="en" lang="en">
                            English
                        </LocaleLink>{' '}
                        <LocaleLink to="en-emodeng" lang="en">
                            UwU
                        </LocaleLink>
                    </Col>
                </Row>
            </nav>
            <hr />
        </Container>
    );
}
