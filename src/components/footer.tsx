import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FormattedMessage } from 'gatsby-plugin-react-intl'

export function Footer() {
    return (
        <Container>
            <hr style={{ marginTop: '4rem' }} />
            <Row>
                <Col xs={8}>
                    <p>
                        <small>
                            ©2021
                            <FormattedMessage
                                id="footer.note"
                                values={{
                                    uwuifier: (
                                        <a href="https://www.npmjs.com/package/@zuzak/owo" rel="noreferrer noopener">
                                            @zuzak/owo
                                        </a>
                                    ),
                                }}
                            />
                        </small>
                    </p>
                </Col>
                <Col xs={4} className={['text-right']}>
                    <small>
                        <a href="https://github.com/tangmo-anthro-ltd/tangmo.anthro.asia" rel="noreferrer noopener">
                            <FormattedMessage id="footer.source" />
                        </a>
                    </small>
                </Col>
            </Row>
        </Container>
    )
}
