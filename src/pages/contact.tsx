import * as React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl'

export default () => {
    const { formatMessage } = useIntl()
    return (
        <Layout title={formatMessage({ id: 'contact.title' })}>
            <Container>
                <h1>
                    <FormattedMessage id="contact.title" />
                </h1>
                <ul>
                    <li>
                        <FormattedMessage id="contact.telegram" />:{' '}
                        <a href="https://t.me/Tang_Mo" rel="noreferrer noopener">
                            @Tang_Mo
                        </a>
                    </li>
                    <li>
                        <FormattedMessage id="contact.twitter" />:{' '}
                        <a href="https://twitter.com/TangMoEat" rel="noreferrer noopener">
                            @TangMoEat
                        </a>
                    </li>
                    <li>
                        <FormattedMessage id="contact.vrchat" />:{' '}
                        <a
                            href="https://vrchat.com/home/user/usr_6d1b1cf8-44ea-4c7d-81a9-0d25f17dfd08"
                            rel="noreferrer noopener"
                        >
                            แตงโม TANGMO
                        </a>
                    </li>
                </ul>
            </Container>
        </Layout>
    )
}
