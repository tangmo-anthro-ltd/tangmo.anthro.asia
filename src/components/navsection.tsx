import * as React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"
import { Link as PlainLink } from "gatsby"
import { Location } from '@reach/router';
import { ReactNode } from "react"

// This is unnecessarily complicated
// See https://github.com/wiziple/gatsby-plugin-intl/issues/42
const LocaleLink = ({ children, to }: ILinkOrSpanProps) => {
  const { locale, defaultLocale } = useIntl()
  if (to === locale) {
    return <span>{children}</span>
  }
  const urlPrefix = to === defaultLocale ? '' : '/' + to;
  return <Location>
    {({ location }) => (
      <PlainLink
        to={((urlPrefix + location.pathname.replace('/' + locale, '')).replace(/\/$/, '') || '/') + location.search}
      >
        {children}
      </PlainLink>
    )}
  </Location>;
}

interface ILinkOrSpanProps {
  children: ReactNode;
  to: string;
}

export function NavSection() {
  return (
    <Container>
      <nav>
        <Row style={{ marginTop: "1rem" }}>
          <Col md={4} className={["text-center", "text-md-left"]}>
            <h1 className="h5">
              <Link to="/">
                <FormattedMessage id="nav.title" />
              </Link>
            </h1>
          </Col>
          <Col md={4} className="text-center">
            <Link to="/">
              <FormattedMessage id="nav.home" />
            </Link>
            {" | "}
            <Link to="/about">
              <FormattedMessage id="nav.about" />
            </Link>
            {" | "}
            <Link to="/contact">
              <FormattedMessage id="nav.contact" />
            </Link>
          </Col>
          <Col md={4} className={["text-center", "text-md-right"]}>
            <LocaleLink to="th">ภาษาไทย</LocaleLink>
            {" "}
            <LocaleLink to="en">English</LocaleLink>
            {" "}
            <LocaleLink to="en-emodeng">UwU</LocaleLink>
          </Col>
        </Row>
      </nav>
      <hr />
    </Container>
  )
}
