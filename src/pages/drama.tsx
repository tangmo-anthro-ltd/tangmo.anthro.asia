import * as React from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-react-intl"
import { Header } from "../components/header"
import { LocaleLink } from "../components/navsection"
import { HiddenAccessibleLink } from "../components/Atom/HiddenAccessibleLink"
import { StaticImage } from "gatsby-plugin-image"

export default () => {
    const intl = useIntl();
    return (<>
        <Header title="DRAMA.anthro.ltd" />
        <Container>
            <nav>
                <HiddenAccessibleLink href="#main">
                    <FormattedMessage id="nav.skip_to_content" />
                </HiddenAccessibleLink>
                <Row style={{ marginTop: "1rem" }}>
                    <Col className={["text-center", "text-md-right"]}>
                        <LocaleLink to="th">ภาษาไทย</LocaleLink> <LocaleLink to="en">English</LocaleLink>
                    </Col>
                </Row>
            </nav>
        </Container>
        <main id="main">
            <Container style={{marginBottom: "2rem"}}>
                <Row style={{ margin: "1rem 0 2rem" }}>
                    <Col md={8} className={["text-center"]} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <div>
                        <h1 style={{ marginBottom: "1.5rem" }}>DRAMA.anthro.ltd</h1>
                        <div className="lead" style={{ marginBottom: "2rem" }}><FormattedMessage id="drama.t1"/></div>
                        <div style={{ marginBottom: "1.5rem" }}><FormattedMessage id="drama.t2"/></div>
                        <div style={{ marginBottom: "1.5rem" }}><FormattedMessage id="drama.t3"/></div>
                        </div>
                    </Col>
                    <Col md={4} className="text-right">
                        <StaticImage
                            src="../images/drama.jpg"
                            alt=""
                            imgStyle={{objectFit: 'contain'}}
                            style={{ maxHeight: "320px" }}
                        />
                    </Col>
                </Row>
                <p><FormattedMessage id="drama.p1"/></p>
                <p><FormattedMessage id="drama.p2"/></p>
                <p><FormattedMessage id="drama.p3"/></p>
                <p><FormattedMessage id="drama.p4"/></p>
                <p><FormattedMessage id="drama.p5"/></p>
                <div className="border rounded" style={{"padding": "1rem 1rem 0 1rem", "marginBottom": "1rem"}}>
                    <Form>
                        <div className="form-group row" style={{alignItems: "center"}}>
                            <div className="col">
                                <input type="text" className="form-control" placeholder={intl.formatMessage({ id: "drama.u1_placeholder" })}/>
                            </div>
                            <span><FormattedMessage id="drama.and_label" /></span>
                            <div className="col">
                                <input type="text" className="form-control" placeholder={intl.formatMessage({ id: "drama.u2_placeholder" })}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                                <FormattedMessage id="drama.topic_label" />
                            </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder={intl.formatMessage({ id: "drama.topic_placeholder" })} />
                            </div>
                        </div>
                        <div className="form-group text-right" >
                            <Link to="/drama/result" className="btn btn-primary">
                                <FormattedMessage id="drama.action_button" />
                            </Link>
                        </div>
                    </Form>
                </div>
                <p>
                    <FormattedMessage
                        id="drama.p6"
                        values={{
                            link: (
                                <a href="https://tangmo-gal.anthro.asia/whitepaper.pdf">
                                    <FormattedMessage id="drama.p6_link" />
                                </a>
                            ),
                        }}
                    />
                </p>
            </Container>
        </main>
    </>)
};
